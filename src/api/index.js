import axios from 'axios';


const baseURL = "http://localhost:8000/";
const token = localStorage.getItem("token");

export const api = axios.create({
    baseURL : baseURL,
    headers: {
        Authorization : token ? "Token " + token : null,
        "Content-Type":"application/json",
        accept:"application/json",
    },
})