// import express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';
//
// // type definitions (schema)
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;
//
// // resolvers
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };
//
// const server = new ApolloServer({ typeDefs, resolvers });
//
// const app = express();
// server.applyMiddleware({ app });
//
// app.listen(
//   { port: 4000 },
//   () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
// );

console.log('foo');
const bar = (): string => 'hello';
console.log(bar());
