import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch ,useSelector} from 'react-redux';
import {loadUser} from "../../features/auth/auth";
import {getPosts} from "../../features/posts/post";

export const HomePage = () => {
    const User = useSelector(state => state.auth.user);
    const Post = useSelector(state => state.post);
    const dispatch = useDispatch();
    const [username,setUsername] = useState(User.username);
    const [post,setPost] = useState(Post)
    useEffect(() => {
        dispatch(loadUser());
    },[username]);
    useEffect(() => {
        dispatch(getPosts());
    },[post]);
    const result = Post['post'];
    return(
        <div>hello boi {User.username}
        <p>
            {result[0]['content']}
            {console.log(JSON.stringify(result[0]['id']))}
        </p>
            <img src={result[0]['picture']}/>
        </div>
    )
}