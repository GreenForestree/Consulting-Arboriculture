import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.principal.name}, principal consulting arborist at ${site.name}. ${site.principal.experienceYears}+ years of arboriculture experience, ISA Certified Arborist, TRAQ, and Certified Urban Forest Professional.`,
};

// Each ISA credential explained in plain language. Owners and attorneys want to
// understand what these letters mean, not just see them stacked on a card.
const credentialDetails = [
  {
    short: "ISA Certified Arborist",
    long: "ISA Certified Arborist",
    explainer:
      "The baseline professional credential issued by the International Society of Arboriculture. Earned by exam and maintained through continuing education and an ethics commitment. The starting point for any arborist held out as a professional.",
  },
  {
    short: "ISA Certified Urban Forest Professional",
    long: "ISA Certified Urban Forest Professional",
    explainer:
      "An advanced credential focused on the management of tree populations at the campus, community, and municipal scale: inventory, canopy planning, species selection, and long horizon care.",
  },
  {
    short: "ISA Tree Risk Assessment Qualified",
    long: "ISA Tree Risk Assessment Qualified (TRAQ)",
    explainer:
      "The recognized standard for evaluating tree risk in North America. TRAQ provides a documented, repeatable methodology that produces defensible risk ratings: the framework expected by insurers, courts, and prudent risk managers.",
  },
  {
    short: "ISA Prescription Pruning Qualified",
    long: "ISA Prescription Pruning Qualified",
    explainer:
      "Advanced training in writing pruning specifications grounded in tree biology and species response, so that pruning work performed by others is correct in scope, dose, and timing.",
  },
  {
    short: "LIAF Certified Landscape Inspector",
    long: "LIAF Certified Landscape Inspector",
    explainer:
      "Landscape Inspectors Association of Florida credential covering the inspection of installed landscape and irrigation work, useful where tree concerns intersect with broader site and warranty issues.",
  },
];

const affiliations = [
  "International Society of Arboriculture (ISA)",
  "American Society of Consulting Arborists (ASCA) [PLACEHOLDER: confirm]",
  "Florida Chapter ISA",
  "Landscape Inspectors Association of Florida",
];

export default function AboutPage() {
  return (
    <>
      {/* Intro / page header */}
      <Section tone="cream" size="sm" className="pt-28 lg:pt-36">
        <FadeIn>
          <SectionHeader
            eyebrow="About"
            title="A practice built on independence, evidence, and care."
            intro={`${site.name} is the consulting practice of ${site.principal.name}, an ISA Certified Arborist with ${site.principal.experienceYears}+ years of South Florida field experience. We work only as advisors. We do not perform tree work, so that the recommendation in your report is the one we actually believe in.`}
          />
          <p className="mt-8 font-serif italic text-xl text-moss-600 max-w-3xl">
            {site.slogan}
          </p>
        </FadeIn>
      </Section>

      {/* Bio with portrait */}
      <Section tone="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <FadeIn>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft bg-bark-100">
              {/* TODO(real photo): Replace with a professional portrait of
                  Quatisha Oguntoyinbo-Rashad. Recommended 1200×1500, .webp.
                  Drop the file in /public/images/principal.jpg and update src. */}
              <Image
                src="https://picsum.photos/seed/forestree-portrait/1200/1500"
                alt={`Portrait of ${site.principal.name}, ${site.principal.title}`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs text-forest-900/60 italic">
              [PLACEHOLDER PORTRAIT] · replace with a real headshot at /public/images/principal.jpg.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <span className="eyebrow">Principal Arborist</span>
            <h2 className="mt-3 text-display-lg text-forest-900">{site.principal.name}</h2>
            <p className="mt-2 text-base text-forest-900/70 italic font-serif">{site.principal.title}</p>
            <div className="hairline mt-6" />

            <div className="prose-editorial mt-6 max-w-prose">
              <p>
                {site.principal.name.split(" ")[0]} works across the full
                arboricultural arc, including municipal urban forestry, private
                estates, and construction sites, over more than{" "}
                {site.principal.experienceYears} years in South Florida. That
                range is the point: the questions that bring clients to a
                consulting arborist rarely have a single, narrow answer, and
                the value of an independent expert lies in being able to see
                the situation from multiple angles before committing one to
                writing.
              </p>
              <p>
                The practice is intentionally small. Engagements are handled
                personally, from the initial call, through the site visit, to
                the report on your desk. That continuity is how technical
                detail makes it from the field into a document that holds up
                to outside scrutiny.
              </p>
              <p>
                Quatisha brings over 15 years of experience in arboriculture,
                urban forestry, tree preservation, permitting, and
                environmental resource management. Her professional background
                includes serving as Chief of Environmental Resources for the
                City of Miami, where she has helped manage and protect the
                urban forest through ordinance enforcement, staff training,
                and certification standards. She has also served in leadership
                roles with the ISA Florida Chapter and the Landscape
                Inspector&rsquo;s Association of Florida, and her work has
                been recognized by the ISA Florida Chapter and the City of
                Miami. Through Green ForesTree, she provides professional
                consulting arborist services grounded in practical
                experience, technical knowledge, and a commitment to
                responsible urban forestry.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Credentials, explained */}
      <Section tone="bark">
        <FadeIn>
          <SectionHeader
            eyebrow="Credentials"
            title="What the letters actually mean."
            intro="Credentials are the headline reason to hire a consulting arborist, but they are only useful if you understand what each one certifies. Here is the short version."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {credentialDetails.map((c, i) => (
            <FadeIn key={c.long} delay={i * 60}>
              <div className="h-full rounded-2xl bg-cream-50 border border-forest-700/10 p-7 shadow-soft">
                <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600">{c.short}</p>
                <h3 className="mt-2 text-lg font-serif text-forest-900">{c.long}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-900/75">{c.explainer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section tone="forest">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <span className="eyebrow text-moss-300">Philosophy</span>
            <h2 className="mt-3 text-display-lg text-cream-50">
              The consultant who does not profit from removal.
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="prose-editorial text-cream-100/85 max-w-prose">
              <p className="text-cream-100/85">
                A tree service earns more from removal than from preservation.
                It earns more from a large treatment program than from a small
                one. That is not corruption. It is structure. But it does
                mean that the recommendation you receive from someone who
                performs the work is, inevitably, shaped by what they are
                positioned to do next.
              </p>
              <p className="text-cream-100/85">
                A consulting arborist sits outside that loop. We assess and
                advise. We do not perform removals, prunings, treatments, or
                installations. Our incentive is to be correct, because
                correctness, written down and signed, is the entire product.
              </p>
              <p className="text-cream-100/85">
                That is also why our reports read the way they do: facts
                observed, methodology stated, opinions clearly identified as
                opinions, and the basis for each opinion shown. Whether the
                document is going into a building permit file or onto an
                exhibit list at trial, it is written to be read by someone who
                is going to push back on it.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Affiliations */}
      <Section tone="cream" size="sm">
        <FadeIn>
          <div className="rounded-2xl border border-forest-700/10 bg-cream-100/60 p-8 lg:p-10">
            <p className="text-xs font-sans uppercase tracking-[0.18em] text-moss-600">Affiliations</p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {affiliations.map((a) => (
                <li key={a} className="text-base font-serif text-forest-900/85">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <CTABand
        title="Looking for an independent opinion?"
        subtitle="Whether the question is one tree or a portfolio, the first conversation is short, direct, and at no cost, so we can both decide whether an engagement makes sense."
      />
    </>
  );
}
