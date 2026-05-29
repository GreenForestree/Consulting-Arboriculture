import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CredentialStrip } from "@/components/CredentialStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";

export default function HomePage() {
  // Featured services for the home overview — full catalog lives on /services
  const featured = services.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Credential strip — sits in the seam between hero and the first content
          section, so the trust signal lands immediately under the headline. */}
      <div className="bg-cream-50">
        <Container>
          <div className="-mt-10 lg:-mt-14 relative z-10">
            <CredentialStrip />
          </div>
        </Container>
      </div>

      {/* Services overview */}
      <Section tone="cream" id="services-overview">
        <FadeIn>
          <SectionHeader
            eyebrow="What we do"
            title="Consulting services, end to end."
            intro="From a single risk assessment to a multiyear management plan, every engagement is grounded in the same standards: on site evaluation, defensible methodology, and a written report you can act on."
          />
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 60}>
              <ServiceCard service={s} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="ghost" size="lg">
            View all services →
          </Button>
        </div>
      </Section>

      {/* Why hire a consulting arborist */}
      <Section tone="bark">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <span className="eyebrow">Why a consulting arborist</span>
            <h2 className="mt-3 text-display-lg text-forest-900">
              We assess. We do not sell tree work.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-forest-900/75">
              A tree service that recommends removal is recommending its own
              next job. We do not perform removals, prunings, or treatments,
              which means our opinion is the opinion you paid for, with no
              conflict of interest pulling the conclusion one way or the other.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline" size="md">
                More about our practice
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Independent",
                body: "We do not sell removals, treatments, or installation. The recommendation in your report is the recommendation we actually believe in.",
              },
              {
                title: "Credentialed",
                body: `ISA Certified Arborist, TRAQ, Certified Urban Forest Professional, and ${site.principal.experienceYears}+ years of field experience across South Florida.`,
              },
              {
                title: "Written & defensible",
                body: "Every engagement ends in a written report, suitable for permitting, insurance, and, when needed, the courtroom.",
              },
              {
                title: "Local",
                body: "Working knowledge of South Florida species, soils, hurricane exposure, and the municipal codes that govern tree work here.",
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-cream-50 border border-forest-700/10 p-6 shadow-soft">
                  <div className="hairline" />
                  <h3 className="mt-4 text-lg font-serif text-forest-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-900/75">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured testimonial */}
      <Section tone="cream" containerSize="narrow">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="eyebrow">From the field</span>
          </div>
          <TestimonialCard testimonial={testimonials[0]} featured />
        </FadeIn>
      </Section>

      <CTABand />
    </>
  );
}
