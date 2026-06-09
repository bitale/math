import { randomBytes } from "crypto";
import type { Request, Response, NextFunction } from "express";
import { getPool, ADMIN_USERNAME } from "../db/db";
import { hashPassword, verifyPassword } from "../auth/password";

/*
 * 관리자 로그인 — DB(admin_account)의 단일 계정 'admin' 비밀번호로 검증.
 * 세션 토큰은 인메모리(12h). 비밀번호 변경 지원.
 */

const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;
const sessions = new Map<string, number>(); // token → 만료시각(ms)

/** 비밀번호가 맞으면 세션 토큰 발급, 아니면 null */
export async function adminLogin(password: unknown): Promise<string | null> {
  if (typeof password !== "string" || password.length === 0) return null;
  try {
    const [rows] = await getPool().query("SELECT password_hash FROM admin_account WHERE username=?", [ADMIN_USERNAME]);
    const row = (rows as Array<{ password_hash: string }>)[0];
    if (!row || !verifyPassword(password, row.password_hash)) return null;
    const token = randomBytes(24).toString("hex");
    sessions.set(token, Date.now() + TOKEN_TTL_MS);
    return token;
  } catch {
    return null;
  }
}

/** 현재 비밀번호 확인 후 새 비밀번호로 변경 */
export async function adminChangePassword(oldPassword: unknown, newPassword: unknown): Promise<{ ok: boolean; error?: string }> {
  if (typeof newPassword !== "string" || newPassword.length < 4) return { ok: false, error: "새 비밀번호는 4자 이상" };
  if (typeof oldPassword !== "string") return { ok: false, error: "현재 비밀번호를 입력하세요" };
  try {
    const [rows] = await getPool().query("SELECT password_hash FROM admin_account WHERE username=?", [ADMIN_USERNAME]);
    const row = (rows as Array<{ password_hash: string }>)[0];
    if (!row || !verifyPassword(oldPassword, row.password_hash)) return { ok: false, error: "현재 비밀번호가 올바르지 않습니다" };
    await getPool().query("UPDATE admin_account SET password_hash=? WHERE username=?", [hashPassword(newPassword), ADMIN_USERNAME]);
    return { ok: true };
  } catch {
    return { ok: false, error: "변경에 실패했습니다" };
  }
}

export function adminLogout(token: string | undefined | null): void {
  if (token) sessions.delete(token);
}

export function isValidAdminToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const exp = sessions.get(token);
  if (!exp) return false;
  if (Date.now() > exp) { sessions.delete(token); return false; }
  return true;
}

function bearerToken(req: Request): string {
  const h = req.headers.authorization || "";
  return h.startsWith("Bearer ") ? h.slice(7).trim() : "";
}

/** 보호 라우트용 미들웨어: 유효한 Bearer 토큰이 없으면 401 */
export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!isValidAdminToken(bearerToken(req))) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }
  next();
}

export { bearerToken };
