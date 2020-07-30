import 'babel-polyfill';
import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
// @ts-ignore
import { createRoot } from 'react-dom';
import client from 'server/client';
import Spa from './spa/app/spa';

createRoot(document.getElementById('app')).render(
  <ApolloProvider client={client}>
    <Spa />
  </ApolloProvider>,
);
