import 'babel-polyfill';
import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
// @ts-ignore
import { createRoot } from 'react-dom';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';
import App from './app';

// const URI = 'https://mbh-server-dev-jimmy.herokuapp.com/graphql';
const URI = 'mbh-server-dev-jimmy.herokuapp.com/graphql';

createRoot(document.getElementById('app')).render(
  <App />,
);
