import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validators";
import { processLead } from "@/lib/leadService";
import type { Lead } from "@/types/lead";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const lead: Lead = {
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      city: data.city || undefined,
      service: data.service,
      budget: data.budget,
      message: data.message,
      source: data.source,
      projectSlug: data.projectSlug || undefined,
      createdAt: new Date().toISOString(),
      consent: data.consent,
    };

    const result = await processLead(lead);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/leads] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
