import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "cream" | "forest" | "white" | "bark";

export function Section({
  children,
  className,
  tone = "cream",
  size = "default",
  containerSize = "default",
  as: As = "section",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  size?: "default" | "sm" | "lg";
  containerSize?: "default" | "narrow" | "wide";
  as?: keyof React.JSX.IntrinsicElements;
  id?: string;
}) {
  const toneClass: Record<Tone, string> = {
    cream: "bg-cream-50 text-ink",
    forest: "bg-forest-800 text-cream-50",
    white: "bg-white text-ink",
    bark: "bg-bark-50 text-ink",
  };
  const sizeClass = {
    default: "py-20 lg:py-28",
    sm: "py-12 lg:py-16",
    lg: "py-24 lg:py-36",
  }[size];

  return (
    <As id={id} className={cn(toneClass[tone], sizeClass, className)}>
      <Container size={containerSize}>{children}</Container>
    </As>
  );
}
