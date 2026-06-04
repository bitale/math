import type { RoomUser } from "../types";
import styles from "./PlayerList.module.css";

interface PlayerListProps {
  users: RoomUser[];
}

function PlayerList({ users }: PlayerListProps) {
  return (
    <div className={styles.list}>
      {users.map((user) => (
        <div key={user.userId} className={styles.playerItem}>
          <span
            className={`${styles.statusDot} ${
              user.connected ? styles.online : styles.offline
            }`}
          />
          {user.isBot && <span className={styles.crown}>봇</span>}
          <span className={styles.nickname}>{user.nickname}</span>
          {user.isBot && <span className={styles.hostLabel}>봇</span>}
          {!user.connected && (
            <span className={styles.disconnectedLabel}>연결 끊김</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default PlayerList;
