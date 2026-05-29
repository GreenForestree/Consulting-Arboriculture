import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm rounded-full",
  lg: "h-12 px-6 text-base rounded-full",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-700 text-cream-50 hover:bg-forest-800 shadow-soft",
  secondary:
    "bg-cream-50 text-forest-800 hover:bg-cream-100 shadow-soft",
  outline:
    "border border-forest-700/40 text-forest-800 hover:bg-forest-700 hover:text-cream-50",
  ghost:
    "text-forest-800 hover:bg-forest-700/5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonProps = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={cls} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-4 w-4 transition-transform group-hover:translate-x-0.5", className)}
    >
      <path
        d="M4 10h12m0 0l-4-4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
