import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch ,useSelector} from 'react-redux';
import {loadUser} from "../../features/auth/auth";
import {getPosts} from "../../features/posts/post";
import {NavBar} from '../utils/NavBar'

const Main = styled.div`
    display:flex;
`;
export const HomePage = () => {
    const User = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const [username,setUsername] = useState(User.username);
    useEffect(() => {
        dispatch(loadUser());
    },[username]);

    return(
        <Main>
            <NavBar/>
        </Main>
    )
}