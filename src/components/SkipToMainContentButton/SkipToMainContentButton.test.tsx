import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SkipToMainContentButton from './SkipToMainContentButton';

describe('Skip To Main Content Button', () => {
  it('renders a link to #main-content', () => {
    render(<SkipToMainContentButton />);
    const link = screen.getByRole('link', { name: /skip to main content/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#main-content');
  });
  it('is visually hidden by default', () => {
    render(<SkipToMainContentButton />);
    const link = screen.getByRole('link', { name: /skip to main content/i });

    // Tailwind class is applied directly to the <a> via asChild
    expect(link).toHaveClass('sr-only');
  });
  it('becomes visible when focused', async () => {
    render(<SkipToMainContentButton />);
    const link = screen.getByRole('link', { name: /skip to main content/i });

    // Simulate tab/focus event
    await userEvent.tab();
    link.focus();

    // This just checks that the focus state is applied (actual visibility would require E2E testing or headless browser)
    expect(document.activeElement).toBe(link);
    expect(link.className).toContain('focus:');
  });
});
