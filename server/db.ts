// Demo Data
const comments = [
  {
    id: '101', author: '303', post: '201', text: 'comment 1',
  },
  {
    id: '102', author: '301', post: '203', text: 'comment 2',
  },
  {
    id: '103', author: '302', post: '202', text: 'comment 3',
  },
];

const posts = [
  {
    id: '201', author: '301', body: 'body 1', published: true, title: 'title 1',
  },
  {
    id: '202', author: '301', body: 'body 2', published: true, title: 'title 2',
  },
  {
    id: '203', author: '302', body: 'body 3', published: false, title: 'title 3',
  },
];

const users = [
  {
    id: '301', age: '30', email: 'jimmy@gmail.com', name: 'Jimmy',
  },
  {
    id: '302', age: '40', email: 'bob@gmail.com', name: 'Bob',
  },
  {
    id: '303', age: '50', email: 'john@gmail.com', name: 'John',
  },
];

export default {
  comments,
  posts,
  users,
};
