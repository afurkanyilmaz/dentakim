import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const required = ["name", "phone", "email", "service", "message"];
    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === "") {
        return NextResponse.json({ ok: false, error: "Eksik alan" }, { status: 400 });
      }
    }
    const digits = String(body.phone).replace(/\D/g, "");
    const normalized =
      digits.startsWith("90") && digits.length >= 12
        ? digits.slice(2)
        : digits.startsWith("0")
          ? digits.slice(1)
          : digits;
    if (!/^[5-9]\d{9}$/.test(normalized)) {
      return NextResponse.json({ ok: false, error: "Geçersiz telefon" }, { status: 400 });
    }
    const id = `apt_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
    const record = {
      id,
      createdAt: new Date().toISOString(),
      ...body,
      phoneNormalized: normalized,
    };

    // Minimal "production-safe" behavior:
    // - always log server-side so the lead isn't lost in dev
    // - in non-production, also append to a local file for visibility
    // Integrations (SMTP/CRM) can be added later via environment variables.
    // eslint-disable-next-line no-console
    console.log("[appointment]", record);

    if (process.env.NODE_ENV !== "production") {
      try {
        const dir = path.join(process.cwd(), ".data");
        await fs.mkdir(dir, { recursive: true });
        await fs.appendFile(
          path.join(dir, "appointments.jsonl"),
          JSON.stringify(record) + "\n",
          "utf8"
        );
      } catch {
        // ignore file errors (e.g. read-only envs)
      }
    }

    return NextResponse.json({ ok: true, id });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
