import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  endpoint: 'http://localhost:4466',
  typeDefs: 'server/generated/prisma.graphql',
});

prisma.query.users(null, '{ id name email }').then((data) => {
  console.log(data);
});
