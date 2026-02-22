import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    // Send a small probe text to verify FreeLing can actually analyze
    // (the healthcheck endpoint only checks if the process exists,
    // not if analyzer_client on port 50005 is ready)
    const response = await fetch(`${process.env.NLP_FREELING_URL}/api/freeling`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "prueba" }),
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return NextResponse.json({ status: "unhealthy", freeling: false });
    }

    const data = await response.json();
    const ready = data.result !== undefined && data.result.trim().length > 0;

    return NextResponse.json({
      status: ready ? "healthy" : "unhealthy",
      freeling: ready,
    });
  } catch {
    return NextResponse.json({
      status: "unhealthy",
      freeling: false,
    });
  }
}
