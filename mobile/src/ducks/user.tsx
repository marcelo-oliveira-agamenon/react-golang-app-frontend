import axios from "axios";
import envs from "../config";
import { Store } from "../store/index";
import { Types } from "../store/reducer";

//function get User list
export function getUserList() {
  const state: any = Store.getState();
  const apiToken: string = "Bearer " + state.token;
  return function (dispatch: any) {
    axios
      .get(`${envs.API_URL}/users`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: Types.USERLIST,
          payload: response.data.Data,
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

//function add User
export function addUser(
  username: string,
  password: string,
  email: string,
  avatar: string
) {
  const state: any = Store.getState();
  const apiToken: string = "Bearer " + state.token;
  return function (dispatch: any) {
    axios
      .post(
        `${envs.API_URL}/users/add`,
        {
          username: username,
          password: password,
          email: email,
          avatar: avatar,
          hasAvatar: true,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      )
      .then((response) => {
        dispatch({
          type: Types.USERLIST,
          payload: response.data.Data,
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
