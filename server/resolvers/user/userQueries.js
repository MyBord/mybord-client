export default {
  users: (parent, args, { prisma }, info) => prisma.query.users(args, info),
};
