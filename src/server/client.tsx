// Source: https://www.apollographql.com/docs/react/data/subscriptions/#client-setup

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';

const wsLink = new WebSocketLink({
  uri: `wss://${process.env.URI}`,
  options: { reconnect: true },
});

const httpLink = new HttpLink({
  credentials: 'include',
  uri: `https://${process.env.URI}`,
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

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
