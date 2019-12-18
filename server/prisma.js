import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  endpoint: 'http://localhost:4466',
  typeDefs: 'server/generated/prisma.graphql',
});

const createPostForUser = async (authorId, data) => {
  const userExists = await prisma.exists.User({ id: authorId });

  if (!userExists) {
    throw new Error('User not found.');
  }

  const post = await prisma.mutation.createPost({
    data: {
      ...data,
      author: {
        connect: {
          id: authorId,
        },
      },
    },
  }, '{ author { id name email posts { id title published } } }');

  return post.author;
};

// createPostForUser('ck4aoi61d002m0896w9ujg64f', {
//   title: 'Great books to read',
//   body: 'The War of Art',
//   published: true,
// }).then((user) => {
//   console.log(JSON.stringify(user, undefined, 2));
// }).catch((error) => {
//   console.log(error.message);
// });

const updatePostForUser = async (postId, data) => {
  const postExists = await prisma.exists.Post({ id: postId });

  if (!postExists) {
    throw new Error('Post not found.');
  }

  const post = await prisma.mutation.updatePost(
    {
      where: {
        id: postId,
      },
      data,
    },
    '{ author { id name email posts { id title published } } }',
  );

  return post.author;
};

// updatePostForUser(
//   'ck4aojt3l004e08962f9x61s8',
//   { published: false },
// ).then((user) => {
//   console.log(JSON.stringify(user, undefined, 2));
// }).catch((error) => {
//   console.log(error.message);
// });
