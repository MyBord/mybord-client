import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './schema/resolvers';
import generatedSchema from './generated/prisma.graphql';
import schema from './schema/schema.graphql';
import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  endpoint: 'http://localhost:4466',
  // secret: '%cx^&2DYo9pf@11E6gt^',
  typeDefs: 'server/generated/prisma.graphql',
});

const server = new ApolloServer({
  context(request) {
    return {
      prisma,
      request,
    };
  },
  resolvers,
  typeDefs: [generatedSchema, schema],
});

const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
