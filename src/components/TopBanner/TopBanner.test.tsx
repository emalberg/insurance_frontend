import { render, screen } from '@testing-library/react';
import TopBanner from './TopBanner';
import type { BackgroundStyle } from '@/utils/getBackgroundStyle';

const addDarkmode = () => document.documentElement.classList.add('dark');
const removeDarkMode = () => document.documentElement.classList.remove('dark');

afterEach(() => {
  removeDarkMode();
});

describe('Top Banner Component', () => {
  it('renders banner component', () => {
    render(<TopBanner />);
    const banner = screen.getByTestId('banner');
    expect(banner).toBeInTheDocument();
  });

  it('renders children as text', () => {
    render(<TopBanner>Test text</TopBanner>);
    const banner = screen.getByTestId('banner');
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveTextContent('Test text');
  });

  it('renders children as component', () => {
    render(
      <TopBanner>
        <div
          style={{
            backgroundColor: '#EE4B2B',
            height: '100px',
            width: '100px',
          }}
          data-testid="red-box"
        />
      </TopBanner>,
    );
    const redBox = screen.getByTestId('red-box');
    expect(redBox).toBeInTheDocument();
    expect(redBox).toHaveStyle('background-color: #EE4B2B');
    expect(redBox).toHaveStyle('height: 100px');
    expect(redBox).toHaveStyle('width: 100px');
  });

  it('applies color background style correctly in light mode', () => {
    const backgroundStyle: BackgroundStyle = {
      type: 'color',
      color_value: '#f0f0f0',
      dark_color_value: '#101010',
    };

    render(<TopBanner backgroundStyle={backgroundStyle} />);
    const banner = screen.getByTestId('banner');
    expect(banner).toHaveClass('dynamic-background color');
    expect(banner).toHaveStyle({
      '--bg-style': '#f0f0f0',
      '--bg-style-dark': '#101010',
    });
  });

  it('applies color background style correctly in dark mode', () => {
    const backgroundStyle: BackgroundStyle = {
      type: 'color',
      color_value: '#ffffff',
      dark_color_value: '#222222',
    };

    addDarkmode();
    render(<TopBanner backgroundStyle={backgroundStyle} />);
    const banner = screen.getByTestId('banner');
    expect(banner).toHaveStyle({
      '--bg-style': '#ffffff',
      '--bg-style-dark': '#222222',
    });
  });

  it('applies gradient background style correctly', () => {
    const backgroundStyle: BackgroundStyle = {
      type: 'gradient',
      gradient_value: 'linear-gradient(to right, red, yellow)',
      dark_gradient_value: 'linear-gradient(to right, black, gray)',
    };

    render(<TopBanner backgroundStyle={backgroundStyle} />);
    const banner = screen.getByTestId('banner');
    expect(banner).toHaveClass('dynamic-background gradient');
    expect(banner).toHaveStyle({
      '--bg-style': 'linear-gradient(to right, red, yellow)',
      '--bg-style-dark': 'linear-gradient(to right, black, gray)',
    });
  });

  it('applies image background style correctly', () => {
    const backgroundStyle: BackgroundStyle = {
      type: 'image',
      image_url: 'https://example.com/light.jpg',
      dark_image_url: 'https://example.com/dark.jpg',
    };

    render(<TopBanner backgroundStyle={backgroundStyle} />);
    const banner = screen.getByTestId('banner');
    expect(banner).toHaveClass('dynamic-background image');
    expect(banner).toHaveStyle({
      '--bg-style': 'url(https://example.com/light.jpg)',
      '--bg-style-dark': 'url(https://example.com/dark.jpg)',
    });
  });

  it('applies light color styles to children container', () => {
    const lightColor = '#123456';
    render(<TopBanner lightColor={lightColor}>Light Text</TopBanner>);
    const childrenContainer = screen.getByTestId('children-container');
    expect(childrenContainer).toHaveStyle({
      '--dynamic-color': lightColor,
    });
  });

  it('applies dark color styles to children container when in dark mode', () => {
    const darkColor = '#abcdef';
    addDarkmode();
    render(<TopBanner darkColor={darkColor}>Dark Text</TopBanner>);
    const childrenContainer = screen.getByTestId('children-container');
    expect(childrenContainer).toHaveStyle({
      '--dynmic-dark-color': darkColor, // matches typo from original code
    });
  });

  it('applies fallback colors when none are provided', () => {
    render(<TopBanner>Fallback Color</TopBanner>);
    const childrenContainer = screen.getByTestId('children-container');
    expect(childrenContainer).toHaveStyle({
      '--dynamic-color': '#000000',
      '--dynmic-dark-color': '#FFFFFF',
    });
  });
});
