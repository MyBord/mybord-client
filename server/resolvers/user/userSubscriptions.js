export default {
  user: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.user(args, info);
    },
  },
};
