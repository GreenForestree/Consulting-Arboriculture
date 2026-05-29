// Tiny classname joiner — kept dependency-free.
// Behaves like clsx for the subset we actually use.
export function cn(...inputs: Array<string | number | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
