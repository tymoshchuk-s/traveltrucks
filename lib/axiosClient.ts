import axios from "axios";

console.log('axiosClient loaded');

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(api.defaults.baseURL);