export default {
  me: (): object => ({
    age: () => 30,
    email: () => 'foo@gmail.com',
    id: () => 'abc123',
    name: () => 'Jimmy',
  }),
  post: () => ({
    body: () => 'This is the body',
    id: () => 'abc123',
    published: () => true,
    title: () => 'sample title',
  }),
  comments: (parent, args, { db }, info) => db.comments,
  posts: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      return isBodyMatch || isTitleMatch;
    });
  },
  users: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) => (
      user.name.toLowerCase().includes(args.query.toLowerCase())
    ));
  },
};
