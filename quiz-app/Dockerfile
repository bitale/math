# ── Stage 1: Build client ──
FROM node:20-alpine AS build-client
WORKDIR /app
COPY quiz-app/client/package*.json ./quiz-app/client/
RUN cd quiz-app/client && npm ci
COPY quiz-app/client/ ./quiz-app/client/
RUN cd quiz-app/client && npm run build

# ── Stage 2: Build server ──
FROM node:20-alpine AS build-server
WORKDIR /app
# 서버의 tsconfig가 ../../src/data 를 참조하므로 상위 데이터도 복사
COPY src/types.ts ./src/types.ts
COPY src/data/ ./src/data/
COPY quiz-app/server/package*.json ./quiz-app/server/
RUN cd quiz-app/server && npm ci
COPY quiz-app/server/ ./quiz-app/server/
RUN cd quiz-app/server && npx tsc

# ── Stage 3: Production ──
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# 서버 빌드 결과 + 의존성
COPY --from=build-server /app/quiz-app/server/dist ./dist
COPY --from=build-server /app/quiz-app/server/node_modules ./node_modules
COPY --from=build-server /app/quiz-app/server/package.json ./

# 클라이언트 빌드 결과를 서버가 서빙할 경로에 복사
COPY --from=build-client /app/quiz-app/client/dist ./client-dist

EXPOSE 3001
CMD ["node", "dist/quiz-app/server/src/index.js"]
