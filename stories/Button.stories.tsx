import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default = () => <Button variant="primary">Click Me</Button>;

export const Secondary = () => <Button variant="secondary">Click Me</Button>;