"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeString = sanitizeString;
exports.validateNickname = validateNickname;
exports.validateRoomName = validateRoomName;
const HTML_ESCAPE_MAP = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
};
function sanitizeString(input) {
    return input.replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char] || char);
}
const NICKNAME_REGEX = /^[가-힣a-zA-Z0-9]{2,12}$/;
function validateNickname(nickname) {
    if (!nickname || typeof nickname !== "string") {
        return { valid: false, reason: "닉네임을 입력해주세요." };
    }
    const trimmed = nickname.trim();
    if (trimmed.length < 2) {
        return { valid: false, reason: "닉네임은 최소 2자 이상이어야 합니다." };
    }
    if (trimmed.length > 12) {
        return { valid: false, reason: "닉네임은 최대 12자까지 가능합니다." };
    }
    if (!NICKNAME_REGEX.test(trimmed)) {
        return {
            valid: false,
            reason: "닉네임은 한글, 영문, 숫자만 사용할 수 있습니다.",
        };
    }
    return { valid: true };
}
function validateRoomName(name) {
    if (!name || typeof name !== "string") {
        return { valid: false, sanitized: "", reason: "방 이름을 입력해주세요." };
    }
    const trimmed = name.trim();
    if (trimmed.length === 0) {
        return { valid: false, sanitized: "", reason: "방 이름을 입력해주세요." };
    }
    if (trimmed.length > 30) {
        return {
            valid: false,
            sanitized: "",
            reason: "방 이름은 최대 30자까지 가능합니다.",
        };
    }
    const sanitized = sanitizeString(trimmed);
    return { valid: true, sanitized };
}
