import Link from "next/link";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-900 text-cream-100 mt-auto">
      <Container>
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Logo invert />
            <p className="mt-3 font-serif italic text-moss-200 text-base leading-snug max-w-xs">
              {site.slogan}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-cream-100/75 max-w-xs">
              Independent, science based consulting arboriculture for South Florida.
              We assess and advise. We do not perform tree work.
            </p>
            <p className="mt-6 text-xs text-cream-100/60">
              Serving {site.contact.serviceArea}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-sans uppercase tracking-[0.18em] text-moss-300">Navigate</h4>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream-100/80 hover:text-cream-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-[0.18em] text-moss-300">Credentials</h4>
              <ul className="mt-4 space-y-2 text-sm text-cream-100/80">
                {site.principal.credentials.map((c) => (
                  <li key={c.long}>{c.short}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.18em] text-moss-300">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.contact.phoneHref} className="text-cream-50 hover:text-moss-200">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={site.contact.emailHref} className="text-cream-50 hover:text-moss-200">
                  {site.contact.email}
                </a>
              </li>
              <li className="text-cream-100/70">{site.contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-100/10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-cream-100/60">
          <p>
            © {year} {site.name}. All rights reserved.
            {" "}
            <span className="opacity-70">{site.principal.isaNumber}</span>
          </p>
          <p>Site built with care · Updated {year}.</p>
        </div>
      </Container>
    </footer>
  );
}
