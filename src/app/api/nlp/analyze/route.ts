import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const body = await request.json();

  try {
    const response = await fetch(`${process.env.NLP_FREELING_URL}/api/freeling`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: 502 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "El servicio de análisis no respondió" },
      { status: 503 }
    );
  }
}
