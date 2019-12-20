export default {
  comments: (parent, args, { prisma }, info) => prisma.query.comments(args, info),
};
