import { randomBytes } from "crypto";
import type { Request, Response, NextFunction } from "express";

/*
 * 관리자 로그인 — 비밀번호 1개 + 인메모리 세션 토큰.
 * 비밀번호는 env ADMIN_PASSWORD로 설정(미설정 시 기본값). 토큰은 로그인 시 발급되어
 * 메모리에만 보관되며 서버 재시작 시 모두 무효화된다(테스트 서버 운영용으로 충분).
 */

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin1234";
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000; // 12시간

const sessions = new Map<string, number>(); // token → 만료시각(ms)

function sweep(): void {
  const now = Date.now();
  for (const [token, exp] of sessions) {
    if (now > exp) sessions.delete(token);
  }
}

/** 비밀번호가 맞으면 세션 토큰 발급, 틀리면 null */
export function adminLogin(password: unknown): string | null {
  if (typeof password !== "string" || password.length === 0) return null;
  if (password !== ADMIN_PASSWORD) return null;
  sweep();
  const token = randomBytes(24).toString("hex");
  sessions.set(token, Date.now() + TOKEN_TTL_MS);
  return token;
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
