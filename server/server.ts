import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import db from './db';
import resolvers from './rootResolvers';
import schema from './schema.graphql';

const server = new ApolloServer({
  context: { db },
  resolvers,
  typeDefs: schema,
});

const app = express();
server.applyMiddleware({ app });

const port = 5000;

app.listen(
  { port },
  () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`),
);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
