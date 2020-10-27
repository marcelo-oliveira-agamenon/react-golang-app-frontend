import axios from "axios";
import envs from "../config";
import { types } from "../store/reducer";

//Login function
export function login(email: string, password: string) {
  return function (dispatch: any) {
    return axios
      .post(`${envs.API_URL}/v1/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        dispatch({
          type: types.API_TOKEN,
          payload: response.data.token,
        });
        dispatch({
          type: types.LOGGED_USER,
          payload: response.data.user,
        });
        return Promise.resolve<boolean>(true);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        let msg =
          error.response.data === "Wrong password"
            ? "Senha incorreta"
            : error.response.data === "No user with this email"
            ? "Nenhum usuário com este email"
            : "Erro inesperado!";
        return Promise.reject<string>(msg);
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
