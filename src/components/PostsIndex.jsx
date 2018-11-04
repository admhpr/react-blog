import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import _ from "lodash";

export class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="p-5">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <h1>Posts</h1>
          </div>
          <div className="col-md-6 col-xs-12">
            <Link className="btn btn-primary float-right mt-2" to="/posts/new">
              Add a Post
            </Link>
          </div>
        </div>
        <div className="row">
          <ul className="list-group">{this.renderPosts()}</ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
