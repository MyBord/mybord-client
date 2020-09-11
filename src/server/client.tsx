// Source: https://www.apollographql.com/docs/react/data/subscriptions/#client-setup

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';

let wsUri: string;
let httpUri: string;

if (process.env.MODE === 'PROD') {
  httpUri = `https://${process.env.URI}`;
  wsUri = `wss://${process.env.URI}`;
} else {
  httpUri = `http://${process.env.URI}`;
  wsUri = `ws://${process.env.URI}`;
}

const httpLink = new HttpLink({
  credentials: 'include',
  uri: httpUri,
});

const wsLink = new WebSocketLink({
  uri: wsUri,
  options: { reconnect: true },
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
