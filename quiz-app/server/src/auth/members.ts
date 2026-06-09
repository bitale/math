import { randomBytes } from "crypto";
import { getPool } from "../db/db";
import { hashPassword, verifyPassword } from "./password";

/* 회원 계정(등록/로그인) + 인메모리 세션 토큰. userId는 member-<id>로 안정적. */

const TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30일
const sessions = new Map<string, { userId: string; nickname: string; memberId: number; expires: number }>();

export interface MemberAuth { userId: string; nickname: string; token: string; }
type Result = { ok: true; member: MemberAuth } | { ok: false; error: string };

const NICK_RE = /^[가-힣a-zA-Z0-9]{2,12}$/;
const USER_RE = /^[a-zA-Z0-9_]{3,32}$/;

function makeUserId(memberId: number): string {
  return `member-${memberId}`;
}

function startSession(memberId: number, nickname: string): MemberAuth {
  const token = randomBytes(24).toString("hex");
  const userId = makeUserId(memberId);
  sessions.set(token, { userId, nickname, memberId, expires: Date.now() + TOKEN_TTL_MS });
  return { userId, nickname, token };
}

export async function registerMember(username: string, password: string, nickname: string): Promise<Result> {
  username = (username || "").trim();
  nickname = (nickname || "").trim();
  if (!USER_RE.test(username)) return { ok: false, error: "아이디는 영문/숫자/_ 3~32자" };
  if (typeof password !== "string" || password.length < 4) return { ok: false, error: "비밀번호는 4자 이상" };
  if (!NICK_RE.test(nickname)) return { ok: false, error: "닉네임은 한글/영문/숫자 2~12자" };
  try {
    const [exist] = await getPool().query("SELECT id FROM member WHERE username=?", [username]);
    if ((exist as unknown[]).length > 0) return { ok: false, error: "이미 사용 중인 아이디입니다" };
    const [r] = await getPool().query(
      "INSERT INTO member (username, password_hash, nickname) VALUES (?, ?, ?)",
      [username, hashPassword(password), nickname],
    );
    const memberId = (r as { insertId: number }).insertId;
    return { ok: true, member: startSession(memberId, nickname) };
  } catch {
    return { ok: false, error: "등록에 실패했습니다" };
  }
}

export async function loginMember(username: string, password: string): Promise<Result> {
  username = (username || "").trim();
  try {
    const [rows] = await getPool().query(
      "SELECT id, password_hash, nickname FROM member WHERE username=?",
      [username],
    );
    const row = (rows as Array<{ id: number; password_hash: string; nickname: string }>)[0];
    if (!row || !verifyPassword(password || "", row.password_hash)) {
      return { ok: false, error: "아이디 또는 비밀번호가 올바르지 않습니다" };
    }
    await getPool().query("UPDATE member SET last_login=NOW() WHERE id=?", [row.id]);
    return { ok: true, member: startSession(row.id, row.nickname) };
  } catch {
    return { ok: false, error: "로그인에 실패했습니다" };
  }
}

/** 토큰 → 게임 신원(userId/nickname). 만료/무효면 null */
export function resolveMember(token: string | undefined | null): { userId: string; nickname: string } | null {
  if (!token) return null;
  const s = sessions.get(token);
  if (!s) return null;
  if (Date.now() > s.expires) { sessions.delete(token); return null; }
  return { userId: s.userId, nickname: s.nickname };
}

export function logoutMember(token: string | undefined | null): void {
  if (token) sessions.delete(token);
}
