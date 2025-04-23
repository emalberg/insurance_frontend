import { describe, expect, it } from 'vitest';
import {
  getBackgroundValue,
  BackgroundStyle,
} from '@/utils/getBackgroundStyle';

describe('getBackgroundValue', () => {
  it('returns light and dark color values for type "color"', () => {
    const style: BackgroundStyle = {
      type: 'color',
      color_value: '#123456',
      dark_color_value: '#654321',
    };
    expect(getBackgroundValue(style)).toEqual({
      light: '#123456',
      dark: '#654321',
    });
  });

  it('returns fallback transparent for missing color values', () => {
    const style: BackgroundStyle = {
      type: 'color',
    };
    expect(getBackgroundValue(style)).toEqual({
      light: 'transparent',
      dark: 'transparent',
    });
  });

  it('returns light and dark gradient values for type "gradient"', () => {
    const style: BackgroundStyle = {
      type: 'gradient',
      gradient_value: 'linear-gradient(to right, red, blue)',
      dark_gradient_value: 'linear-gradient(to right, black, gray)',
    };
    expect(getBackgroundValue(style)).toEqual({
      light: 'linear-gradient(to right, red, blue)',
      dark: 'linear-gradient(to right, black, gray)',
    });
  });

  it('returns fallback transparent for missing gradient values', () => {
    const style: BackgroundStyle = {
      type: 'gradient',
    };
    expect(getBackgroundValue(style)).toEqual({
      light: 'transparent',
      dark: 'transparent',
    });
  });

  it('returns url() wrapped image values for type "image"', () => {
    const style: BackgroundStyle = {
      type: 'image',
      image_url: 'https://example.com/light.jpg',
      dark_image_url: 'https://example.com/dark.jpg',
    };
    expect(getBackgroundValue(style)).toEqual({
      light: 'url(https://example.com/light.jpg)',
      dark: 'url(https://example.com/dark.jpg)',
    });
  });

  it('returns fallback transparent for missing image values', () => {
    const style: BackgroundStyle = {
      type: 'image',
    };
    expect(getBackgroundValue(style)).toEqual({
      light: 'transparent',
      dark: 'transparent',
    });
  });

  it('returns transparent for undefined style', () => {
    expect(getBackgroundValue(undefined)).toEqual({
      light: 'transparent',
      dark: 'transparent',
    });
  });

  it('returns transparent for unknown type (should never happen)', () => {
    // @ts-expect-error – simulate unexpected input
    const style = { type: 'unknown' };
    expect(getBackgroundValue(style)).toEqual({
      light: 'transparent',
      dark: 'transparent',
    });
  });
});
