"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { submitContact, type ContactFormState } from "@/app/contact/actions";
import { TextField, SelectField, TextareaField } from "@/components/ui/Field";
import { services } from "@/lib/services";

const initialState: ContactFormState = { status: "idle" };

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Other / not sure yet" },
];

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);
  // Pre-select a service via ?service=... — used by the per-service CTAs.
  const params = useSearchParams();
  const preselectedService = params.get("service") ?? undefined;

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-forest-700/15 bg-cream-50 p-8 lg:p-10 shadow-soft"
      >
        <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600">Thank you</p>
        <h3 className="mt-3 text-2xl font-serif text-forest-900">
          Your message is in.
        </h3>
        <p className="mt-4 text-base leading-relaxed text-forest-900/80 max-w-prose">
          We will review the details and reply within one business day, usually
          sooner. If your situation is time sensitive (storm damage, an
          imminent permitting deadline, or a hearing date), please also call
          so we can prioritize accordingly.
        </p>
      </div>
    );
  }

  const fieldError = (key: string): string | undefined =>
    state.status === "error" ? state.fieldErrors[key] : undefined;

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-2xl border border-forest-700/10 bg-cream-50 p-6 lg:p-10 shadow-soft"
    >
      {state.status === "error" && state.formError && (
        <div
          role="alert"
          className="mb-6 rounded-md border border-bark-700/30 bg-bark-50 px-4 py-3 text-sm text-bark-800"
        >
          {state.formError}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <TextField
          label="Name"
          name="name"
          required
          autoComplete="name"
          error={fieldError("name")}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={fieldError("email")}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          hint="Optional, but helpful for time sensitive matters."
          error={fieldError("phone")}
        />
        <TextField
          label="Property address or region"
          name="region"
          placeholder="e.g. Coral Gables, FL"
          autoComplete="address-level2"
          hint="A city or neighborhood is fine."
          error={fieldError("region")}
        />
        <div className="sm:col-span-2">
          <SelectField
            label="Service of interest"
            name="service"
            required
            placeholder="Choose a service"
            defaultValue={preselectedService}
            options={serviceOptions}
            error={fieldError("service")}
          />
        </div>
        <div className="sm:col-span-2">
          <TextareaField
            label="How can we help?"
            name="message"
            required
            rows={6}
            placeholder="A few sentences about the trees, the property, any deadlines (permitting, hearing, closing), and any relevant background."
            hint="Please do not send confidential or privileged information until we have agreed on engagement terms."
            error={fieldError("message")}
          />
        </div>

        {/* Honeypot — visually hidden, off the tab order, but in the form. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company (leave blank)</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-forest-900/60 max-w-sm">
          By submitting this form you agree to be contacted about your inquiry.
          We do not share your information.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight h-12 px-6 text-base rounded-full bg-forest-700 text-cream-50 shadow-soft hover:bg-forest-800 transition-colors disabled:opacity-60 disabled:pointer-events-none"
    >
      {pending ? "Sending..." : "Send request"}
    </button>
  );
}
