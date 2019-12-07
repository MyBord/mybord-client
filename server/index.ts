import express from 'express';
import uuidv4 from 'uuid/v4';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import db from './db';

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
    comments: (parent, args, { db }, info) => db.comments,
    posts: (parent, args, { db }, info) => {
      if (!args.query) {
        return db.posts;
      }
      return db.posts.filter((post) => {
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
        return isBodyMatch || isTitleMatch;
      });
    },
    users: (parent, args, { db }, info) => {
      if (!args.query) {
        return db.users;
      }
      return db.users.filter((user) => (
        user.name.toLowerCase().includes(args.query.toLowerCase())
      ));
    },
  },
  Mutation: {
    createComment: (parent, args, { db }, info) => {
      const postExists = db.posts.some((post) => post.id === args.data.post && post.published);
      const userExists = db.users.some((user) => user.id === args.data.author);

      if (!postExists) {
        throw new Error('Post not found.');
      }
      if (!userExists) {
        throw new Error('User not found.');
      }

      const comment = {
        id: uuidv4(),
        ...args.data,
      };

      db.comments.push(comment);

      return comment;
    },
    createPost: (parent, args, { db }, info) => {
      const userExists = db.users.some((user) => user.id === args.data.author);

      if (!userExists) {
        throw new Error('User not found.');
      }

      const post = {
        id: uuidv4(),
        ...args.data,
      };

      db.posts.push(post);

      return post;
    },
    createUser: (parent, args, { db }, info) => {
      const emailTaken = db.users.some((user) => user.email === args.data.email);

      if (emailTaken) {
        throw new Error('Email is already taken.');
      }

      const user = {
        id: uuidv4(),
        ...args.data,
      };

      db.users.push(user);

      return user;
    },
    deleteComment: (parent, args, { db }, info) => {
      const commentIndex = db.comments.findIndex((comment) => comment.id === args.id);

      if (commentIndex === -1) {
        throw new Error('Comment not found.');
      }

      const deletedComment = db.comments.splice(commentIndex, 1);

      return deletedComment[0];
    },
    deletePost: (parent, args, { db }, info) => {
      const postIndex = db.posts.findIndex((post) => post.id === args.id);

      if (postIndex === -1) {
        throw new Error('Post not found.');
      }

      const deletedPost = db.posts.splice(postIndex, 1);

      db.comments = db.comments.filter((comment) => comment.post !== args.id);

      return deletedPost[0];
    },
    deleteUser: (parent, args, { db }, info) => {
      const userIndex = db.users.findIndex((user) => user.id === args.id);

      if (userIndex === -1) {
        throw new Error('User not found');
      }

      const deletedUser = db.users.splice(userIndex, 1);

      db.posts = db.posts.filter((post) => {
        const match = post.author === args.id;

        if (match) {
          db.comments = db.comments.filter((comment) => comment.post !== post.id);
        }

        return !match;
      });

      db.comments = db.comments.filter((comment) => comment.author !== args.id);

      return deletedUser[0];
    },
  },
  Comment: {
    author: (parent, args, { db }, info) => (
      db.users.find((user) => user.id === parent.author)
    ),
    post: (parent, args, { db }, info) => (
      db.posts.find((post) => post.id === parent.post)
    ),
  },
  Post: {
    author: (parent, args, { db }, info) => (
      db.find((user) => user.id === parent.author)
    ),
    comments: (parent, args, { db }, info) => (
      db.comments.filter((comment) => comment.post === parent.id)
    ),
  },
  User: {
    comments: (parent, args, { db }, info) => (
      db.comments.filter((comment) => comment.author === parent.id)
    ),
    posts: (parent, args, { db }, info) => (
      db.posts.filter((post) => post.author === parent.id)
    ),
  },
};

const server = new ApolloServer({
  context: {
    db,
  },
  resolvers,
  typeDefs: importSchema('./server/schema.graphql'),
});

const app = express();
server.applyMiddleware({ app });

const port = 5000;

app.listen(
  { port },
  () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`),
);
