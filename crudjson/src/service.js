import jsonserver from './jsonserver';

export default {
  //List
  listPosts: () => jsonserver.get('posts'),
  //Create
  createPost: (data) => jsonserver.post('posts', data),
  //update
  updatePost: (id, data) => jsonserver.put(`posts/${id}`, data),
  //delete
  deletePost: (id) => jsonserver.delete(`posts/${id}`),
  getPostDetails: (id) => jsonserver.get(`posts/${id}`),
};
