import {api} from './../../api/index';
import {userLoading,userLoaded,loginSuccess,registerSuccess} from './authSlice';
import axios from "axios";

export const loadUser = () => async dispatch => {
    dispatch(userLoading);
    try {
        await api.get('user/loaduser/')
            .then((response) => dispatch(userLoaded(response.data)));
    }
    catch (e) {
        return console.error(e.message);
    }
};

export const login = ({username,password}) => async dispatch => {
    const body = JSON.stringify({username,password});
    dispatch(userLoading);
    try {
        await api.post('user/login/',body)
            .then((response) => {
                dispatch(loginSuccess(response.data));
                api.defaults.headers['Authorization'] = 'Token ' + response.data.token
            });

    }
    catch (e) {
        return console.error(e.message);
    }
};

export const register = ({first_name,last_name,email,username,password}) => async dispatch => {
    const body = JSON.stringify({first_name,last_name,email,username,password});
    dispatch(userLoading);
    try {
        await api.post('user/register/',body)
            .then((response) => {
                dispatch(registerSuccess(response.data));
                api.defaults.headers['Authorization'] = 'Token ' + response.data.token
            })
    }
    catch (e) {
        return console.error(e.message);
    }

};
export const googleLogin = (accesstoken) => async dispatch => {
    await axios.post('http://localhost:8000/user/rest-auth/google/', {
        access_token: accesstoken,
    }).then((response) => {dispatch(loginSuccess(response.data))
        api.defaults.headers['Authorization'] = 'Token ' + response.data.token
    })

};
