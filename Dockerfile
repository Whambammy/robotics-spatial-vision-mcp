# Multi-stage lightweight Node container for robotics-spatial-vision-mcp
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/registry.json ./registry.json
COPY --from=builder /app/bin ./bin

ENV NODE_ENV=production
ENV BASE_RPC_URL=https://mainnet.base.org

ENTRYPOINT ["node", "./bin/cli.js"]
