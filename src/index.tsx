import 'babel-polyfill';
import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
// @ts-ignore
import { createRoot } from 'react-dom';
import client from 'server/client';
import PopOverDemo from 'modals/popOver/popOverStorybook/popOver.demo';
import Spa from './spa/spa/spa';

createRoot(document.getElementById('app')).render(
  <div style={{ margin: '4rem' }}>
    <PopOverDemo />
  </div>,
);
