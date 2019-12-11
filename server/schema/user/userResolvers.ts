export default {
  comments: (parent, args, { db }, info) => (
    db.comments.filter((comment) => comment.author === parent.id)
  ),
  posts: (parent, args, { db }, info) => (
    db.posts.filter((post) => post.author === parent.id)
  ),
};
