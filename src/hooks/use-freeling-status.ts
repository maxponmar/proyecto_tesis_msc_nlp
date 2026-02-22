"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { sileo } from "sileo";

type FreelingStatus = "connecting" | "starting" | "ready" | "error";

const POLL_INTERVAL_MS = 3000;
const MAX_POLL_ATTEMPTS = 10; // 30s max

export function useFreelingStatus() {
  const [status, setStatus] = useState<FreelingStatus>("connecting");
  const attemptsRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mountedRef = useRef(true);

  const checkHealth = useCallback(async (): Promise<boolean> => {
    try {
      const res = await fetch("/api/nlp/health");
      const data = await res.json();
      return data.freeling === true;
    } catch {
      return false;
    }
  }, []);

  const startService = useCallback(async (): Promise<boolean> => {
    try {
      const res = await fetch("/api/nlp/start");
      return res.ok;
    } catch {
      return false;
    }
  }, []);

  const stopPolling = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const pollUntilReady = useCallback(() => {
    stopPolling();
    attemptsRef.current = 0;
    timerRef.current = setInterval(async () => {
      attemptsRef.current++;
      const healthy = await checkHealth();

      if (!mountedRef.current) return;

      if (healthy) {
        stopPolling();
        setStatus("ready");
        sileo.success({ title: "Servicio de análisis listo", fill: "#61c3aa" });
      } else if (attemptsRef.current >= MAX_POLL_ATTEMPTS) {
        stopPolling();
        setStatus("error");
        sileo.error({ title: "Servicio de análisis no disponible", fill: "#ed1c80" });
      }
    }, POLL_INTERVAL_MS);
  }, [checkHealth, stopPolling]);

  useEffect(() => {
    let cancelled = false;
    mountedRef.current = true;

    async function init() {
      const healthy = await checkHealth();

      if (cancelled) return;

      if (healthy) {
        setStatus("ready");
      } else {
        setStatus("starting");
        await startService();
        if (cancelled) return;

        pollUntilReady();
      }
    }

    init();

    return () => {
      cancelled = true;
      mountedRef.current = false;
      stopPolling();
    };
  }, [checkHealth, startService, pollUntilReady, stopPolling]);

  return { status, ready: status === "ready" };
}
