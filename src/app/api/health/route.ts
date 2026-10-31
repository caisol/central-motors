import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Lightweight liveness/readiness probe for uptime monitoring. */
export async function GET() {
  let database = false;
  try {
    if (process.env.DATABASE_URL) {
      await db.$queryRaw`SELECT 1`;
      database = true;
    }
  } catch {
    database = false;
  }

  // The application operates seamlessly in all modes with static data fallbacks
  return NextResponse.json(
    {
      ok: true,
      database,
      mode: database ? "database" : "static-fallback",
      storage: Boolean(process.env.CLOUDINARY_URL),
      time: new Date().toISOString(),
    },
    { status: 200 },
  );
}
