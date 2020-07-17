import axios from "axios";
import envs from "../config";
import { types } from "../store/reducer";

//Login function
export function login(username: string, password: string) {
  return function (dispatch: any) {
    return axios
      .post(`${envs.API_URL}/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch({
          type: types.API_TOKEN,
          payload: response.data.Token,
        });
        dispatch({
          type: types.LOGGED_USER,
          payload: response.data.Data,
        });
        return Promise.resolve(response.data?.Data);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//Fetch username list from api without token
export function fetchUsernameList() {
  return function (dispatch: any) {
    return axios
      .get(`${envs.API_URL}/signup/usernameList`)
      .then((response) => {
        dispatch({
          type: types.USERNAME_LIST,
          payload: response.data.Data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//Add user in the api without token
export function signup(formData: { username: string; password: string }) {
  return function (dispatch: any) {
    return axios
      .post(`${envs.API_URL}/signup`, formData)
      .then((response) => {
        return Promise.resolve(response.data.Message);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
