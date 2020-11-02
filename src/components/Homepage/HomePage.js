import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch ,useSelector} from 'react-redux';
import {loadUser} from "../../features/auth/auth";

export const HomePage = () => {
    const User = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    },[dispatch]);
    return(
        <div>hello boi {User.username}</div>
    )
}