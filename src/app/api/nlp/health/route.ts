import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${process.env.NLP_FREELING_URL}/api/freeling`, {
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
