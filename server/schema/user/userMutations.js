import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import verifyUserAccess from '../../utils/verifyUserAccess';

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
  deleteUser: async (parent, args, { prisma, request }, info) => {
    verifyUserAccess(args.where.id, request);
    return prisma.mutation.deleteUser(args, info);
  },
  loginUser: async (parent, args, { prisma }, info) => {
    const user = await prisma.query.user({
      where: {
        email: args.data.email,
      },
    });

    if (!user) {
      throw new Error('Unable to login.');
    }

    const doesPasswordMatch = await bcrypt.compare(args.data.password, user.password);

    if (!doesPasswordMatch) {
      throw new Error('Unable to login.');
    }

    return {
      ...user,
      token: jwt.sign({ userId: user.id }, '$9zW3eBT77N3$eJTH8D$'),
    };
  },
  updateUser: async (parent, args, { prisma, request }, info) => {
    verifyUserAccess(args.where.id, request);
    return prisma.mutation.updateUser(args, info);
  },
};
