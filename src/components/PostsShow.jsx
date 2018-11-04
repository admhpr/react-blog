import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDelete() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <Link to="/">Back to all Posts.</Link>
          </div>
          <div className="col-md-6 col-xs-12">
            <button
              className="btn btn-danger float-right mt-2"
              onClick={this.onDelete.bind(this)}
            >
              Delete Post
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 bg-white offset-1">
            <h3>{post.title}</h3>
            <h6>Categories: {post.catergories}</h6>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  const state = { post: posts[ownProps.match.params.id] };
  return state;
}
export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
