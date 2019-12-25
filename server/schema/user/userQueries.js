import getUserId from '../../utils/getUserId';
import verifyUserAccess from '../../utils/verifyUserAccess';

export default {
  me: async (parent, args, { prisma, request }, info) => {
    verifyUserAccess({ request, userId: args.userId });
    const finalArgs = {
      where: {
        ...args.where,
        id: args.userId,
      },
    };
    return prisma.query.user(finalArgs, info);
  },
  users: async (parent, args, { prisma, request }, info) => {
    const userId = getUserId(request, false);
    const users = await prisma.query.users(args, info);
    return users.map(async (user) => {
      if (userId && userId === user.id) {
        return user;
      }

      const userPostsArgs = {
        where: {
          author: { id: user.id },
          published: true,
        },
      };
      const userPosts = await prisma.query.posts(userPostsArgs, null);

      const strippedUser = {
        ...user,
        email: null,
        posts: userPosts,
      };
      return strippedUser;
    });
  },
};
