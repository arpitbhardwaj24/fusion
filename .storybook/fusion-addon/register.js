import React, { Fragment } from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { css, cx } from 'emotion'
import Iframe from 'react-iframe'

const Content = () => {
  const results = useParameter('assets', []);
  // console.log(results);
  const apiURL = "http://localhost:4000/http://localhost:5000/edit/" + results[0];
  const editComponent = () => {
  } 

  const newComponent = () => {
  }
  
  const styles = {
    options: css`
    list-style-type: none;
    padding-left: 0;
    li {
      margin: 10px;
    }
    `,
    container: css`
    height: 100%
    `
  }
  console.log(apiURL)
  // story's parameter being retrieved here
  return (
    <div className={styles.container}>
      {results.length ? (
          <Iframe url={apiURL} width="100%" height="100%"/>
      ) : null}

    </div>
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