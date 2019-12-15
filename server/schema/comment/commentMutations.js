import uuidv4 from 'uuid/v4';

export default {
  createComment: (parent, args, { db, pubsub }, info) => {
    const postExists = db.posts.some((post) => post.id === args.data.post && post.published);
    const userExists = db.users.some((user) => user.id === args.data.author);

    if (!postExists) {
      throw new Error('Post not found.');
    }
    if (!userExists) {
      throw new Error('User not found.');
    }

    const comment = {
      id: uuidv4(),
      ...args.data,
    };

    db.comments.push(comment);
    pubsub.publish(`comment ${args.data.post}`, {
      comment: {
        data: comment,
        mutation: 'CREATED',
      },
    });

    return comment;
  },
  deleteComment: (parent, args, { db, pubsub }, info) => {
    const commentIndex = db.comments.findIndex((comment) => comment.id === args.id);

    if (commentIndex === -1) {
      throw new Error('Comment not found.');
    }

    const [deletedComment] = db.comments.splice(commentIndex, 1);

    pubsub.publish(`comment ${deletedComment.post}`, {
      comment: {
        data: deletedComment,
        mutation: 'DELETED',
      },
    });

    return deletedComment;
  },
  updateComment: (parent, { id, data }, { db, pubsub }, info) => {
    const comment = db.comments.find((c) => c.id === id);

    if (!comment) {
      throw new Error('Comment not found');
    }

    if (typeof data.text === 'string') {
      comment.text = data.text;
    }

    pubsub.publish(`comment ${comment.post}`, {
      comment: {
        data: comment,
        mutation: 'DELETED',
      },
    });

    return comment;
  },
};
