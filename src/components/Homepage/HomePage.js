import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch ,useSelector} from 'react-redux';
import {loadUser} from "../../features/auth/auth";
import {getPosts} from "../../features/posts/post";
import {HomePosts} from "./HomePosts";
import {NavBar} from '../utils/NavBar';


const Main = styled.div`
    display:flex;
    flex-direction:column;
`;
const Container = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
`;
export const HomePage = () => {
    const User = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const username = User.username;
    // const profilePic = User.profile_pic.split('?')[0];
    useEffect(() => {
        dispatch(loadUser());
    },[username]);

    return(
        <Main>
            <NavBar username={username}/>
            <Container>
                <HomePosts/>
            </Container>
        </Main>
    )
}