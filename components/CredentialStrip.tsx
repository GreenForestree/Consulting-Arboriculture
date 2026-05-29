import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Credential / trust bar. Logos are intentionally type-set rather than
// pixel logos so it reads as a unified strip and never feels like a clip-art
// "as seen on" sticker. Swap in actual SVG marks where you have them.
export function CredentialStrip({
  invert = false,
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-6 py-5 lg:px-8 lg:py-6",
        invert
          ? "border-cream-100/15 bg-forest-900/40"
          : "border-forest-700/10 bg-cream-100/60",
        className,
      )}
    >
      <p
        className={cn(
          "text-[10px] font-sans uppercase tracking-[0.22em] text-center mb-4",
          invert ? "text-moss-300" : "text-moss-600",
        )}
      >
        Independently Credentialed
      </p>
      <ul
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center",
        )}
      >
        {site.principal.credentials.map((c) => (
          <li
            key={c.long}
            className={cn(
              "text-sm font-serif italic",
              invert ? "text-cream-100/90" : "text-forest-800/90",
            )}
          >
            {c.long}
          </li>
        ))}
      </ul>
    </div>
  );
}
