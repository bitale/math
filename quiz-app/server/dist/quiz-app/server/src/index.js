"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.httpServer = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const socket_1 = require("./socket");
const settings_1 = require("./admin/settings");
const PORT = Number(process.env.PORT) || 3001;
const isProd = process.env.NODE_ENV === "production";
const app = (0, express_1.default)();
exports.app = app;
const devOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
app.use((0, cors_1.default)({
    origin: isProd ? true : devOrigins,
    methods: ["GET", "POST"],
    credentials: true,
}));
app.use(express_1.default.json());
// 프로덕션: 클라이언트 정적 파일 서빙
if (isProd) {
    const clientDist = process.env.CLIENT_DIST || path_1.default.join(__dirname, "../../../../client-dist");
    app.use(express_1.default.static(clientDist));
}
// Health check
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});
app.get("/api/admin/settings", (_req, res) => {
    res.json((0, settings_1.getAdminSettings)());
});
app.patch("/api/admin/settings/battle", (req, res) => {
    res.json((0, settings_1.updateAdminSettings)({ battle: req.body ?? {} }));
});
app.patch("/api/admin/settings", (req, res) => {
    res.json((0, settings_1.updateAdminSettings)(req.body ?? {}));
});
app.post("/api/admin/settings/reset", (_req, res) => {
    res.json((0, settings_1.resetAdminSettings)());
});
// 프로덕션: SPA fallback (API/socket.io 이외 경로 → index.html)
if (isProd) {
    const clientDist = process.env.CLIENT_DIST || path_1.default.join(__dirname, "../../../../client-dist");
    app.get("*", (_req, res) => {
        res.sendFile(path_1.default.join(clientDist, "index.html"));
    });
}
const httpServer = (0, http_1.createServer)(app);
exports.httpServer = httpServer;
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: isProd ? true : devOrigins,
        methods: ["GET", "POST"],
        credentials: true,
    },
    pingTimeout: 60000,
    pingInterval: 25000,
});
exports.io = io;
(0, socket_1.initializeSocket)(io);
httpServer.listen(PORT, () => {
    console.log(`Quiz server running on port ${PORT} (${isProd ? "production" : "development"})`);
});
