import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import path from 'path';

const transformedPath = path.basename(__filename.replace(/\\/g, "/"), '.stories.js');
// console.log(path.basename(transformedPath, '.stories.js'));

export default {
  title: transformedPath,
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
