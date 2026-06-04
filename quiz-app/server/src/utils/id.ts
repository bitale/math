import { v4 as uuidv4 } from "uuid";

const ROOM_ID_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const ROOM_ID_LENGTH = 6;

export function generateRoomId(): string {
  let result = "";
  for (let i = 0; i < ROOM_ID_LENGTH; i++) {
    const index = Math.floor(Math.random() * ROOM_ID_CHARS.length);
    result += ROOM_ID_CHARS[index];
  }
  return result;
}

export function generateUserId(): string {
  return uuidv4();
}
