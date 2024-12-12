import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'outline', 'secondary'],
      description: 'The visual style of the button',
      defaultValue: 'primary'
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler'
    },
    children: {
      control: 'text',
      description: 'Button content'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    type: 'primary'
  }
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    type: 'outline'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    type: 'secondary'
  }
};

// Example with longer content
export const LongText: Story = {
  args: {
    children: 'This is a button with longer text',
    type: 'primary'
  }
};

// Example with click handler
export const WithClickHandler: Story = {
  args: {
    children: 'Click me',
    type: 'primary',
    onClick: () => alert('Button clicked!')
  }
};