import 'babel-polyfill';
import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
// @ts-ignore
import { createRoot } from 'react-dom';
import client from 'server/client';
// This import is included just to make sure that webpack will include the favicon in it's build
// / bundle process, so that index.html can have reference to it later.
import myBordMark from 'assets/logo/myBordMark.png';
import Spa from './spa/spa/spa';

createRoot(document.getElementById('app')).render(
  <ApolloProvider client={client}>
    <Spa />
  </ApolloProvider>,
);
