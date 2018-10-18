import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className} >
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
            <span className="text-help">{touched ? error : ""}</span>
      </div>
    );
  }

  onSubmit(values){
    this.props.createPost(values, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField} />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/" className="btn btn-danger"> Cancel </Link>

        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Please Enter an Title";
  }
  if (!values.categories) {
    errors.categories = "Please Enter an Category";
  }
  if (!values.content) {
    errors.content = "Please Enter some Content";
  }
  // empty errors means it has passed validation
  return errors;
}
// form `namespace`, layered connections
export default reduxForm({
  validate,
  form: "PostNewForm"
})(
  connect(null,{ createPost })(PostsNew)
);
