import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

// Editorial serif for headings (Fraunces has the warm, slightly literary feel
// we want for a consulting-arborist brand) paired with Inter for body UI.
const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "consulting arborist",
    "ISA certified arborist",
    "tree risk assessment",
    "TRAQ",
    "tree appraisal",
    "tree preservation",
    "Miami arborist",
    "Broward arborist",
    "Palm Beach arborist",
  ],
  authors: [{ name: site.principal.name }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: `${site.name} · ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: ["/og-default.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream-50 text-ink">
        {/* Skip-to-content link — visible on focus, for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-forest-700 focus:text-cream-50 focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
