import React, {useState} from 'react';
import styled from 'styled-components';
import {login} from "../../features/auth/auth";
import {Redirect} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";


const MainContainer = styled.div`
    display:flex;
    height:100vh;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    background-color:#FCFDFE;
`;
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
`;

const FormContainer = styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:40%;
    height:50vh;
    box-shadow: 0px 20px 53px -30px rgba(95, 102, 173, 0.566816);
    border-radius: 10px;
    border: 1px rgba(var(--b6a,219,219,219),1);
    background-color:#FCFDFE;
    box-sizing:border-box;
`;
const Inputs = styled.div`
    margin: 0 50px 15px;
    height:40px;
    border-radius:7px;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    color: rgba(var(--i1d,38,38,38),1);
    background: rgba(var(--b3f,250,250,250),1);
    display:flex;
    flex-direction:row;
    position:relative;
    align-items:stretch;
`;
const Label = styled.label`
    display:flex;
    flex:1 0 0;
    padding:0;
    margin 0:
    position:relative;
    align-items:center;
    width:340px;
    min-width:0;
`;
const TextInsideUsername = styled.span`
    color: rgba(var(--f52,142,142,142),1);
    font-size: 14px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-overflow: ellipsis;
    transform-origin:left;
    user-select:none;
    white-space:nowrap;
    transform:${props => (props.username !=="" ? 'scale(.83333) translateY(-10px)' : 'none')};
    transition:transform ease-out .1s,-webkit-transform ease-out .1s;
`;
const TextInsidePassword = styled(TextInsideUsername)`
    transform:${props => (props.password !=="" ? 'scale(.83333) translateY(-10px)' : 'none')};
`;
const BlueChange = styled.div`
    height:100%;
    width:40vw;
    background-color:#748AF0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
const UsernameInput = styled.input`
    font-size:12px;
    padding:9px 0 7px 8px;
    background-color:transparent;
    margin:0;
    overflow:hidden;
    outline:0;
    border:0;
`;
const SubmitButton = styled.button`
    background-color:#748AF0;
    border: 1px solid transparent;
    height:45px;
    border-radius: 10px;
    color: rgba(var(--eca,255,255,255),1);
    font-weight:600;
    padding:5px 9px;    
    font-size:16px;
    width:340px;
    margin: 10px 50px 6px;
    cursor: pointer;
    pointer-events:auto;
`;

const TextAbove = styled.h1`
    font-weight:600;
    font-size:34px;
    margin-bottom:30px;
`;
const TextInside = styled(TextAbove)`
    color:white;
`;
const ButtonInside = styled(SubmitButton)`
    width:200px;
    background-color:white;
    color:#748AF0;
    border-radius:10px;
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
        <MainContainer>
            <BlueChange>
                <TextInside>New Here?</TextInside>
                <TextInside>Sign up and discover a great<br/>
                            amount of new opportunities!</TextInside>
                <ButtonInside>Sign Up</ButtonInside>
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
            </FormContainer>
            </Container>
        </MainContainer>
    )
}
