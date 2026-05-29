import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      className={
        featured
          ? "relative rounded-2xl bg-cream-50 border border-forest-700/10 p-8 lg:p-12 shadow-soft"
          : "relative rounded-2xl bg-cream-50 border border-forest-700/10 p-7"
      }
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 24"
        className="h-6 w-8 text-moss-400 mb-5"
        fill="currentColor"
      >
        <path d="M9.6 24H0L6.4 9.6h-4V0h12.8v9.6L9.6 24zm17.6 0h-9.6L24 9.6h-4V0h12.8v9.6L27.2 24z" />
      </svg>
      <blockquote
        className={
          featured
            ? "text-xl lg:text-2xl font-serif leading-snug text-forest-900"
            : "text-base font-serif leading-relaxed text-forest-900"
        }
      >
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-medium text-forest-900">{testimonial.attribution}</span>
        <span className="block text-forest-900/65 mt-0.5">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
