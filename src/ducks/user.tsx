import axios from "axios";
import envs from "../config";
import { store } from "../store/store";
import { types } from "../store/reducers";

export type User = {
  userID: string;
  username: string;
  password: string;
  info: {
    name: string;
    phone: string;
    age: number;
    email: string;
    avatar: string;
  };
};

//functions
//fetch a list of users from API
export function fetchUserList() {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .get(`${envs.API_URL}/users`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: types.USER_LIST,
          payload: response.data,
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

//fetch a user from the database from the API
export function fetchUser(userID: string) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .get(`${envs.API_URL}/users/${userID}`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: types.FETCH_USER,
          payload: response.data,
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

//add new user in the database from the API
export function addUser(username: string, password: string) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .post(
        `${envs.API_URL}/users/add`,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//delete a user in the database from the API
export function deleteUser(idUser: string) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .delete(`${envs.API_URL}/users/delete/${idUser}`, {
        data: {
          userID: idUser,
        },
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//update a user in the database from the API
export function updateUser(idUser: string, username: string, password: string) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .put(
        `${envs.API_URL}/users/update/${idUser}`,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
