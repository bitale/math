import mysql from "mysql2/promise";
import { hashPassword } from "../auth/password";

/*
 * MySQL 연결(테스트 서버 192.168.0.110의 mysql-container). 모든 값은 env로 덮어쓰기 가능.
 * 부팅 시 initDb()로 테이블을 만들고 기본 관리자 계정을 시드한다.
 * DB가 없어도 게임(게스트)은 돌아가도록, 호출부는 실패를 흡수한다.
 */

const cfg = {
  host: process.env.DB_HOST || "192.168.0.110",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD ?? "xptmxm123!",
  database: process.env.DB_NAME || "quiz-app",
};

export const ADMIN_USERNAME = "admin";

let pool: mysql.Pool | null = null;
let ready = false;

export function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      ...cfg,
      waitForConnections: true,
      connectionLimit: 8,
      charset: "utf8mb4",
    });
  }
  return pool;
}

export function dbReady(): boolean {
  return ready;
}

export async function initDb(): Promise<void> {
  const p = getPool();

  await p.query(`CREATE TABLE IF NOT EXISTS app_settings (
    id INT PRIMARY KEY,
    data JSON NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

  await p.query(`CREATE TABLE IF NOT EXISTS admin_account (
    username VARCHAR(64) PRIMARY KEY,
    password_hash VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

  await p.query(`CREATE TABLE IF NOT EXISTS member (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(32) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nickname VARCHAR(24) NOT NULL,
    games_played INT NOT NULL DEFAULT 0,
    wins INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

  // 기본 관리자 시드(없을 때만). 초기 비밀번호는 ADMIN_PASSWORD env(기본 admin1234)
  const [rows] = await p.query("SELECT username FROM admin_account WHERE username=?", [ADMIN_USERNAME]);
  if ((rows as unknown[]).length === 0) {
    const pw = process.env.ADMIN_PASSWORD || "admin1234";
    await p.query("INSERT INTO admin_account (username, password_hash) VALUES (?, ?)", [ADMIN_USERNAME, hashPassword(pw)]);
  }

  ready = true;
}
