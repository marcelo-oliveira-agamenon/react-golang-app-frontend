import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API,
});

api.interceptors.request.use(async config => {
  const token = 'Bearer ' + localStorage.getItem('token');

  if (token !== '') {
    config.headers.Authorization = token;
  }

  return config;
});

export default api;
