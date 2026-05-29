import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

// Wordmark + small leaf glyph. Inline SVG so it inherits currentColor
// and stays crisp at any size with no extra network request.
// When `withSlogan` is true, the brand slogan renders as a small italic line
// under the wordmark on lg+ viewports (hidden on mobile so the sticky header
// stays compact).
export function Logo({
  className,
  invert = false,
  withSlogan = false,
}: {
  className?: string;
  invert?: boolean;
  withSlogan?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Green ForesTree, Home"
      className={cn(
        "group inline-flex flex-col gap-0.5",
        invert ? "text-cream-50" : "text-forest-900",
        className,
      )}
    >
      <span className="inline-flex items-baseline gap-2 font-serif text-xl tracking-tight">
        <LeafMark className={cn("h-5 w-5 -translate-y-px", invert ? "text-moss-300" : "text-forest-700")} />
        <span className="font-medium">
          Green <span className="italic">ForesTree</span>
        </span>
      </span>
      {withSlogan && (
        <span
          className={cn(
            "hidden lg:inline-block pl-7 font-serif italic text-xs tracking-tight leading-tight",
            invert ? "text-moss-200" : "text-moss-600",
          )}
        >
          {site.slogan}
        </span>
      )}
    </Link>
  );
}

export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2.5c4.5 3 7 6.5 7 10.5a7 7 0 11-14 0c0-4 2.5-7.5 7-10.5z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M12 2.5c4.5 3 7 6.5 7 10.5a7 7 0 11-14 0c0-4 2.5-7.5 7-10.5z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M12 4v17"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
