import {createSlice} from '@reduxjs/toolkit';


const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLoading:false,
        isAuthenticated:localStorage.getItem('token') ? true : false,
        user:{username:''},
        token:localStorage.getItem('token')
    },
    reducers : {
        userLoading: (state) =>{
            state.isLoading = true
        },
        userLoaded: (state,action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        loginSuccess: (state,action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem('token',action.payload.token);
        },
        registerSuccess: (state,action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem('token',action.payload.token);
        },


    }
});

export const {userLoading,userLoaded,loginSuccess,registerSuccess} = authSlice.actions;
export default authSlice.reducer