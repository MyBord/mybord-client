export default {
  createUser: async (parent, args, { prisma }, info) => prisma.mutation.createUser(args, info),
  deleteUser: async (parent, args, { prisma }, info) => prisma.mutation.deleteUser(args, info),
  updateUser: async (parent, args, { prisma }, info) => prisma.mutation.updateUser(args, info),
};
