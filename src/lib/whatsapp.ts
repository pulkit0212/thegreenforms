/**
 * WhatsApp Message Builder
 * ────────────────────────
 * Centralised helper for building pre-filled WhatsApp links.
 */

const WHATSAPP_NUMBER = "918209886849";

interface WhatsAppParams {
    source?: string;
    city?: string;
    service?: string;
    projectTitle?: string;
    projectUrl?: string;
}

/** Build a user-friendly WhatsApp message from context */
export function buildWhatsAppMessage(params: WhatsAppParams = {}): string {
    const { city, service, projectTitle, projectUrl } = params;

    const lines: string[] = [
        "Hello, I'm interested in interior design services.",
        "",
    ];

    if (city) lines.push(`City: ${city}`);
    if (service) lines.push(`Service: ${service}`);
    if (projectTitle) lines.push(`Reference Project: ${projectTitle}`);
    if (projectUrl) lines.push(`Project Link: ${projectUrl}`);

    if (city || service || projectTitle) {
        lines.push("");
    }

    lines.push("Please share an estimate timeline and starting budget.");

    return lines.join("\n");
}

/** Build a full wa.me URL with pre-filled message */
export function buildWhatsAppUrl(params: WhatsAppParams = {}): string {
    const message = encodeURIComponent(buildWhatsAppMessage(params));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
