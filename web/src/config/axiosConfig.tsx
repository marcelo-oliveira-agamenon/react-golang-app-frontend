import axios from 'axios';
import { store } from 'store/store';

const api = axios.create({
  baseURL: 'https://ecommerce-go.herokuapp.com',
  //baseURL: "http://localhost:4000",
});

api.interceptors.request.use(async config => {
  const state: any = store.getState();
  const token = 'Bearer ' + state.apiToken;

  if (state.apiToken !== '') {
    config.headers.Authorization = token;
  }

  return config;
});

export default api;
