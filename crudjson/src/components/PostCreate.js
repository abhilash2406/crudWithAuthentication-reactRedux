import React from 'react';
import { connect } from 'react-redux';
import { addPost, cancelForm } from '../actions';
import Form from './Form';

const PostCreate = ({ posts, addPost, cancelForm, ...rest }) => {
  const onFormSubmit = (data) => {
    addPost({
      title: data.title,
      body: data.description,
      createdAt: new Date().getTime(),
    });
  };
  return (
    <div>
      <div className="header d-flex justify-content-between align -item-center">
        <h1>CREATE POST</h1>
      </div>

      <Form
        onFormSubmit={onFormSubmit}
        selectedPostdetails={posts.selectedPostdetails}
        oncancel={cancelForm}
        onSubmitloading={posts.addPostLoading}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  addPost,

  cancelForm,
})(PostCreate);
