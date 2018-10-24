import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPost } from '../actions';


class PostsShow extends Component {
    
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    // render() {
    //     const { post } = this.props;
    //     return (
    //        <div>
    //            <h3>{post.title}</h3>
    //             <h6>Categories: {post.catergories}</h6>
    //             <p>{post.content}</p>
    //        </div>
    //     );
    // }
    render(){
        const { post } = this.props;
        if(post){
            return(
                <div>
                  {post.title}
                </div>
            )
        }else{
            return null
        }
    }
}

function mapStateToProps({posts}, ownProps){
    const state = { post: posts[ownProps.match.params.id] }
    return state;
}
export default connect(mapStateToProps, {fetchPost})(PostsShow);