# Rolla AI

Rolla AI is a Next.js app for an automation agency landing page with contact lead capture, animated UI sections, Framer Motion interactions, and a Three.js founder profile visual.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env` locally and configure:

```bash
DATABASE_URL="postgresql://..."
GMAIL_USER="your-gmail@gmail.com"
GMAIL_APP_PASSWORD="your-16-char-app-password"
NOTIFY_EMAIL="you@example.com"
```

Use the same variable names in your deployment platform. Do not commit `.env`.

## Checks

```bash
npm run lint
npm run build
```

## Deploy

Vercel is the recommended free deployment target for this project because it has first-class Next.js support, automatic builds from GitHub, free hobby hosting, serverless API routes, and built-in support for environment variables.

Recommended settings:

- Framework preset: `Next.js`
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: leave default
- Environment variables: add the values from `.env.example`

The database can use Neon Postgres free tier, matching the `DATABASE_URL` format in `.env.example`.
