import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import PostList from './PostList';
import PostCreate from './PostCreate';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../history';
import PostEdit from './PostEdit';
import Header from './Header';
import PublicRoute from './Public';
import PrivateRoute from './private';
import { resetSuccessMessage } from '../actions';
import _ from 'lodash';
import Loader from './Loader';
import './index.css';

const toastConfig = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const App = ({resetSuccessMessage, posts, auth }) => {
  const { signin } = auth;

  useEffect(() => {
    if (posts.successMessage) {
      toast.success(posts.successMessage, toastConfig);
      resetSuccessMessage();
    }
  }, [posts.successMessage]);
  return (
    <div>
      <ToastContainer />
      <Header />
      {_.isNull(signin) ? (
        <Loader />
      ) : (
        <Router history={history}>
          <PublicRoute
            path="/"
            exact
            isAuthenticated={signin}
            component={PostList}
          ></PublicRoute>
          <PrivateRoute path="/add" isAuthenticated={signin}>
            <PostCreate />
          </PrivateRoute>
          <PrivateRoute path="/edit/:id" isAuthenticated={signin}>
            <PostEdit />
          </PrivateRoute>
        </Router>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { posts: state.posts, auth: state.auth };
};
export default connect(mapStateToProps,{resetSuccessMessage})(App);
