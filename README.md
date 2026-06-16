# AKAI STREAM - Premium Next-Gen Anime Platform

![AKAI STREAM](https://images.alphacoders.com/133/1338183.png)

AKAI STREAM is a futuristic, cinematic anime streaming platform built with Next.js 15 and NestJS. It features a Cyberpunk UI, interactive WebGL backgrounds, and advanced user features.

## 🚀 Features

- **Futuristic UI:** Deep black theme with neon accents, glassmorphism, and bento-grid layouts.
- **Interactive Backgrounds:** Real-time WebGL particle systems using Three.js.
- **Premium Video Player:** Custom player with Skip Intro, Auto-Next, and keyboard shortcuts.
- **Advanced Search:** Voice search and instant filtering.
- **Security:** JWT authentication, RBAC (Owner/Admin/User), and Audit Logging.
- **Admin Dashboard:** High-end analytics and content management system.

## 🛠 Tech Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js.
- **Backend:** NestJS, Prisma, PostgreSQL, Redis.
- **Deployment:** Vercel (Optimized for Edge Runtime).

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL instance
- Redis instance (optional)

### Installation
1. Clone the repo: `git clone ...`
2. Install dependencies: `npm install`
3. Setup `.env` files in `frontend` and `backend`.

### Running Locally
```bash
npm run dev
```
Frontend runs on `http://localhost:3000`, Backend on `http://localhost:3001`.

## 📜 Deployment

Refer to `TROUBLESHOOT_VERCEL.md` for specific instructions on deploying to Vercel and configuring mandatory environment variables.
