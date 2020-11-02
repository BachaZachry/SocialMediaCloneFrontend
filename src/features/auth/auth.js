import {api} from './../../api/index';
import {userLoading,userLoaded,loginSuccess} from './authSlice';

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
}