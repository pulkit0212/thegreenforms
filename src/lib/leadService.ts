import { Resend } from "resend";
import type { Lead } from "@/types/lead";

function sanitize(val: string | undefined): string {
  if (!val) return "—";
  return val.replace(/[<>]/g, "");
}

function formatEmailBody(lead: Lead): string {
  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       NEW WEBSITE ENQUIRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:       ${sanitize(lead.name)}
Phone:      +91 ${sanitize(lead.phone)}
Email:      ${sanitize(lead.email)}
City:       ${sanitize(lead.city)}

Service:    ${sanitize(lead.service)}
Budget:     ${sanitize(lead.budget)}
Project:    ${sanitize(lead.projectSlug)}
Source:     ${sanitize(lead.source)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:

${sanitize(lead.message)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted At: ${lead.createdAt}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from The Green Forms website
  `.trim();
}

export async function sendLeadEmail(lead: Lead): Promise<{ success: boolean; error?: string }> {
  const subject = `New Enquiry — ${lead.name} | ${lead.service} | ${lead.budget}`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "The GreenForms <hello@thegreenforms.com>",
      to: ["uccvib@gmail.com"],
      subject,
      text: formatEmailBody(lead),
      ...(lead.email ? { reply_to: lead.email } : {}),
    });

    if (error) {
      console.error("[leadService] Resend error:", error);
      return { success: false, error: "Failed to send email" };
    }

    return { success: true };
  } catch (err) {
    console.error("[leadService] Unexpected email error:", err);
    return { success: false, error: "Email service unavailable" };
  }
}

export async function storeLead(lead: Lead): Promise<void> {
  // Dev: console log. Swap for DB/Google Sheets in production.
  console.log("[leadService] New lead stored:", JSON.stringify(lead, null, 2));
}

export async function processLead(lead: Lead): Promise<{ success: boolean; error?: string }> {
  await storeLead(lead);
  return sendLeadEmail(lead);
}
