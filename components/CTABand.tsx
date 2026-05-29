import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { site } from "@/lib/site";

export function CTABand({
  title = "Have a tree question worth getting right?",
  subtitle = "Independent assessment, written report, defensible recommendations. Tell us a little about your situation and we will be in touch within one business day.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-forest-800 text-cream-50 overflow-hidden">
      {/* Decorative diagonal hairline pattern, kept very subtle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0 1px, transparent 1px 14px)",
        }}
      />
      <Container>
        <div className="relative py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-display-lg text-cream-50 max-w-2xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-cream-100/85 max-w-xl">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Button href="/contact" size="lg" variant="secondary">
              Request a consultation
            </Button>
            <Button href={site.contact.phoneHref} size="lg" variant="outline" className="border-cream-100/40 text-cream-50 hover:bg-cream-50 hover:text-forest-800">
              Call {site.contact.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
