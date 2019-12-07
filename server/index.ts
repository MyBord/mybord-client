import express from 'express';
import uuidv4 from 'uuid/v4';
import { ApolloServer, gql } from 'apollo-server-express';

// Demo Data
const comments = [
  {
    id: 101, author: 303, post: 201, text: 'comment 1',
  },
  {
    id: 102, author: 301, post: 203, text: 'comment 2',
  },
  {
    id: 103, author: 302, post: 202, text: 'comment 3',
  },
];

const posts = [
  {
    id: 201, author: 301, body: 'body 1', published: true, title: 'title 1',
  },
  {
    id: 202, author: 301, body: 'body 2', published: true, title: 'title 2',
  },
  {
    id: 203, author: 302, body: 'body 3', published: false, title: 'title 3',
  },
];

const users = [
  {
    id: 301, age: 30, email: 'jimmy@gmail.com', name: 'Jimmy',
  },
  {
    id: 302, age: 40, email: 'bob@gmail.com', name: 'Bob',
  },
  {
    id: 303, age: 50, email: 'john@gmail.com', name: 'John',
  },
];

// type definitions (schema)
const typeDefs = gql`
  type Query {
    comments: [Comment!]!,
    me: User!,
    post: Post!,
    posts(query: String): [Post!]!,
    users(query: String): [User!]!,
  }
  
  type Mutation {
    createPost(author: ID!, body: String!, published: Boolean!, title: String!): Post!,
    createUser(age: Int!, email: String!, name: String!): User!,
  }
  
  type Comment {
    id: ID!,
    author: User!,
    post: Post!,
    text: String!,
  }
  
  type Post {
    id: ID!,
    author: User!,
    body: String!,
    comments: [Comment!]!,
    published: Boolean!,
    title: String!,
  }
  
  type User {
    id: ID!,
    age: Int!,
    comments: [Comment!]!,
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
    comments: () => comments,
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
  Mutation: {
    createPost: (parent, args, context, info) => {
      const userExists = users.some((user) => user.id === args.author);

      if (!userExists) {
        throw new Error('User not found.');
      }

      const post = {
        id: uuidv4(),
        title: args.title,
        body: args.body,
        published: args.published,
        author: args.author,
      };

      posts.push(post);

      return post;
    },
    createUser: (parent, args, context, info) => {
      const emailTaken = users.some((user) => user.email === args.email);

      if (emailTaken) {
        throw new Error('Email is already taken.');
      }

      const user = {
        id: uuidv4(),
        age: args.age,
        email: args.email,
        name: args.name,
      };

      users.push(user);

      return user;
    },
  },
  Comment: {
    author: (parent, args, context, info) => (
      users.find((user) => user.id === parent.author)
    ),
    post: (parent, args, context, info) => (
      posts.find((post) => post.id === parent.post)
    ),
  },
  Post: {
    author: (parent, args, context, info) => (
      users.find((user) => user.id === parent.author)
    ),
    comments: (parent, args, context, info) => (
      comments.filter((comment) => comment.post === parent.id)
    ),
  },
  User: {
    comments: (parent, args, context, info) => (
      comments.filter((comment) => comment.author === parent.id)
    ),
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
