"use server";

import { contactSchema } from "@/lib/validation";

// Discriminated form-state union — drives the inline success/error UX on the
// client form via useFormState.
export type ContactFormState =
  | { status: "idle" }
  | { status: "error"; fieldErrors: Partial<Record<string, string>>; formError?: string }
  | { status: "success" };

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    region: formData.get("region"),
    service: formData.get("service"),
    message: formData.get("message"),
    company: formData.get("company"), // honeypot
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path[0];
      if (typeof path === "string" && !fieldErrors[path]) {
        fieldErrors[path] = issue.message;
      }
    }
    return {
      status: "error",
      fieldErrors,
      formError: "Please correct the highlighted fields and try again.",
    };
  }

  // Honeypot tripped — fail silently so bots get a "success" but the message
  // never reaches a human inbox. Real users never see the `company` field.
  if (parsed.data.company) {
    return { status: "success" };
  }

  // -----------------------------------------------------------------------
  // TODO(integration): Wire this up to the email provider of your choice.
  //
  // Recommended (already structured for it):
  //   1. `npm install resend`
  //   2. Set RESEND_API_KEY and CONTACT_TO_EMAIL in .env.local
  //   3. Replace the console.log below with:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY!);
  //   await resend.emails.send({
  //     from: process.env.CONTACT_FROM_EMAIL!,
  //     to: process.env.CONTACT_TO_EMAIL!,
  //     replyTo: parsed.data.email,
  //     subject: `New consultation request — ${parsed.data.name}`,
  //     text: formatPlainTextEmail(parsed.data),
  //   });
  //
  // Alternative form services that drop in cleanly here: Formspree,
  // Postmark, SendGrid, AWS SES.
  // -----------------------------------------------------------------------

  // For now, surface the submission in the server log so you can verify the
  // end-to-end flow during development. Remove or replace before launch.
  console.log("[contact] new submission", {
    receivedAt: new Date().toISOString(),
    ...parsed.data,
    // never log the honeypot value to avoid noisy logs from bots
    company: undefined,
  });

  // Simulate the network latency of a real provider so the optimistic UI
  // doesn't flash. Remove once a real provider is wired in.
  await new Promise((r) => setTimeout(r, 600));

  return { status: "success" };
}
