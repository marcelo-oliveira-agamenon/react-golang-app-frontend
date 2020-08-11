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
