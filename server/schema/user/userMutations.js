import bcrypt from 'bcryptjs';

export default {
  createUser: async (parent, args, { prisma }, info) => {
    if (args.data.password.length < 8) {
      throw new Error('Password must be 8 characters or longer.');
    }

    const password = await bcrypt.hash(args.data.password, 10);

    const finalArgs = {
      ...args,
      data: {
        ...args.data,
        password,
      },
    };

    return prisma.mutation.createUser(finalArgs, info);
  },
  deleteUser: async (parent, args, { prisma }, info) => prisma.mutation.deleteUser(args, info),
  updateUser: async (parent, args, { prisma }, info) => prisma.mutation.updateUser(args, info),
};
