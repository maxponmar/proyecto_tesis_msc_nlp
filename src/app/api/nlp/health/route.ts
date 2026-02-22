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
    const response = await fetch(`${process.env.NLP_FREELING_URL}/api/healthcheck`, {
      method: "GET",
      signal: AbortSignal.timeout(5000),
    });

    return NextResponse.json({
      status: response.ok ? "healthy" : "unhealthy",
      freeling: response.ok,
    });
  } catch {
    return NextResponse.json({
      status: "unhealthy",
      freeling: false,
    });
  }
}
