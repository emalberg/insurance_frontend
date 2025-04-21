import { BackgroundStyle } from './getBackgroundStyle';

export const mockBackgroundStyles = {
  color: {
    type: 'color',
    color_value: '#ff5733',
  } satisfies BackgroundStyle,

  gradient: {
    type: 'gradient',
    gradient_value: 'linear-gradient(to right, #6a11cb, #2575fc)',
  } satisfies BackgroundStyle,

  image: {
    type: 'image',
    image_url: 'https://www.transparenttextures.com/patterns/basketball.png',
  } satisfies BackgroundStyle,

  // malformed fallback example
  invalid: {
    type: 'color',
    color_value: '', // or undefined
  } satisfies BackgroundStyle,
};
