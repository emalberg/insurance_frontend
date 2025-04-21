import { describe, expect, it } from 'vitest';
import {
  getBackgroundValue,
  BackgroundStyle,
} from '@/app/utils/getBackgroundStyle';

describe('getBackgroundValue', () => {
  it('returns color value for type "color"', () => {
    const style: BackgroundStyle = { type: 'color', color_value: '#123456' };
    expect(getBackgroundValue(style)).toBe('#123456');
  });

  it('returns gradient value for type "gradient"', () => {
    const style: BackgroundStyle = {
      type: 'gradient',
      gradient_value: 'linear-gradient(to right, red, blue)',
    };
    expect(getBackgroundValue(style)).toBe(
      'linear-gradient(to right, red, blue)'
    );
  });

  it('returns url() wrapped image for type "image"', () => {
    const style: BackgroundStyle = {
      type: 'image',
      image_url: 'https://example.com/image.jpg',
    };
    expect(getBackgroundValue(style)).toBe(
      'url(https://example.com/image.jpg)'
    );
  });
  it('returns "transparent" as fallback for unknown types (should never happen)', () => {
    // @ts-expect-error – Testing the fallback
    const style = { type: 'unknown' };
    expect(getBackgroundValue(style)).toBe('transparent');
  });
});
