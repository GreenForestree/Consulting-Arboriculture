import Link from "next/link";
import { ArrowRight } from "./ui/Button";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group block h-full rounded-2xl border border-forest-700/10 bg-cream-50 p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-forest-700/25"
    >
      <h3 className="text-xl font-serif text-forest-900 leading-snug">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-forest-900/75">
        {service.short}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 group-hover:text-forest-800">
        Learn more
        <ArrowRight />
      </span>
    </Link>
  );
}
