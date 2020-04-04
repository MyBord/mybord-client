import 'babel-polyfill';
import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// @ts-ignore
import { createRoot } from 'react-dom';
import Spa from './spa/spa';

const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'include',
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

createRoot(
  document.getElementById('app'),
).render(
  <ApolloProvider client={client}>
    <Spa />
  </ApolloProvider>,
);
