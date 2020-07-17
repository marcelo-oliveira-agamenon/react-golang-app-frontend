import axios from "axios";
import envs from "../config";
import { types } from "../store/reducers";

//Login function
export function login(username: string, password: string) {
  return function (dispatch: any) {
    return axios
      .post(`${envs.API_URL}/api/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch({
          type: types.API_TOKEN,
          payload: response.data,
        });
        dispatch({
          type: types.LOGGED_USER,
          payload: response.data,
        });
        return Promise.resolve(response.data.token);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
