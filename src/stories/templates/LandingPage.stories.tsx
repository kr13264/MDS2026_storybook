import type { Meta, StoryObj } from '@storybook/react';
import { BuilderPlayground } from '../../builder/BuilderPlayground';

const meta: Meta<typeof BuilderPlayground> = {
  title: 'Templates/Builder Guide',
  component: BuilderPlayground,
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof BuilderPlayground>;

export const Default: Story = {};
