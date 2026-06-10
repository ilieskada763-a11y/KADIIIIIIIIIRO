FROM node:20-alpine AS base

FROM base AS builder
WORKDIR /app
COPY package*.json ./
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/
RUN npm install
COPY . .
RUN cd backend && npx prisma generate
RUN npm run build --workspace=backend
RUN npm run build --workspace=frontend

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/frontend/.next ./frontend/.next
COPY --from=builder /app/frontend/public ./frontend/public

EXPOSE 3000 3001
CMD ["npm", "start"]
