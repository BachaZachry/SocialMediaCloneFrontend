import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {getPosts} from "../../features/posts/post";
import { useDispatch ,useSelector,sh} from 'react-redux';
import {postPost} from '../../features/posts/post';
import {isEqual} from 'lodash';
import ImageUploader from "react-images-upload";
import { PostItem } from './PostItem';

export const PostContainer = styled.div`
    display:flex;
    flex-direction:column;

`;
export const PostCreate = styled.div`
    display:flex;
    flex-direction:column;
    height:20vh;
    width:40vw;
    margin:10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

export const HomePosts = () => {
    const Posts = useSelector(state => state.post.post,isEqual);
    const dispatch = useDispatch();
    const [state,setState] = useState({
        content:"",
        picture:null,
    });
    useEffect(() => {
        dispatch(getPosts());
    },[Posts]);
    const handleChange = (event) => {
        // Change the state of inputs whenever there is a change
        const {name,value} = event.target;
        setState({...state,[name]:value})
        console.log(event.target);
    };
    const createPost = async (event) => {
        event.preventDefault();
        const {content,picture} = state;
        dispatch(await postPost({content,picture}));

    };
    return (
        <PostContainer>
            <PostCreate>
                <form onSubmit={createPost}>
                    <input type="text" value={state.content} onChange={handleChange} name="content"></input>
                    <input type="submit"></input>
                </form>
            </PostCreate>
            {Posts.map((items) => {
                return <PostItem content={items['content']}/>
            })}
            {/* <PostItem/> */}
        </PostContainer>
    )
}
