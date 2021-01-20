import React, {useState} from 'react';
import styled from 'styled-components';
import {login,googleLogin} from "../../features/auth/auth";
import {Redirect,Link} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import {MainContainer,Container,BlueChange,
       FormContainer,Inputs,UsernameInput,
        TextInsidePassword,TextInsideUsername,
        Label,ButtonInside,TextAbove,TextInside,
        SubmitButton,GoogleButton} from "./authStyles";


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
    async function responseGoogle (response) {
        dispatch(await googleLogin(response.accessToken))
    }
    return (
        <MainContainer>
            <BlueChange>
                <TextInside>New Here?</TextInside>
                <TextInside>Sign up and discover a great
                            amount of new opportunities!</TextInside>
                <ButtonInside>
                    <Link to="/register">Sign Up</Link>
                </ButtonInside>
            </BlueChange>
            <Container>
            <FormContainer onSubmit={signIn}>
                <TextAbove>Login to Your Account </TextAbove>
                <Inputs>
                <Label>
                    <TextInsideUsername username={state.username}>Username</TextInsideUsername>
                    <UsernameInput name="username" type='text' value={state.username} onChange={handleChange}/>
                </Label>
                </Inputs>
                <Inputs>
                <Label>
                    <TextInsidePassword password={state.password}>Password</TextInsidePassword>
                    <UsernameInput name="password" type='password' value={state.password} onChange={handleChange}/>
                </Label>
                </Inputs>
                <SubmitButton type='submit'>Login</SubmitButton>
                <GoogleButton clientId="702390539600-hc383uuijppphb0fm6ir78rgnb2dql85.apps.googleusercontent.com"
                         buttonText="Log in with Google"
                         onSuccess={responseGoogle}
                         onFailure={responseGoogle}/>
            </FormContainer>
            </Container>
        </MainContainer>
    )
}
