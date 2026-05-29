import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a consultation from ${site.name}. Independent consulting arborist serving ${site.contact.serviceArea}.`,
};

export default function ContactPage() {
  return (
    <>
      <Section tone="cream" size="sm" className="pt-28 lg:pt-36">
        <FadeIn>
          <SectionHeader
            eyebrow="Contact"
            title="Request a consultation."
            intro="Tell us a little about the trees and the question you are trying to answer. We reply within one business day, and the first conversation is short, direct, and at no cost."
          />
        </FadeIn>
      </Section>

      <Section tone="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          {/* The form is a client component reading the ?service= search param,
              so it must be wrapped in <Suspense> when rendered in a server
              page (Next.js requirement). */}
          <FadeIn>
            <Suspense fallback={<div className="h-96 rounded-2xl bg-cream-100/60" aria-hidden="true" />}>
              <ContactForm />
            </Suspense>
          </FadeIn>

          <FadeIn delay={80}>
            <aside className="space-y-8">
              <div>
                <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600">By phone</p>
                <a
                  href={site.contact.phoneHref}
                  className="mt-2 inline-block text-2xl font-serif text-forest-900 hover:text-forest-800"
                >
                  {site.contact.phone}
                </a>
                <p className="mt-2 text-sm text-forest-900/65">{site.contact.hours}</p>
              </div>

              <div>
                <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600">By email</p>
                <a
                  href={site.contact.emailHref}
                  className="mt-2 inline-block text-lg font-serif text-forest-900 hover:text-forest-800 break-all"
                >
                  {site.contact.email}
                </a>
              </div>

              <div>
                <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600">Service area</p>
                <p className="mt-2 text-base text-forest-900/85 font-serif">
                  {site.contact.serviceArea}
                </p>
                <p className="mt-2 text-sm text-forest-900/65">
                  Work outside of South Florida considered case by case
                  for appraisal or repeat clients.
                </p>
              </div>

              <div className="rounded-xl border border-forest-700/10 bg-cream-100/60 p-5">
                <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600">
                  Urgent?
                </p>
                <p className="mt-2 text-sm text-forest-900/80">
                  For storm damage, imminent permitting deadlines, or
                  litigation deadlines, please call rather than email so we
                  can triage scheduling immediately.
                </p>
              </div>
            </aside>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
