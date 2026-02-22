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
    const response = await fetch(
      `${process.env.NLP_FREELING_URL}/api/startfreeling`,
      {
        method: "GET",
        signal: AbortSignal.timeout(15000),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ started: false, data }, { status: 502 });
    }

    return NextResponse.json({ started: true, data });
  } catch {
    return NextResponse.json({ started: false }, { status: 503 });
  }
}
