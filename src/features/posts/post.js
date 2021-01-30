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
export const postPost = ({content,picture}) => async dispatch => {
    const body = JSON.stringify({content,picture}) 
    try {
        await api.post('post/createpost/',body)
                .then((response) => {
                    dispatch(postLoaded(response.data))
                });
    }
    catch(e) {
        return console.error(e.message);
    }
}