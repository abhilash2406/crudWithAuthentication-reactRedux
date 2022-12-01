import PostService from '../service';
import history from '../history';
export const setPosts = () => async (dispatch) => {
  dispatch(loadingPosts(true));
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.listPosts();
  dispatch({
    type: 'SET_POSTS',
    payload: data,
  });
  dispatch(loadingPosts(false));
};

export const loadingPosts = (payload) => {
  return {
    type: 'SET_LOADING_DATA',
    payload: payload,
  };
};
export const addPostLoading = (payload) => {
  return {
    type: 'SET_LOADING_ADD-POST',
    payload: payload,
  };
};
export const showForm = (payload) => {
  return {
    type: 'SET_FORM',
    payload,
  };
};
//action for add post to json server
export const addPost = (payload) => async (dispatch) => {
  dispatch(addPostLoading(true));
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.createPost(payload);

  dispatch(addPostLoading(false));
  history.push('/');
  dispatch(showForm(false));
  dispatch(setSuccessMessage('Add post successfully'));
  dispatch(setPosts());
};

//action for fetch specific post details
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING_EDIT_POST', payload: true });
  dispatch({ type: 'SET_EDIT_POST_ID', payload: id });
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.getPostDetails(id);

  dispatch({ type: 'SET_SELECTED_POST_DETAILS', payload: data });
  dispatch({ type: 'SET_LOADING_EDIT_POST', payload: false });
  dispatch(showForm(true));
};

//action for edit post
export const editPost = (id, payload) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING_ADD_POST', payload: true });
  dispatch({ type: 'SET_EDIT_POST_ID', payload: id });
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.updatePost(id, payload);

  dispatch({ type: 'SET_LOADING_ADD_POST', payload: false });
  dispatch(cancelForm());
  history.push('/');
  dispatch(setSuccessMessage('Edit post successfully'));
  dispatch(setPosts());
};

//action for cancel form
export const cancelForm = () => (dispatch) => {
  dispatch(showForm(false));
  history.push('/');
  dispatch({ type: 'SET_EDIT_POST_ID', payload: null });
  dispatch({ type: 'SET_SELECTED_POST_DETAILS', payload: null });
};

// action for setting succesfull message
export const setSuccessMessage = (payload) => ({
  type: 'SET_SUCCESS_MESSAGE',
  payload,
});

export const resetSuccessMessage = () => ({
  type: 'SET_SUCCESS_MESSAGE',
  payload: null,
});

//action for delete post
export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING_DELETE_POST', payload: true });
  dispatch({ type: 'SET_EDIT_POST_ID', payload: id });
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.deletePost(id);

  dispatch({ type: 'SET_LOADING_DELETE_POST', payload: false });
  dispatch(setSuccessMessage('Delete post successfully'));
  dispatch(setPosts());
};

//action for google sigin
export const signin = (payload, id, mail) => async (dispatch) => {
  dispatch({ type: 'sign-in', payload: payload });
  dispatch({ type: 'sign-in-id', payload: id });
  dispatch({ type: 'sign-in-mail', payload: mail });
};
