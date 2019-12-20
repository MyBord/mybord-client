import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

    const user = await prisma.mutation.createUser(finalArgs, info);

    return {
      ...user,
      token: jwt.sign({ userId: user.id }, '$9zW3eBT77N3$eJTH8D$'),
    };
  },
  deleteUser: async (parent, args, { prisma }, info) => prisma.mutation.deleteUser(args, info),
  updateUser: async (parent, args, { prisma }, info) => prisma.mutation.updateUser(args, info),
};
