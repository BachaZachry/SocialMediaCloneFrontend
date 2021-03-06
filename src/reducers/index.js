import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './../features/auth/authSlice';
import postReducer from './../features/posts/postSlice';

export default combineReducers({
    auth:authReducer,
    post:postReducer,
})