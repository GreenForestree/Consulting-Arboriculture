import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="cream" size="lg" containerSize="narrow" className="pt-28 lg:pt-36">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-display-xl text-forest-900">Page not found.</h1>
        <p className="mt-5 text-lg text-forest-900/75 max-w-prose mx-auto">
          The page you were looking for has moved, been retired, or never
          existed. Use the navigation above, or head back to the home page.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" size="lg">Back to home</Button>
          <Button href="/contact" size="lg" variant="outline">Contact us</Button>
        </div>
      </div>
    </Section>
  );
}
