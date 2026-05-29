import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Reports & Resources",
  description:
    "What a professional arborist report includes, and answers to common questions about consulting arboriculture, tree risk assessment, and the difference between a consulting arborist and a tree service.",
};

const reportContents = [
  {
    h: "Scope and methodology",
    p: "What was inspected, what was not, and the standard or method used (TRAQ, CTLA, ANSI A300, ISA BMP, etc.), stated explicitly so the report can be evaluated on its own terms.",
  },
  {
    h: "Site and tree description",
    p: "Property context, species, dimensions (DBH, height, crown spread), and condition class for each tree in scope.",
  },
  {
    h: "Observations of fact",
    p: "Defects, decay, deadwood, codominant unions, included bark, root collar conditions, prior wounds, pest or pathogen signs, recorded as observations, not conclusions.",
  },
  {
    h: "Analysis",
    p: "How the observations were interpreted in light of the methodology: likelihood of failure reasoning, target analysis, decay extent estimates, or appraisal calculations as applicable.",
  },
  {
    h: "Opinions and recommendations",
    p: "Identified as opinions, with the basis for each clearly shown. Mitigation, treatment, monitoring intervals, or removal recommendations are tiered where appropriate so the client can choose.",
  },
  {
    h: "Photographic documentation",
    p: "Labeled, dated photographs keyed to the text. For risk assessment and appraisal work, photos preserve evidence as found on the date of inspection.",
  },
  {
    h: "Limitations and assumptions",
    p: "What the report does and does not cover, any access limitations, and the conditions under which the conclusions hold. This is what separates a defensible report from a marketing document.",
  },
];

const faqs = [
  {
    q: "What is the difference between a consulting arborist and a tree service?",
    a: "A tree service performs the work: pruning, removal, treatments, installation. A consulting arborist evaluates, advises, and writes reports. Most consulting arborists, including us, do not perform tree work, which removes the financial incentive to recommend it.",
  },
  {
    q: "Do you perform removals or pruning?",
    a: "No. We are independent consultants. We do not perform removals, pruning, treatments, or installations, and we do not refer to a preferred contractor for compensation. If our report recommends work, you are free to obtain it from any qualified provider.",
  },
  {
    q: "When do I need a consulting arborist instead of a tree service?",
    a: "Whenever the stakes warrant a written, independent opinion: before authorizing the removal of a mature tree, for risk assessment on properties with public access or high value targets, for construction near significant trees, for insurance and casualty loss valuations, and for any permitting matter that requires a credentialed arborist report.",
  },
  {
    q: "How much does a consultation cost?",
    a: "Fees depend on scope. A single tree risk assessment is a different engagement than a campus inventory or a multi site appraisal. After the initial call we send a written scope and a flat fee, with no hourly surprises, and no charge for the initial conversation itself.",
  },
  {
    q: "How long does a report take?",
    a: "Typical turnaround for a residential risk or health diagnosis report is one to two weeks from site visit. Large inventories and multi site engagements are scheduled separately. Urgent situations such as storm damage or imminent permitting deadlines are accommodated where possible.",
  },
  {
    q: "Do you work outside of South Florida?",
    a: "Our service area is Miami Dade, Broward, and Palm Beach Counties. We occasionally accept work elsewhere in Florida for appraisal or repeat client engagements. Ask.",
  },
  {
    q: "Will the report hold up if a matter goes to court?",
    a: "Yes. Reports are written to defensible standards: methodology stated, facts and opinions distinguished, basis shown for each opinion, and limitations identified. They are routinely used by attorneys, insurers, and other experts when a matter heads to a hearing or trial. Note that we do not provide expert witness testimony, depositions, or trial appearances ourselves; if a case requires a testifying expert, you will need to retain one separately, and our written report can be provided to that expert.",
  },
  {
    q: "Can you give me a quick answer over the phone?",
    a: "Sometimes, and we will, if the question genuinely has a quick answer. But the value of consulting arboriculture is in evaluating the specific tree on the specific site, and we will not guess at conclusions we have not personally verified.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section tone="cream" size="sm" className="pt-28 lg:pt-36">
        <FadeIn>
          <SectionHeader
            eyebrow="Reports & Resources"
            title="What a professional arborist report actually contains."
            intro="The phrase &ldquo;arborist report&rdquo; covers everything from a one page form to a hundred page expert disclosure. Here is what to expect from a consulting grade report: ours, and any other you commission."
          />
        </FadeIn>
      </Section>

      {/* Anatomy of a report */}
      <Section tone="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <FadeIn>
            <span className="eyebrow">Anatomy of a report</span>
            <h2 className="mt-3 text-display-lg text-forest-900">Seven things to look for.</h2>
            <p className="mt-5 text-base leading-relaxed text-forest-900/75">
              If any of these are missing from a report you have received,
              that is worth a question. If most are missing, that is worth a
              second opinion.
            </p>
          </FadeIn>

          <ol className="divide-y divide-forest-700/10 border-y border-forest-700/10">
            {reportContents.map((item, i) => (
              <FadeIn key={item.h} delay={i * 40}>
                <li className="py-6 flex gap-6">
                  <span className="flex-none w-10 text-sm font-sans text-moss-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-serif text-forest-900">{item.h}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-forest-900/75">{item.p}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="bark" id="faq">
        <FadeIn>
          <SectionHeader
            eyebrow="Frequently asked"
            title="Honest answers to the common questions."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 40}>
              <details className="group border-b border-forest-700/15 py-5 cursor-pointer">
                <summary className="list-none flex items-start justify-between gap-6 marker:hidden">
                  <h3 className="text-base lg:text-lg font-serif text-forest-900 group-open:text-forest-800">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex-none h-6 w-6 inline-flex items-center justify-center rounded-full border border-forest-700/30 text-forest-700 group-open:rotate-45 transition-transform"
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-forest-900/80 pr-10">{f.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTABand
        title="Still have a question?"
        subtitle="If your question is not here, or if you want to know whether what you are facing actually needs an arborist, we are happy to talk."
      />
    </>
  );
}
