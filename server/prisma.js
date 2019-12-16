import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  endpoint: 'localhost:4466',
  typeDefs: 'server/generated/prisma.graphql',
});
