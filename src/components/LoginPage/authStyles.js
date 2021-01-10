import styled from 'styled-components';
import GoogleLogin from 'react-google-login'

export const MainContainer = styled.div`
    display:flex;
    height:100vh;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    background-color:#FCFDFE;
`;
export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
`;

export const FormContainer = styled.form`
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
export const FormContainerRegister = styled(FormContainer)`
    height:60vh;
`;
export const Inputs = styled.div`
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
export const Label = styled.label`
    display:flex;
    flex:1 0 0;
    padding:0;
    margin 0:
    position:relative;
    align-items:center;
    width:340px;
    min-width:0;
`;
export const TextInsideUsername = styled.span`
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
export const TextInsidePassword = styled(TextInsideUsername)`
    transform:${props => (props.password !=="" ? 'scale(.83333) translateY(-10px)' : 'none')};
`;
export const TextInsideFName = styled(TextInsideUsername)`
    transform:${props => (props.first_name !=="" ? 'scale(.83333) translateY(-10px)' : 'none')};
`;
export const TextInsideLName = styled(TextInsideUsername)`
    transform:${props => (props.last_name !=="" ? 'scale(.83333) translateY(-10px)' : 'none')};
`;
export const TextInsideEmail = styled(TextInsideUsername)`
    transform:${props => (props.email !=="" ? 'scale(.83333) translateY(-10px)' : 'none')};
`;
export const TextInsidePasswordConf = styled(TextInsideUsername)`
    transform:${props => (props.password_conf !=="" ? 'scale(.83333) translateY(-10px)' : 'none')};
`;
export const BlueChange = styled.div`
    height:100%;
    width:40vw;
    background-color:#748AF0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
export const UsernameInput = styled.input`
    font-size:12px;
    padding:9px 0 7px 8px;
    background-color:transparent;
    margin:0;
    overflow:hidden;
    outline:0;
    border:0;
`;
export const SubmitButton = styled.button`
    background-color:#748AF0;
    border: 1px solid transparent;
    height:45px;
    border-radius: 10px;
    color: rgba(var(--eca,255,255,255),1);
    padding:5px 9px;    
    font-size:16px;
    width:340px;
    font-weight:400;
    line-height:1.5;
    margin: 10px 50px 6px;
    cursor: pointer;
    pointer-events:auto;
`;

export const TextAbove = styled.h1`
    font-weight:600;
    font-size:34px;
    margin-bottom:30px;
`;
export const TextInside = styled(TextAbove)`
    color:white;
    text-align:center;
`;
export const ButtonInside = styled(SubmitButton)`
    width:200px;
    background-color:white;
    color:#748AF0;
    border-radius:10px;
    & a {
    text-decoration:none;
    }
    & a:visited{
    color:#748AF0;
    }
`;

export const GoogleButton = styled(GoogleLogin)`
    margin-top:15px;
    width:340px;
    border-radius:7px;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgba(var(--b3f,250,250,250),1);
`;