import {postLoaded} from "./postSlice";
import {api} from './../../api/index';



export const getPosts = () => async dispatch => {
    try {
        await api.get('post/posts/')
            .then((response) => {
                dispatch(postLoaded(response.data))
            });
    }
    catch (e) {
        return console.error(e.message);
    }
};