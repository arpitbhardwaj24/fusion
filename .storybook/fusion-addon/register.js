import React, { Fragment } from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';

const Content = () => {
  const results = useParameter('assets', []); // story's parameter being retrieved here
  return (
    <Fragment>
      {results.length ? (
        <ol>
          {results.map(i => (
            <li>{i}</li>
          ))}
        </ol>
      ) : null}
    </Fragment>
  );
};

addons.register('my/fusion-addon', () => {
  addons.add('fusion-addon/panel', {
    title: 'Fusion',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Content />
      </AddonPanel>
    ),
  });
});