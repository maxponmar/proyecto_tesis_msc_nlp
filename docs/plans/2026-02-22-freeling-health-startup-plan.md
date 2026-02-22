# FreeLing Health Check + Auto-Start Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Auto-detect and start the FreeLing NLP service when the editor loads so analysis is fast from the first keystroke.

**Architecture:** New API route proxies the VPS `startfreeling` endpoint. A new `useFreelingStatus` hook manages a `connecting → starting → ready | error` state machine. The editor page shows a status banner during startup.

**Tech Stack:** Next.js API routes, React hooks, shadcn/ui Badge component, existing `/api/nlp/health` route.

---

### Task 1: Create `/api/nlp/start` API Route

**Files:**
- Create: `src/app/api/nlp/start/route.ts`

**Step 1: Create the route file**

```typescript
// src/app/api/nlp/start/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NLP_FREELING_URL}/api/startfreeling`,
      {
        method: "GET",
        signal: AbortSignal.timeout(15000),
      }
    );

    const data = await response.json();
    return NextResponse.json({ started: response.ok, data });
  } catch {
    return NextResponse.json({ started: false }, { status: 503 });
  }
}
```

**Step 2: Verify it builds**

Run: `pnpm build`
Expected: Build succeeds with no errors related to the new route.

**Step 3: Commit**

```bash
git add src/app/api/nlp/start/route.ts
git commit -m "feat: add /api/nlp/start route to wake up FreeLing service"
```

---

### Task 2: Create `useFreelingStatus` Hook

**Files:**
- Create: `src/hooks/use-freeling-status.ts`

**Step 1: Create the hook**

```typescript
// src/hooks/use-freeling-status.ts
"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type FreelingStatus = "connecting" | "starting" | "ready" | "error";

const POLL_INTERVAL_MS = 3000;
const MAX_POLL_ATTEMPTS = 10; // 30s max

export function useFreelingStatus() {
  const [status, setStatus] = useState<FreelingStatus>("connecting");
  const attemptsRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkHealth = useCallback(async (): Promise<boolean> => {
    try {
      const res = await fetch("/api/nlp/health");
      const data = await res.json();
      return data.freeling === true;
    } catch {
      return false;
    }
  }, []);

  const startService = useCallback(async () => {
    try {
      await fetch("/api/nlp/start");
    } catch {
      // ignore — we'll check health via polling
    }
  }, []);

  const stopPolling = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const pollUntilReady = useCallback(() => {
    attemptsRef.current = 0;
    timerRef.current = setInterval(async () => {
      attemptsRef.current++;
      const healthy = await checkHealth();

      if (healthy) {
        stopPolling();
        setStatus("ready");
      } else if (attemptsRef.current >= MAX_POLL_ATTEMPTS) {
        stopPolling();
        setStatus("error");
      }
    }, POLL_INTERVAL_MS);
  }, [checkHealth, stopPolling]);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const healthy = await checkHealth();

      if (cancelled) return;

      if (healthy) {
        setStatus("ready");
      } else {
        setStatus("starting");
        await startService();
        if (!cancelled) {
          pollUntilReady();
        }
      }
    }

    init();

    return () => {
      cancelled = true;
      stopPolling();
    };
  }, [checkHealth, startService, pollUntilReady, stopPolling]);

  return { status, ready: status === "ready" };
}
```

**Step 2: Verify it builds**

Run: `pnpm build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/hooks/use-freeling-status.ts
git commit -m "feat: add useFreelingStatus hook for auto-start on page load"
```

---

### Task 3: Integrate into Editor Page

**Files:**
- Modify: `src/app/(dashboard)/editor/page.tsx`

**Step 1: Add the hook and status banner**

Add import at top:
```typescript
import { useFreelingStatus } from "@/hooks/use-freeling-status";
import { Badge } from "@/components/ui/badge";
```

Add hook call inside the component (after `useAutoSave`):
```typescript
const { status: freelingStatus } = useFreelingStatus();
```

Add status banner just inside the root `<div className="space-y-6">`, before the header section:
```tsx
{freelingStatus !== "ready" && (
  <div className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
    {freelingStatus === "connecting" && (
      <>
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
        <span>Verificando servicio de análisis...</span>
      </>
    )}
    {freelingStatus === "starting" && (
      <>
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500" />
        <span>Iniciando servicio de análisis...</span>
      </>
    )}
    {freelingStatus === "error" && (
      <>
        <Badge variant="destructive">Error</Badge>
        <span>El servicio de análisis no está disponible.</span>
      </>
    )}
  </div>
)}
```

**Step 2: Verify it builds and renders**

Run: `pnpm build`
Expected: Build succeeds.

Run: `pnpm dev` and navigate to `/editor`
Expected: See "Verificando servicio de análisis..." briefly, then either "Iniciando..." or the banner disappears when healthy.

**Step 3: Commit**

```bash
git add src/app/(dashboard)/editor/page.tsx
git commit -m "feat: show FreeLing service status banner in editor"
```

---

### Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | API route to start FreeLing | `src/app/api/nlp/start/route.ts` (create) |
| 2 | `useFreelingStatus` hook | `src/hooks/use-freeling-status.ts` (create) |
| 3 | Editor page integration | `src/app/(dashboard)/editor/page.tsx` (modify) |
