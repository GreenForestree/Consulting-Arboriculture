import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", invert && "text-moss-300")}>{eyebrow}</span>
      )}
      <h2
        className={cn(
          "mt-3 text-display-lg",
          invert ? "text-cream-50" : "text-forest-900",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            invert ? "text-cream-100/85" : "text-forest-900/75",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
