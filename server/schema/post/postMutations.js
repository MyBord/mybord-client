import uuidv4 from 'uuid/v4';

export default {
  createPost: (parent, args, { db, pubsub }, info) => {
    const userExists = db.users.some((user) => user.id === args.data.author);

    if (!userExists) {
      throw new Error('User not found.');
    }

    const post = {
      id: uuidv4(),
      ...args.data,
    };

    db.posts.push(post);

    if (args.data.published) {
      pubsub.publish('post', {
        post: {
          data: post,
          mutation: 'CREATED',
        },
      });
    }

    return post;
  },
  deletePost: (parent, args, { db, pubsub }, info) => {
    const postIndex = db.posts.findIndex((post) => post.id === args.id);

    if (postIndex === -1) {
      throw new Error('Post not found.');
    }

    const [post] = db.posts.splice(postIndex, 1);

    db.comments = db.comments.filter((comment) => comment.post !== args.id);

    if (post.published) {
      pubsub.publish('post', {
        post: {
          data: post,
          mutation: 'DELETED',
        },
      });
    }

    return post;
  },
  updatePost: (parent, { id, data }, { db, pubsub }, info) => {
    const post = db.posts.find((p) => p.id === id);
    const originalPost = { ...post };

    if (!post) {
      throw new Error('Post not found');
    }

    if (typeof data.title === 'string') {
      post.title = data.title;
    }

    if (typeof data.body === 'string') {
      post.body = data.body;
    }

    if (typeof data.published === 'boolean') {
      post.published = data.published;

      if (originalPost.published && !post.published) {
        pubsub.publish('post', {
          post: {
            data: originalPost,
            mutation: 'DELETED',
          },
        });
      } else if (!originalPost.published && post.published) {
        pubsub.publish('post', {
          post: {
            data: post,
            mutation: 'CREATED',
          },
        });
      }
    } else if (post.published) {
      pubsub.publish('post', {
        post: {
          data: post,
          mutation: 'UPDATED',
        },
      });
    }

    return post;
  },
};
