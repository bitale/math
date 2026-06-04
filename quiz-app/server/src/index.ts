import express from "express";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { initializeSocket } from "./socket";
import { getAdminSettings, resetAdminSettings, updateAdminSettings } from "./admin/settings";

const PORT = Number(process.env.PORT) || 3001;
const isProd = process.env.NODE_ENV === "production";

const app = express();
const devOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

app.use(
  cors({
    origin: isProd ? true : devOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// 프로덕션: 클라이언트 정적 파일 서빙
if (isProd) {
  const clientDist = process.env.CLIENT_DIST || path.join(__dirname, "../../../../client-dist");
  app.use(express.static(clientDist));
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/admin/settings", (_req, res) => {
  res.json(getAdminSettings());
});

app.patch("/api/admin/settings/battle", (req, res) => {
  res.json(updateAdminSettings({ battle: req.body ?? {} }));
});

app.patch("/api/admin/settings", (req, res) => {
  res.json(updateAdminSettings(req.body ?? {}));
});

app.post("/api/admin/settings/reset", (_req, res) => {
  res.json(resetAdminSettings());
});

// 프로덕션: SPA fallback (API/socket.io 이외 경로 → index.html)
if (isProd) {
  const clientDist = process.env.CLIENT_DIST || path.join(__dirname, "../../../../client-dist");
  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: isProd ? true : devOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
  pingTimeout: 60000,
  pingInterval: 25000,
});

initializeSocket(io);

httpServer.listen(PORT, () => {
  console.log(`Quiz server running on port ${PORT} (${isProd ? "production" : "development"})`);
});

export { app, httpServer, io };
