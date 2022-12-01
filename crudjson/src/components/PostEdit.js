import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPost, cancelForm, getPost } from '../actions';

import Form from './Form';

const PostEdit = ({ posts, cancelForm, editPost, getPost, ...rest }) => {
  const params = useParams();
  const postId = params.id;
  const onFormSubmit = (data) => {
    editPost(posts.selectedPostId, {
      title: data.title,
      body: data.description,
      updatedAt: new Date().getTime(),
    });
  };
  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <div>
      <div className="header d-flex justify-content-between align -item-center">
        <h1>Edit Post</h1>
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
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  cancelForm,
  editPost,
  getPost,
})(PostEdit);
