export default {
  posts: (parent, args, { prisma }, info) => prisma.query.posts(args, info),
};
