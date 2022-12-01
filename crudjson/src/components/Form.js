import React, { useEffect } from 'react';
import { useFormik } from 'formik';

const Form = ({
  onFormSubmit,
  selectedPostdetails,
  oncancel,
  onSubmitloading,
}) => {
  useEffect(() => {
    if (selectedPostdetails) {
      setFieldValue('title', selectedPostdetails.title);
      setFieldValue('description', selectedPostdetails.body);
    }
  }, [selectedPostdetails]);
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Title Required';
    }

    if (!values.description) {
      errors.description = 'Description Required';
    }
    return errors;
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values, 
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validate,
    onSubmit: (values) => {
      onFormSubmit(values);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p>
          {' '}
          {touched.title && errors.title ? <span>{errors.title}</span> : null}
        </p>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="3"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          <p>
            {' '}
            {touched.description && errors.description ? (
              <span>{errors.description}</span>
            ) : null}
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit{' '}
          {onSubmitloading ? (
            <div
              className="spinner-border spinner-border-sm"
              role="status"
            ></div>
          ) : null}
        </button>
        <button type="button" className="btn btn-light" onClick={oncancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
