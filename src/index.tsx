import 'babel-polyfill';
import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// @ts-ignore
import { createRoot } from 'react-dom';
import Spa from './spa/spa';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

createRoot(
  document.getElementById('app'),
).render(
  <ApolloProvider client={client}>
    <Spa />
  </ApolloProvider>,
);
