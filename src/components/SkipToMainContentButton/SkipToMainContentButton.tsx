import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

/**
 * SkipToMainContentButton
 *
 * An accessible “skip link” button that appears when focused(tabbed), allowing keyboard
 * and screen-reader users to jump straight to the main content region of the page.
 *
 * Accessibility:
 * - Renders as a Next.js `<Link>` inside a ShadCN `<Button asChild>`.
 * - Links to `#main-content` — ensure your `<main>` element has that ID.
 */
export default function SkipToMainContentButton() {
  return (
    <Button
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:py-2 focus:px-4 focus-visible:ring-amber-600"
      asChild
    >
      <Link href="#main-content">Skip to main content</Link>
    </Button>
  );
}
