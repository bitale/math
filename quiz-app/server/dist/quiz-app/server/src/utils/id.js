"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRoomId = generateRoomId;
exports.generateUserId = generateUserId;
const uuid_1 = require("uuid");
const ROOM_ID_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const ROOM_ID_LENGTH = 6;
function generateRoomId() {
    let result = "";
    for (let i = 0; i < ROOM_ID_LENGTH; i++) {
        const index = Math.floor(Math.random() * ROOM_ID_CHARS.length);
        result += ROOM_ID_CHARS[index];
    }
    return result;
}
function generateUserId() {
    return (0, uuid_1.v4)();
}
