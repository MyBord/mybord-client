export default {
  post: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.post(args, info);
    },
  },
};
