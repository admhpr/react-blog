import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    console.log(field.meta.error);
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  }
  render() {
    return (
      <div>
        <form>
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
// form `namespaces`
export default reduxForm({
  validate,
  form: "PostNewForm"
})(PostsNew);
