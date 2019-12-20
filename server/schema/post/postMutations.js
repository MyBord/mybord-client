export default {
  createPost: async (parent, args, { prisma }, info) => prisma.mutation.createPost(args, info),
  deletePost: async (parent, args, { prisma }, info) => prisma.mutation.deletePost(args, info),
  updatePost: async (parent, args, { prisma }, info) => prisma.mutation.updatePost(args, info),
};
