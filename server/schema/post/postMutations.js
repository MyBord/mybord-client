import verifyUserAccess from '../../utils/verifyUserAccess';

export default {
  createPost: async (parent, args, { prisma, request }, info) => {
    verifyUserAccess(args.data.author.connect.id, request);
    return prisma.mutation.createPost(args, info);
  },
  deletePost: async (parent, args, { prisma, request }, info) => {
    const post = await prisma.query.posts(args, '{ author { id } }');
    verifyUserAccess(post[0].author.id, request);
    return prisma.mutation.deletePost(args, info);
  },
  updatePost: async (parent, args, { prisma, request }, info) => {
    const post = await prisma.query.posts(args, '{ author { id } }');
    verifyUserAccess(post[0].author.id, request);
    return prisma.mutation.updatePost(args, info);
  },
};
