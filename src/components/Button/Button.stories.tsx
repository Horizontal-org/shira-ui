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

// Icon examples
export const WithLeftIcon: Story = {
  args: {
    children: 'Back',
    leftIcon: <FiChevronLeft size={16} />,
    type: 'primary'
  }
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next',
    rightIcon: <FiChevronRight size={16} />,
    type: 'primary'
  }
};

// State examples
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    type: 'primary'
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