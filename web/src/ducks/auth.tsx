import api from "../config/axiosConfig";
import { types } from "../store/reducer";

//Login function
export function login(email: string, password: string) {
  return function (dispatch: any) {
    return api
      .post(`/v1/login`, {
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
export function signup(form: FormData) {
  console.log("w", form.get("name"));
  return function (dispatch: any) {
    return api
      .post(`/v1/signUp`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("aa", response);
        return Promise.resolve(true);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        console.log(error.response);
        return Promise.reject(error.response.data);
      });
  };
}
