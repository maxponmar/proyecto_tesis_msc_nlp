# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**RetmeePro** — A Spanish-language NLP text analysis platform (MSc thesis project). Combines a React frontend with an Express.js API gateway that orchestrates Python NLP backends (FreeLing for linguistic analysis, BERT for objective classification).

## Repository Structure

```
BackEnd/
  ExpressJsApi/    → Node.js/Express API gateway (deployed on Vercel)
  FreelingAPI/     → Python Flask wrapper for FreeLing NLP server (port 4000)
  Bert/            → Python Flask BERT NER model for objective analysis
  OpenAiAPI/       → Python OpenAI integration module
FrontEnd/
  Plataforma_NLP.ReactUI/  → React + Vite SPA (deployed on GitHub Pages)
Scripts/           → Python utilities and data files (stopwords, survey data)
Documentacion/     → FreeLing installation scripts
```

No monorepo tooling — each service has independent package.json/requirements.

## Development Commands

### Frontend (`FrontEnd/Plataforma_NLP.ReactUI/`)
```bash
pnpm dev        # Vite dev server
pnpm build      # Production build
pnpm lint       # ESLint
pnpm format     # Prettier
pnpm deploy     # Deploy to GitHub Pages (gh-pages -d dist)
```

### Backend (`BackEnd/ExpressJsApi/`)
```bash
pnpm dev        # nodemon with auto-reload
pnpm start      # Production (node src/index.js)
pnpm test       # Jest tests
pnpm lint       # ESLint with --fix
```

### Python Services
```bash
# FreeLing API
cd BackEnd/FreelingAPI && python3 app.py   # Runs on port 4000

# BERT API
cd BackEnd/Bert && python3 BertAPI.py      # Runs on port 8000
```

## Architecture

### Request Flow
```
React UI (Vite)
  → Express.js API (/api/v1)
    → POST /freeling/analyze    → Python FreeLing API (port 4000)
    → POST /freeling/objetive   → Python BERT API (port 8000)
    → GET  /freeling/healtcheck
    → GET  /freeling/startfreeling
```

The Express API acts as a gateway/bridge — it receives requests from the frontend and proxies them to the appropriate Python NLP service via axios.

### Frontend Architecture
- **React 18** with **Vite**, using `@` path alias (resolves to `./src`)
- **Routing:** React Router v6 with HashRouter, route config in `src/route/Routes.js`
- **State:** Redux Toolkit + RTK Query for API calls
- **Auth:** Appwrite for user management, with AuthContext and ProtectedRoute components
- **UI:** MUI 5 + Tailwind CSS 3 (custom colors: `itn`, `backcolor`, `sidebarcolor`)
- **Rich Text:** Tiptap editor and React Quill
- **Data Grid:** AG Grid for tabular data
- Pages are in `src/pages/`, reusable components in `src/components/`

### Backend Key Details
- Express middleware stack: morgan → helmet → cors → json parser
- Deployed to Vercel as serverless (vercel.json with 60s max duration)
- Python services run on a remote server (separate from Vercel)

### Key Configuration
- Frontend API URL: `src/config/config.json` (`apiurl` field)
- Backend env: `.env` (see `.env.sample` — needs `NODE_ENV`)
- Appwrite IDs are configured in `src/appwrite/` directory
- Tailwind config: `tailwind.config.cjs`

## Language

The application UI, variable names, and comments are primarily in **Spanish**. Maintain this convention when adding user-facing text.
