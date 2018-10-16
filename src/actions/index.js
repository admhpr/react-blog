import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=HARPS116'

export function fetchPosts(){
    const req = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: req,
    };
}


export function createPost(values){
    const req = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    return {
        type: CREATE_POST,
        payload: req
    }
}