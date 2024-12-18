import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

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
    leftIcon: {
      control: 'boolean',
      description: 'Icon component to render on the left'
    },
    rightIcon: {
      control: 'boolean',
      description: 'Icon component to render on the right'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interactions'
    },
    size: {
      control: 'select',
      options: ['default', 'lg'],
      description: 'Button size variant'
    },
    onClick: {
      action: 'clicked'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    type: 'primary'
  }
};

export const Outline: Story = {
  args: {
    text: 'Outline Button',
    type: 'outline'
  }
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    type: 'secondary'
  }
};

// Icon examples
export const WithLeftIcon: Story = {
  args: {
    text: 'Back',
    leftIcon: <FiChevronLeft size={16} />,
    type: 'primary'
  }
};

export const WithRightIcon: Story = {
  args: {
    text: 'Next',
    rightIcon: <FiChevronRight size={16} />,
    type: 'primary'
  }
};

// State examples
export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
    type: 'primary'
  }
};

// Example with longer content
export const LongText: Story = {
  args: {
    text: 'This is a button with longer text',
    type: 'primary'
  }
};

// Example with click handler
export const WithClickHandler: Story = {
  args: {
    text: 'Click me',
    type: 'primary',
    onClick: () => alert('Button clicked!')
  }
};