import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {login, register} from "../../features/auth/auth";
import {Redirect} from "react-router";

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
        <div>
            <form onSubmit={signUp}>
                <label>
                    <span>First Name</span>
                    <input name="first_name" type='text' value={state.first_name} onChange={handleChange}/>
                </label>
                <label>
                    <span>Last Name</span>
                    <input name="last_name" type='text' value={state.last_name} onChange={handleChange}/>
                </label>
                <label>
                    <span>E-mail</span>
                    <input name="email" type='email' value={state.email} onChange={handleChange}/>
                </label>
                <label>
                    <span>Username</span>
                    <input name="username" type='text' value={state.username} onChange={handleChange}/>
                </label>
                <label>
                    <span>Password</span>
                    <input name="password" type='password' value={state.password} onChange={handleChange}/>
                </label>
                <label>
                    <span>Password Confirmation</span>
                    <input name="password_conf" type='password' value={state.password_conf} onChange={handleChange}/>
                </label>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}