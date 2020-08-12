import axios from "axios";
import envs from "../config";
import { Types } from "../store/reducer";

export function login(username: string, password: string) {
  return function (dispatch: any) {
    axios
      .post(`${envs.API_URL}/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch({
          type: Types.TOKEN,
          payload: response.data.Token,
        });
      })
      .catch((error) => {
        dispatch({
          type: Types.ERROR,
          payload: error,
        });
      });
  };
}

export function signIn(
  username: string,
  password: string,
  fullname: string,
  avatar: string
) {
  return function (dispatch: any) {
    axios
      .post(`${envs.API_URL}/signup`, {
        username: username,
        password: password,
        fullname: fullname,
        avatar: avatar,
      })
      .then((response) => {
        if (response.data) {
          return Promise.resolve(true);
        }
      })
      .catch((error) => {
        dispatch({
          type: Types.ERROR,
          payload: error,
        });
        return Promise.resolve();
      });
  };
}
