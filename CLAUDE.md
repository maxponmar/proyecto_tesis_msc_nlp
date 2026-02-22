# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**RetmeePro** — A Spanish-language NLP text analysis platform (MSc thesis project). Built with Next.js 16, Supabase for auth and database, and deployed on Vercel. Python NLP backends (FreeLing for linguistic analysis, BERT for objective classification) run on an external server and are accessed via API route proxies.

## Repository Structure

```
src/
  app/                 → Next.js App Router
    (auth)/            → Login/register pages (public)
    (dashboard)/       → Protected pages (editor, objectives, freeling, history, survey)
    api/nlp/           → API route handlers (proxy to Python NLP services)
  components/
    ui/                → shadcn/ui components
    layout/            → Header, Sidebar
  hooks/               → Custom React hooks
  lib/
    supabase/          → Client, server, and middleware utilities
  types/               → TypeScript definitions
  middleware.ts        → Auth session refresh + route protection
supabase/
  migrations/          → SQL migration files (RLS policies)
docs/                  → Docusaurus 3.x documentation site
oldversion/            → Legacy code reference (React SPA + Express + Appwrite)
```

## Development Commands

### Next.js App (root)
```bash
pnpm dev          # Dev server (http://localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint
```

### Docusaurus Docs (`docs/`)
```bash
cd docs && pnpm start   # Dev server (http://localhost:3001)
cd docs && pnpm build   # Production build
```

### Python NLP Services (external server)
```bash
# FreeLing API: http://66.94.124.10:4000
# BERT API: http://66.94.124.10:4000
```

## Architecture

### Request Flow
```
Next.js App (Vercel)
  → Supabase Auth (cookie-based SSR sessions)
  → API Routes (/api/nlp/*)
    → POST /api/nlp/analyze   → Python FreeLing API
    → POST /api/nlp/objective → Python BERT API
    → GET  /api/nlp/health    → Health check
```

Next.js API routes act as a proxy layer — they receive requests from the frontend and forward them to the appropriate Python NLP service on the external server.

### Tech Stack
- **Next.js 16** with App Router + React Server Components
- **TypeScript** throughout
- **Tailwind CSS v4** + **shadcn/ui** for UI components
- **Supabase** (Auth with cookie-based SSR sessions, PostgreSQL with RLS, Storage)
- **Tiptap 2.x** for rich text editing (planned)
- **Docusaurus 3.x** for project documentation
- **pnpm** for package management
- **React Hook Form** + **Zod** for form validation
- **Sonner** for toast notifications

### Key Patterns
- Route groups `(auth)` and `(dashboard)` separate public and protected pages
- `src/middleware.ts` refreshes Supabase auth sessions on every request and protects dashboard routes
- Supabase client utilities in `src/lib/supabase/` provide separate clients for client components, server components, and middleware
- SQL migrations in `supabase/migrations/` define the database schema with Row Level Security policies

### Key Configuration
- `.env.local` — Supabase URL/key + NLP service URLs (see `.env.example`)
- `src/middleware.ts` — Auth session refresh + route protection
- `supabase/migrations/` — Database schema with RLS policies

## Language

The application UI is primarily in **Spanish**. Maintain this convention when adding user-facing text.
