import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// Demo Data
const posts = [
  {
    id: 1, author: 1, body: 'body 1', published: true, title: 'title 1',
  },
  {
    id: 2, author: 1, body: 'body 2', published: true, title: 'title 2',
  },
  {
    id: 3, author: 2, body: 'body 3', published: false, title: 'title 3',
  },
];

const users = [
  {
    id: 1, age: 30, email: 'jimmy@gmail.com', name: 'Jimmy',
  },
  {
    id: 2, age: 40, email: 'bob@gmail.com', name: 'Bob',
  },
  {
    id: 3, age: 50, email: 'john@gmail.com', name: 'John',
  },
];

// type definitions (schema)
const typeDefs = gql`
  type Query {
    me: User!,
    post: Post!,
    posts(query: String): [Post!]!,
    users(query: String): [User!]!,
  }
  
  type Post {
    id: ID!,
    author: User!,
    body: String!,
    published: Boolean!,
    title: String!,
  }
  
  type User {
    id: ID!,
    age: Int!,
    email: String!,
    name: String!,
    posts: [Post!]!,
  }
`;

// resolvers
const resolvers = {
  Query: {
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
    posts: (parent, args, context, info) => {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
        return isBodyMatch || isTitleMatch;
      });
    },
    users: (parent, args, context, info) => {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => (
        user.name.toLowerCase().includes(args.query.toLowerCase())
      ));
    },
  },
  Post: {
    author: (parent, args, context, info) => (
      users.find((user) => user.id === parent.author)
    ),
  },
  User: {
    posts: (parent, args, context, info) => (
      posts.filter((post) => post.author === parent.id)
    ),
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
