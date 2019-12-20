export default {
  createComment: async (
    parent, args, { prisma }, info,
  ) => prisma.mutation.createComment(args, info),
  deleteComment: async (
    parent, args, { prisma }, info,
  ) => prisma.mutation.deleteComment(args, info),
  updateComment: async (
    parent, args, { prisma }, info,
  ) => prisma.mutation.updateComment(args, info),
};
