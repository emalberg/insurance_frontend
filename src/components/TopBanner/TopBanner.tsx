import {
  getBackgroundValue,
  BackgroundStyle,
} from '@/utils/getBackgroundStyle';

type Props = {
  /**
   * Optional background style object used to apply dynamic backgrounds.
   * If provided, the component will generate light and dark background
   * styles based on the values returned from `getBackgroundValue()`.
   */
  backgroundStyle?: BackgroundStyle;
  /**
   * The content to be displayed inside the banner.
   * This can be any valid React node such as text, elements, or components.
   */
  children?: React.ReactNode;
  /**
   * A fallback light mode text color (as a CSS color string).
   * Used when dynamic color values are applied in light mode.
   */
  lightColor?: string;
  /**
   * A fallback dark mode text color (as a CSS color string).
   * Used when dynamic color values are applied in dark mode.
   */
  darkColor?: string;
};

/**
 * TopBanner is a responsive banner component (visible on medium screens and up)
 * that supports dynamic background styling and text color theming.
 */
export default function TopBanner({
  backgroundStyle,
  children,
  lightColor,
  darkColor,
}: Props) {
  const dynamicBackground = backgroundStyle?.type
    ? `dynamic-background ${backgroundStyle.type}`
    : 'dynamic-background';
  return (
    <div
      className={`w-full h-12 hidden md:flex justify-end items-center ${dynamicBackground}`}
      style={
        {
          '--bg-style': getBackgroundValue(backgroundStyle).light,
          '--bg-style-dark': getBackgroundValue(backgroundStyle).dark,
        } as React.CSSProperties
      }
      data-testid="banner"
    >
      <div
        className="px-10 font-secondary text-xl font-normal text-light-dynamic dark:text-dark-dynamic"
        style={
          {
            '--dynamic-color': lightColor ?? '#000000',
            '--dynmic-dark-color': darkColor ?? '#FFFFFF',
          } as React.CSSProperties
        }
        data-testid="children-container"
      >
        {children}
      </div>
    </div>
  );
}
