import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  endpoint: 'http://localhost:4466',
  // secret: '%cx^&2DYo9pf@11E6gt^',
  typeDefs: 'server/generated/prisma.graphql',
});

export default prisma;
