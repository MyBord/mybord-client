import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// type definitions (schema)
const typeDefs = gql`
  type Query {
    greeting(name: String): String!,
    me: User!,
    post: Post!,
  }
  
  type Post {
    body: String!,
    id: ID!,
    published: Boolean!,
    title: String!,
  }
  
  type User {
    age: Int!,
    email: String!,
    id: ID!,
    name: String!,
  }
`;

// resolvers
const resolvers = {
  Query: {
    greeting: (parent, args, context, info) => `Hello ${args.name}!`,
    // greeting: () => 'hello',
    me: (): object => ({
      age: () => 30,
      email: () => 'foo@gmail.com',
      id: () => 'abc123',
      name: () => 'Jimmy',
    }),
    post: () => ({
      body: () => 'This is the body',
      id: () => 'abc123',
      published: () => true,
      title: () => 'sample title',
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 5000;

app.listen(
  { port },
  () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`),
);
