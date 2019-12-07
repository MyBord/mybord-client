export default {
  author: (parent, args, { db }, info) => (
    db.find((user) => user.id === parent.author)
  ),
  comments: (parent, args, { db }, info) => (
    db.comments.filter((comment) => comment.post === parent.id)
  ),
};
