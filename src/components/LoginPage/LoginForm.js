import React, {useState} from 'react';
import styled from 'styled-components';
import {login} from "../../features/auth/auth";
import {Redirect} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";


const Container = styled.div`
    display:flex;
    
`;

export const LoginForm = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch();
    const [state,setState] = useState({
        username:"",
        password:"",
    });
    const handleChange = (event) => {
    // Change the state of inputs whenever there is a change
    const {name,value} = event.target;
    setState({...state,[name]:value})
  };
    const signIn = async (event) => {
        event.preventDefault();
        const {username,password} = state;
        dispatch(await login({username,password}));

    };
    if (isAuthenticated) {
            return <Redirect to="/" />;
  };
    return (
        <div>
            <form onSubmit={signIn}>
                <label>
                    <span>Username</span>
                    <input name="username" type='text' value={state.username} onChange={handleChange}/>
                </label>
                <label>
                    <span>Password</span>
                    <input name="password" type='password' value={state.password} onChange={handleChange}/>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
