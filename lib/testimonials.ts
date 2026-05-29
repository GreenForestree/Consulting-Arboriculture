// Placeholder testimonials — replace with attributed quotes from real clients.
// Keep `attribution` first-name-and-role at minimum; full name/firm if permitted.

export type Testimonial = {
  quote: string;
  attribution: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The report was the most thorough technical document I have seen on a tree dispute in twenty years of practice. It held up at deposition and gave us the leverage we needed to settle.",
    attribution: "M. Alvarez, Esq. [PLACEHOLDER]",
    role: "Construction Litigation Attorney, Coral Gables",
  },
  {
    quote:
      "We were told the live oak had to come down. Their independent assessment identified a treatable root issue, saved the tree, and saved us roughly forty thousand dollars in removal and replacement.",
    attribution: "J. Patel [PLACEHOLDER]",
    role: "Homeowner, Pinecrest",
  },
  {
    quote:
      "Their tree protection plan got our permit approved on the first review. The construction phase monitoring is the reason every preserved tree on this site is still standing.",
    attribution: "S. Whitfield, AIA [PLACEHOLDER]",
    role: "Project Architect, Fort Lauderdale",
  },
];
