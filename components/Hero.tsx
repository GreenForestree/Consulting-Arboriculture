import Image from "next/image";
import { Container } from "./ui/Container";
import { Button, ArrowRight } from "./ui/Button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900 text-cream-50">
      {/* TODO(real photo): Replace this picsum URL with a hero image of a
          mature tree canopy / Florida live oak. Recommended 2400×1600, .webp.
          Drop the file in /public/images/hero-canopy.jpg and update the src. */}
      <Image
        src="https://picsum.photos/seed/forestree-hero/2400/1600"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-60"
      />
      {/* Layered gradient — keeps copy legible regardless of swapped photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/60 to-forest-950/85"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-900/30 to-transparent"
      />

      <Container>
        <div className="relative py-28 lg:py-44 max-w-3xl">
          <span className="eyebrow text-moss-300">
            Consulting Arborist · {site.contact.serviceArea}
          </span>
          <h1 className="mt-5 text-display-2xl text-cream-50 font-serif">
            Independent expertise for the trees that matter.
          </h1>
          <p className="mt-6 font-serif italic text-xl lg:text-2xl text-moss-200 leading-snug">
            {site.slogan}
          </p>
          <p className="mt-7 text-lg lg:text-xl leading-relaxed text-cream-100/85 max-w-2xl">
            {site.name} is an independent consulting arboriculture practice
            serving South Florida. We assess, diagnose, appraise, and advise,
            with written reports that hold up to permitting review, insurance
            scrutiny, and the courtroom.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="lg" variant="secondary" className="group">
              Request a consultation
              <ArrowRight />
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="outline"
              className="border-cream-100/40 text-cream-50 hover:bg-cream-50 hover:text-forest-800"
            >
              Explore services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
