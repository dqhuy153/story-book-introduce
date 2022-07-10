import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default Text',
      description: 'Primary Button',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

//create clone of Template function
export const Default = Template.bind({}); //() => <Button variant="primary">Click Me</Button>;

export const Secondary = Template.bind({}); //() => <Button variant="secondary">Click Me</Button>;

//declare args of Secondary here
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
  onClick: action('Secondary clicked!'),
} as ButtonProps;
