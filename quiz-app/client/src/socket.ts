import { io, Socket } from "socket.io-client";

const URL = import.meta.env.VITE_SERVER_URL ?? "";

export const socket: Socket = io(URL, {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
});

export default socket;
