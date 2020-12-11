import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {login, register} from "../../features/auth/auth";
import {Redirect,Link} from "react-router-dom";
import {
    MainContainer, Container, BlueChange,
    FormContainer, Inputs, UsernameInput,
    TextInsidePassword, TextInsideUsername,
    TextInsideEmail, TextInsideFName, TextInsideLName,
    Label, ButtonInside, TextAbove, TextInside,
    SubmitButton, TextInsidePasswordConf, DoubleInputs
} from "./authStyles";

export const RegisterForm = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch();
    const [state,setState] = useState({
        first_name:"",
        last_name:"",
        email:"",
        username:"",
        password:"",
        password_conf:"",
    });
    const handleChange = (event) => {
    // Change the state of inputs whenever there is a change
    const {name,value} = event.target;
    setState({...state,[name]:value})
    };
    const signUp = async (event) => {
        event.preventDefault();
        const {first_name,last_name,email,username,password,password_conf} = state;
        if (password===password_conf) {
            dispatch(await register({first_name,last_name,email,username,password}));
        }
        else {
            // Returning an error
        }
    };
    if (isAuthenticated) {
            return <Redirect to="/" />;
    };
    return (
        <MainContainer>
            <BlueChange>
                <TextInside>Already have an account?</TextInside>
                <TextInside>Sign up and discover a great<br/>
                            amount of new opportunities!</TextInside>
                <ButtonInside>
                    <Link to="/login">Sign In</Link>
                </ButtonInside>
            </BlueChange>
            <Container>
            <FormContainer onSubmit={signUp}>
                <TextAbove>Login to Your Account </TextAbove>
                <Inputs>
                <Label>
                    <TextInsideUsername username={state.username}>Username</TextInsideUsername>
                    <UsernameInput name="username" type='text' value={state.username} onChange={handleChange}/>
                </Label>
                </Inputs>
                <Inputs>
                <Label>
                    <TextInsideFName first_name={state.first_name}>First Name</TextInsideFName>
                    <UsernameInput name="first_name" type='text' value={state.first_name} onChange={handleChange}/>
                </Label>
                </Inputs>
                <Inputs>
                <Label>
                    <TextInsideLName last_name={state.last_name}>Last Name</TextInsideLName>
                    <UsernameInput name="last_name" type='text' value={state.last_name} onChange={handleChange}/>
                </Label>
                </Inputs>
                <Inputs>
                <Label>
                    <TextInsideEmail email={state.email}>E-mail</TextInsideEmail>
                    <UsernameInput name="email" type='email' value={state.email} onChange={handleChange}/>
                </Label>
                </Inputs>
                <Inputs>
                <Label>
                    <TextInsidePassword password={state.password}>Password</TextInsidePassword>
                    <UsernameInput name="password" type='password' value={state.password} onChange={handleChange}/>
                </Label>
                </Inputs>
                <Inputs>
                <Label>
                    <TextInsidePasswordConf password_conf={state.password_conf}>Password Confirmation</TextInsidePasswordConf>
                    <UsernameInput name="password_conf" type='password' value={state.password_conf} onChange={handleChange}/>
                </Label>
                </Inputs>
                <SubmitButton type='submit'>Sign Up</SubmitButton>
            </FormContainer>
            </Container>
        </MainContainer>
    )
}