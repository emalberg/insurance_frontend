import type { Meta, StoryObj } from '@storybook/react';
import SkipToMainContentButton from './SkipToMainContentButton';
import { within } from '@testing-library/dom';

const meta: Meta<typeof SkipToMainContentButton> = {
  component: SkipToMainContentButton,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    Story => (
      <div style={{ padding: '2rem' }}>
        {/*Simulated main content region */}
        <div
          id="main-contetn"
          style={{
            marginTop: '120px',
            padding: '1rem',
            border: '1px dashed #ccc',
          }}
        >
          <p>Main contetn region</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SkipToMainContentButton>;

export const A11yCheck: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.getByRole('link', { hidden: true }).focus();
  },
};
A11yCheck.storyName = 'Accessibility Check';
A11yCheck.parameters = {
  a11y: { runOnly: { type: 'tag', values: ['wcag2a'] } },
};
