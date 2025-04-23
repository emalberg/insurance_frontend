/**
 * Utility types and functions for handling background styles in a UI.
 * Supports solid colors, gradients, and images.
 *
 * Used to normalize background styling across components that accept dynamic styles.
 */

/**
 * Represents a dynamic background style that can be applied to a component.
 * The background can be a solid color, a gradient, or an image.
 */
export type BackgroundStyle =
  | ColorBackground
  | GradientBackground
  | ImageBackground;

/**
 * Solid color background style.
 */
type ColorBackground = {
  type: 'color';

  /**
   * The background color for light mode (CSS color value).
   */
  color_value?: string;

  /**
   * The background color for dark mode (CSS color value).
   */
  dark_color_value?: string;
};

/**
 * Gradient background style.
 */
type GradientBackground = {
  type: 'gradient';

  /**
   * The gradient value for light mode (e.g., `linear-gradient(...)`).
   */
  gradient_value?: string;

  /**
   * The gradient value for dark mode (e.g., `linear-gradient(...)`).
   */
  dark_gradient_value?: string;
};

/**
 * Image background style.
 */
type ImageBackground = {
  type: 'image';

  /**
   * The image URL for light mode.
   */
  image_url?: string;

  /**
   * The image URL for dark mode.
   */
  dark_image_url?: string;
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
export function getBackgroundValue(style?: BackgroundStyle): {
  light: string;
  dark: string;
} {
  if (!style || !('type' in style)) {
    return { light: 'transparent', dark: 'transparent' };
  }

  switch (style.type) {
    case 'color':
      return {
        light: style.color_value ?? 'transparent',
        dark: style.dark_color_value ?? 'transparent',
      };
    case 'gradient':
      return {
        light: style.gradient_value ?? 'transparent',
        dark: style.dark_gradient_value ?? 'transparent',
      };
    case 'image':
      return {
        light: style.image_url ? `url(${style.image_url})` : 'transparent',
        dark: style.dark_image_url
          ? `url(${style.dark_image_url})`
          : 'transparent',
      };
    default:
      return { light: 'transparent', dark: 'transparent' };
  }
}
