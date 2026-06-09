import { getPool, dbReady } from "./db";
import { GameResultData } from "../rooms/roomTypes";

/* 게임 종료 시 결과(전적)를 DB에 저장하고, 회원이면 games_played/wins를 갱신한다. */

const MEMBER_RE = /^member-(\d+)$/;

export async function recordGame(gradeKey: string, result: GameResultData): Promise<void> {
  if (!dbReady()) return;
  const tb = result.teamBattle;
  try {
    const [r] = await getPool().query(
      "INSERT INTO game (grade_key, is_team_battle, winner_team, tko, player_count) VALUES (?, ?, ?, ?, ?)",
      [gradeKey, tb.isTeamBattle ? 1 : 0, tb.winnerTeam, tb.tko ? 1 : 0, result.rankings.length],
    );
    const gameId = (r as { insertId: number }).insertId;

    for (const p of result.rankings) {
      const m = MEMBER_RE.exec(p.userId);
      const memberId = m ? Number(m[1]) : null;
      const won = tb.isTeamBattle
        ? (tb.winnerTeam !== null && p.teamId === tb.winnerTeam)
        : (p.rank === 1);

      await getPool().query(
        `INSERT INTO game_player
          (game_id, member_id, user_id, nickname, is_bot, team_id, rank_pos, score, correct, wrong, missed, max_combo, won)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [gameId, memberId, p.userId, p.nickname, p.isBot ? 1 : 0, p.teamId, p.rank,
          p.score, p.correct, p.wrong, p.missed, p.maxCombo, won ? 1 : 0],
      );

      if (memberId !== null) {
        await getPool().query(
          "UPDATE member SET games_played = games_played + 1, wins = wins + ? WHERE id = ?",
          [won ? 1 : 0, memberId],
        );
      }
    }
  } catch (e) {
    console.error("[db] recordGame 실패:", (e as Error).message);
  }
}
