import { z } from "zod";
import type { LeadSource } from "@/types/lead";

const trimmed = z.string().transform((s) => s.trim());

export const leadSchema = z.object({
  name: trimmed.pipe(
    z.string().min(2, "Name must be at least 2 characters").max(100)
  ),
  phone: trimmed.pipe(
    z.string().regex(/^\d{10}$/, "Phone must be exactly 10 digits")
  ),
  email: z
    .string()
    .transform((s) => s.trim())
    .pipe(z.string().email("Please enter a valid email"))
    .optional()
    .or(z.literal("")),
  city: z
    .string()
    .transform((s) => s.trim())
    .optional()
    .or(z.literal("")),
  service: trimmed.pipe(z.string().min(1, "Please select a service")),
  budget: trimmed.pipe(z.string().min(1, "Please select a budget range")),
  message: trimmed.pipe(
    z
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(2000, "Message is too long")
  ),
  source: z.enum(["Hero", "Contact", "ProjectCTA", "CityPage"] as const),
  projectSlug: z.string().optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to proceed" }),
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export const serviceOptions = [
  "Interior Design",
  "Space Planning",
  "Bespoke Furnishing",
  "Full Home Design",
  "Commercial Design",
  "Consultation Only",
];

export const budgetOptions = [
  "Under ₹5 Lakh",
  "₹5–10 Lakh",
  "₹10–25 Lakh",
  "₹25–50 Lakh",
  "₹50 Lakh – 1 Crore",
  "Above ₹1 Crore",
];

export const sourceOptions: LeadSource[] = ["Hero", "Contact", "ProjectCTA", "CityPage"];

export const discoveryOptions = [
  "Google Search",
  "Instagram",
  "Pinterest",
  "Referral",
  "LinkedIn",
  "Other",
];
