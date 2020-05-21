import 'babel-polyfill';
import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, useSubscription } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';
import gql from 'graphql-tag';
// @ts-ignore
import { createRoot } from 'react-dom';
import Spa from './spa/spa/spa';

const USER_CARD_SUBSCRIPTION = gql`
  subscription userCards {
    userCards
  }
`;

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql', // update with uri, make comment about uri that it doesn't
  // have http or ws
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  credentials: 'include',
  uri: process.env.URI,
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const Component: React.FC = () => {
  console.log('foo');
  const { data, loading } = useSubscription(
    USER_CARD_SUBSCRIPTION,
  );

  if (!loading) {
    console.log(data);
  }

  return <h1>hello world</h1>;
};

createRoot(
  document.getElementById('app'),
).render(
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>,
);
