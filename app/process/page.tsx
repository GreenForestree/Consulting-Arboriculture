import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How a consulting arborist engagement works at Green ForesTree: inquiry, site visit and assessment, written report, recommendations, and optional follow up.",
};

const steps = [
  {
    n: "01",
    title: "Inquiry",
    body: "A short call or email so we can understand the question you are trying to answer, the property, and any deadlines (permitting cycles, hearings, closing dates). If we are not the right fit, we will say so and, where possible, point you to someone who is. If we are, you will receive a written scope and flat fee proposal.",
    deliverable: "Written scope and proposal",
  },
  {
    n: "02",
    title: "Site Visit & Assessment",
    body: "On site evaluation by the principal arborist. Depending on the engagement, this includes individual tree examination, photographic documentation, measurements, root collar inspection, soil and site assessment, and, where decay or stability is in question, instrument assisted decay detection.",
    deliverable: "Field notes, measurements, photographs",
  },
  {
    n: "03",
    title: "Analysis & Report",
    body: "Findings, methodology, and opinions are written up in a report formatted for its intended audience, whether permitting staff, an insurance adjuster, opposing counsel, or the property owner. Reports identify facts as facts and opinions as opinions, and show the basis for each conclusion.",
    deliverable: "Written PDF report with photo plates",
  },
  {
    n: "04",
    title: "Recommendations & Review",
    body: "We walk you through the report in plain language: what we found, what the options are, and what we recommend. Questions and revisions are part of the engagement, not an add on. The goal is a document you understand well enough to act on or defend.",
    deliverable: "Recommendations call and Q&A",
  },
  {
    n: "05",
    title: "Optional Follow Up",
    body: "Many engagements end here. Some do not. Construction monitoring, reinspection intervals for high value trees, or updates to a management plan as conditions change. Follow up scope is quoted separately.",
    deliverable: "Monitoring, testimony, or plan updates",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Section tone="cream" size="sm" className="pt-28 lg:pt-36">
        <FadeIn>
          <SectionHeader
            eyebrow="How we work"
            title="A straightforward engagement, written down at every step."
            intro="Most consulting engagements move through the same five stages. The depth of each stage depends on the scope, but the sequence, and the documentation, does not change."
          />
        </FadeIn>
      </Section>

      {/* Stepped timeline */}
      <Section tone="cream" size="lg">
        <ol className="relative">
          {/* Vertical rule connecting the steps on lg+ */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-[5.5rem] top-2 bottom-2 w-px bg-forest-700/15"
          />
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <FadeIn delay={i * 60}>
                <div className="grid grid-cols-1 lg:grid-cols-[7rem_1fr] gap-6 lg:gap-12 py-10 lg:py-12 border-b border-forest-700/10 last:border-b-0">
                  <div className="relative">
                    <div className="inline-flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-forest-800 text-cream-50 font-serif text-xl lg:text-2xl shadow-soft">
                      {s.n}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-display-lg text-forest-900 leading-tight">{s.title}</h3>
                    <p className="mt-4 prose-editorial max-w-prose">{s.body}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-moss-600">
                      <span className="h-px w-6 bg-moss-500" />
                      Deliverable: {s.deliverable}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </Section>

      {/* Engagement standards */}
      <Section tone="bark">
        <FadeIn>
          <SectionHeader
            eyebrow="What you can expect"
            title="The boring promises that turn out to matter."
          />
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              h: "Flat fees, in writing",
              p: "You will know what the engagement costs before it begins. Scope changes are quoted before they happen.",
            },
            {
              h: "Direct communication",
              p: "The arborist on your project is the arborist who wrote the report and signs the testimony, every time.",
            },
            {
              h: "Confidentiality",
              p: "Reports, photographs, and site information are not shared, marketed, or referenced without your written consent.",
            },
          ].map((item, i) => (
            <FadeIn key={item.h} delay={i * 80}>
              <div className="h-full rounded-2xl bg-cream-50 border border-forest-700/10 p-7 shadow-soft">
                <div className="hairline" />
                <h3 className="mt-4 text-lg font-serif text-forest-900">{item.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-900/75">{item.p}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTABand
        title="Ready to start?"
        subtitle="The first call is short and at no cost. We will listen to the situation, tell you whether a consulting arborist is what you need, and, if so, send a written scope and fee."
      />
    </>
  );
}
