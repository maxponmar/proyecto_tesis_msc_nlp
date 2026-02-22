# FreeLing Health Check + Auto-Start Design

**Date:** 2026-02-22
**Status:** Approved

## Problem

The text analysis in the editor feels slow. The FreeLing NLP service runs on an external VPS (`66.94.124.10:4000`) and may be sleeping/off when a user opens the editor. The current implementation calls FreeLing but has no mechanism to:
1. Check if the service is alive before the user starts typing
2. Wake up the service if it's down

## Solution: Eager Startup on Page Load

When the editor page loads, automatically check FreeLing health and start it if needed, with a status indicator in the UI.

## Architecture

### New API Route: `GET /api/nlp/start`

Proxies to `http://66.94.124.10:4000/api/startfreeling`. Returns `{ started: boolean }`.

### New Hook: `useFreelingStatus`

State machine:
```
connecting → (healthy?) → ready
connecting → (unhealthy?) → starting → (poll health every 3s, max 30s) → ready | error
```

Returns: `{ status: 'connecting' | 'starting' | 'ready' | 'error', ready: boolean }`

### Editor Page Integration

Status banner at top of editor:
- `connecting` → "Verificando servicio de analisis..." (spinner)
- `starting` → "Iniciando servicio de analisis..." (spinner)
- `error` → "El servicio de analisis no esta disponible." (warning)
- `ready` → banner hidden

Analysis hook already handles API errors gracefully, so no blocking needed.

## Files

| Action | File | Description |
|--------|------|-------------|
| Create | `src/app/api/nlp/start/route.ts` | Proxy to VPS startfreeling endpoint |
| Create | `src/hooks/use-freeling-status.ts` | Health check + auto-start hook |
| Modify | `src/app/(dashboard)/editor/page.tsx` | Add hook + status banner |
