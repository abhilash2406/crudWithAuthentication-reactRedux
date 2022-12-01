import { combineReducers } from 'redux';
const initialState = {
  data: [],
  loadingData: false,
  showForm: false,
  addPostLoading: false,
  onEditLoading: false,
  selectedPostId: null,
  selectedPostdetails: null,
  onDeleteLoading: false,
  successMessage: null,
};

const auth = {
  signin: null,
  googleId: '',
  mail: '',
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_EDIT_POST':
      return {
        ...state,
        onEditLoading: action.payload,
      };
    case 'SET_SUCCESS_MESSAGE':
      return {
        ...state,
        successMessage: action.payload,
      };
    case 'SET_LOADING_DELETE_POST':
      return {
        ...state,
        onDeleteLoading: action.payload,
      };
    case 'SET_EDIT_POST_ID':
      return {
        ...state,
        selectedPostId: action.payload,
      };
    case 'SET_SELECTED_POST_DETAILS':
      return {
        ...state,
        selectedPostdetails: action.payload,
      };
    case 'SET_LOADING_DATA':
      return {
        ...state,
        loadingData: action.payload,
      };
    case 'SET_LOADING_ADD-POST':
      return {
        ...state,
        addPostLoading: action.payload,
      };
    case 'SET_POSTS':
      return {
        ...state,
        data: [...action.payload],
      };
    case 'SET_FORM':
      return {
        ...state,
        showForm: action.payload,
      };
  }
  return state;
};

const authReducer = (state = auth, action) => {
  switch (action.type) {
    case 'sign-in':
      return {
        ...state,
        signin: action.payload,
      };
    case 'sign-in-id':
      return {
        ...state,
        googleId: action.payload,
      };
    case 'sign-in-mail':
      return {
        ...state,
        mail: action.payload,
      };
  }
  return state;
};

export default combineReducers({
  posts: postsReducer,
  auth: authReducer,
});
