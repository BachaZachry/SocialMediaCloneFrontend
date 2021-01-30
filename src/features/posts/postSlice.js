import {createSlice} from '@reduxjs/toolkit';

const postSlice = createSlice({
    name:'post',
    initialState:{
        post:null,
    },
    reducers : {
        postLoaded:(state,action) => {
            state.post = action.payload
        },
    }
});
export const {postLoaded} = postSlice.actions;
export default postSlice.reducer;