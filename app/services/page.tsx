import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Independent consulting arborist services: tree risk assessment (TRAQ), health diagnosis, inventory and management plans, construction consulting, preservation, appraisal, and second opinions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <Section tone="cream" size="sm" className="pt-28 lg:pt-36">
        <FadeIn>
          <SectionHeader
            eyebrow="Services"
            title="Consulting arboriculture, end to end."
            intro="Every engagement is grounded in on site evaluation, recognized methodology, and a written report you can act on, whether that report goes into a building permit file, an insurance claim, or a courtroom exhibit."
          />
        </FadeIn>
      </Section>

      {/* Quick-jump table of contents */}
      <div className="bg-cream-50">
        <Container>
          <FadeIn>
            <nav
              aria-label="Services on this page"
              className="rounded-xl border border-forest-700/10 bg-cream-100/60 p-5 lg:p-6"
            >
              <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600 mb-3">
                On this page
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`#${s.slug}`}
                      className="text-forest-900/80 hover:text-forest-900 hover:underline underline-offset-4"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeIn>
        </Container>
      </div>

      {/* Detailed service sections — alternating tones for editorial rhythm */}
      <div className="bg-cream-50">
        <Container>
          <div className="pb-24">
            {services.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-28 border-t border-forest-700/10 first:border-t-0"
              >
                <FadeIn>
                  <div className="py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
                    <div>
                      <span className="eyebrow">
                        {String(i + 1).padStart(2, "0")} · Service
                      </span>
                      <h2 className="mt-3 text-display-lg text-forest-900">{s.title}</h2>
                      <div className="hairline mt-6" />
                      <p className="mt-6 text-sm text-forest-900/75 leading-relaxed">
                        <span className="font-medium text-forest-900">Ideal for: </span>
                        {s.idealFor}
                      </p>
                    </div>

                    <div>
                      <p className="prose-editorial">{s.description}</p>
                      <div className="mt-8">
                        <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600">
                          Deliverables include
                        </p>
                        <ul className="mt-4 space-y-2.5">
                          {s.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex gap-3 text-sm text-forest-900/85"
                            >
                              <CheckGlyph />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <Button
                          href={`/contact?service=${s.slug}`}
                          variant="outline"
                          size="md"
                        >
                          Request this service
                        </Button>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </article>
            ))}
          </div>
        </Container>
      </div>

      <CTABand
        title="Not sure which service fits your situation?"
        subtitle="Tell us a little about the trees and the question you are trying to answer. We will recommend the right scope, or tell you plainly that you do not need us."
      />
    </>
  );
}

function CheckGlyph() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-1 h-4 w-4 flex-none text-moss-500"
    >
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
