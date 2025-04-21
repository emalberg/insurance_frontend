/**
 * getBackgroundStyle.ts
 *
 * Utility types and functions for handling background styles in a UI.
 * Supports solid colors, gradients, and images.
 *
 * Used to normalize background styling across components that accept dynamic styles.
 */
export type BackgroundStyle =
  | {
      type: 'color';
      color_value?: string;
    }
  | {
      type: 'gradient';
      gradient_value?: string;
    }
  | {
      type: 'image';
      image_url?: string;
    };

/**
 * Converts a BackgroundStyle object to a valid CSS background value string.
 *
 * @param style - The background style object.
 * @returns A string usable in CSS `background` properties.
 *
 * @example
 * getBackgroundValue({ type: 'color', color_value: '#fff' }) // "#fff"
 * getBackgroundValue({ type: 'gradient', gradient_value: 'linear-gradient(...)' }) // "linear-gradient(...)"
 * getBackgroundValue({ type: 'image', image_url: 'https://example.com/bg.jpg' }) // "url(https://example.com/bg.jpg)"
 */
export function getBackgroundValue(style?: BackgroundStyle): string {
  if (!style || !('type' in style)) {
    return 'transparent';
  }

  switch (style.type) {
    case 'color':
      return style.color_value ?? 'transparent';
    case 'gradient':
      return style.gradient_value ?? 'transparent';
    case 'image':
      return style.image_url ? `url(${style.image_url})` : 'transparent';
    default:
      return 'transparent';
  }
}
