import React from 'react';
import { action } from '@storybook/addon-actions';
import TestComponent from '.';

export default {
  title: 'Button-new',
  component: TestComponent,
};

export const Default = () => <TestComponent onClick={action('clicked')}>Hello Button</TestComponent>;
