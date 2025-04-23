import type { Meta, StoryObj } from '@storybook/react';

import TopBanner from './TopBanner';

const meta: Meta<typeof TopBanner> = {
  component: TopBanner,
};

export default meta;
type Story = StoryObj<typeof TopBanner>;

export const Default: Story = {
  args: {
    children: 'Defualt',
    backgroundStyle: {
      type: 'gradient',
      gradient_value: 'linear-gradient(270deg, #0A3E4D 37%, #1F5F70 100%)',
      dark_gradient_value: 'linear-gradient(270deg, #14819E 37%, #3CB0C7 100%)',
    },
    lightColor: '#FFFFFF',
    darkColor: '#FFFFFF',
  },
};

export const SolidBackgroundColor: Story = {
  args: {
    children: 'Solid Backdround Color',
    backgroundStyle: {
      type: 'color',
      color_value: '#3D005A',
      dark_color_value: '#630086',
    },
    lightColor: '#FFFFFF',
    darkColor: '#FFFFFF',
  },
};

export const BackgroundImage: Story = {
  args: {
    children: 'Backdround Image',
    backgroundStyle: {
      type: 'image',
      image_url: 'https://picsum.photos/200/300',
      dark_image_url: 'https://picsum.photos/400',
    },
    lightColor: '#FFFFFF',
    darkColor: '#FFFFFF',
  },
};

export const TextColor: Story = {
  args: {
    children: 'Text Color',
    backgroundStyle: {
      "type": "color",
      "color_value": "#93ffe2",
      "dark_color_value": "#630086"
    },
    lightColor: "#0028f7",
    darkColor: "#00ff00",
  },
};
