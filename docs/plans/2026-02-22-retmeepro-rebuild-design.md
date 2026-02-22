# RetmeePro Rebuild Design

**Date:** 2026-02-22
**Status:** Approved

## Overview

Rebuild RetmeePro (Spanish NLP text analysis platform) from a React SPA + Express gateway + Appwrite architecture to a modern Next.js App Router + Supabase stack, deployed on Vercel. Documentation via Docusaurus.

## Decisions

- **Framework:** Next.js 15 with App Router and Server Components
- **Language:** TypeScript
- **UI:** shadcn/ui + Tailwind CSS v4
- **Auth + DB + Storage:** Supabase (free tier)
- **NLP Backend:** Existing Python services (FreeLing on port 4000, BERT on port 8000) called via Next.js API routes
- **Deployment:** Vercel (free tier)
- **Docs:** Docusaurus 3.x in `/docs` subdirectory, deployed as separate Vercel project
- **Package Manager:** pnpm
- **Features:** All original features (lexical analysis, objectives, FreeLing, surveys, history, auth)

## Project Structure

```
retmeepro/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout (HTML shell, providers)
│   │   ├── page.tsx                  # Landing/home page
│   │   ├── (auth)/                   # Public auth pages (no sidebar)
│   │   │   ├── layout.tsx            # Minimal centered layout
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── (dashboard)/              # Protected pages (sidebar + header)
│   │   │   ├── layout.tsx            # Dashboard shell (sidebar, header, auth guard)
│   │   │   ├── editor/page.tsx       # Lexical richness analysis
│   │   │   ├── objectives/page.tsx   # BERT objective decomposition
│   │   │   ├── freeling/page.tsx     # FreeLing linguistic analysis
│   │   │   ├── history/page.tsx      # Document history
│   │   │   └── survey/page.tsx       # User surveys
│   │   └── api/
│   │       └── nlp/
│   │           ├── analyze/route.ts  # Proxy to FreeLing
│   │           ├── objective/route.ts# Proxy to BERT
│   │           └── health/route.ts   # Health check
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── layout/                   # Header, Sidebar
│   │   └── editor/                   # Text editor components
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts             # Browser Supabase client
│   │   │   ├── server.ts             # Server Supabase client
│   │   │   └── middleware.ts         # Auth session refresh
│   │   ├── nlp/                      # NLP service client helpers
│   │   └── utils.ts                  # Shared utilities
│   ├── hooks/                        # Custom React hooks
│   └── types/                        # TypeScript definitions
├── public/                           # Static assets
├── supabase/
│   └── migrations/                   # SQL migration files
├── docs/                             # Docusaurus site
│   ├── docusaurus.config.ts
│   ├── docs/
│   └── package.json
├── oldversion/                       # Legacy code reference
├── next.config.ts
├── tailwind.config.ts
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

## Database Schema

### Tables

**profiles** (extends Supabase auth.users):
- `id` UUID PK → auth.users(id) ON DELETE CASCADE
- `full_name` TEXT
- `created_at` TIMESTAMPTZ

**documents** (saved text analyses):
- `id` UUID PK
- `user_id` UUID FK → auth.users(id)
- `title` TEXT NOT NULL
- `content` TEXT NOT NULL
- `analysis_results` JSONB (scores, metrics, selected options)
- `created_at` TIMESTAMPTZ
- `updated_at` TIMESTAMPTZ

**surveys** (survey definitions):
- `id` UUID PK
- `title` TEXT NOT NULL
- `questions` JSONB (array of {id, question, type, range})
- `created_at` TIMESTAMPTZ

**survey_responses**:
- `id` UUID PK
- `survey_id` UUID FK → surveys(id)
- `user_id` UUID FK → auth.users(id)
- `responses` JSONB (array of {question_id, answer})
- `created_at` TIMESTAMPTZ

### Row Level Security

- `profiles`: Users read/update own profile only
- `documents`: Users CRUD own documents only
- `survey_responses`: Users insert own, admins read all
- `surveys`: All authenticated users can read

## Auth Flow

```
Browser Request
    → Next.js Middleware
        → Refreshes Supabase session cookie
        → (dashboard)/* without session → redirect /login
        → (auth)/* with session → redirect /editor
    → Page renders with server-side session access
```

- Email/password auth via Supabase Auth
- Session via HTTP-only cookies (`@supabase/ssr`)
- Middleware protects dashboard routes server-side
- No localStorage for auth state

## NLP API Proxy

```
Client Component → fetch("/api/nlp/analyze") → Route Handler → Python FreeLing (port 4000)
Client Component → fetch("/api/nlp/objective") → Route Handler → Python BERT (port 8000)
```

- Route handlers validate auth via Supabase server client
- Forward requests to Python services
- BERT endpoint uses streaming for progress feedback
- Vercel free tier: maxDuration 60s (may need polling for BERT)

## Page Architecture

| Page | Rendering | Key Tech |
|------|-----------|----------|
| Home `/` | Server Component | Static content |
| Login/Register | Client Component | Supabase Auth forms |
| Editor `/editor` | Client Component | Tiptap, debounced API calls, word highlighting |
| Objectives `/objectives` | Client Component | Form + streaming response |
| FreeLing `/freeling` | Client Component | Text input + results table |
| History `/history` | Server Component | Supabase query, data table |
| Survey `/survey` | Client Component | Dynamic form, sliders |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Auth + DB | Supabase (free tier) |
| Text Editor | Tiptap 2.x |
| Deployment | Vercel (free tier) |
| Docs | Docusaurus 3.x |
| Package Manager | pnpm |
