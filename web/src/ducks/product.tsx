import axios from "axios";
import envs from "../config";
import { types } from "../store/reducer";

//Fetch user list from api
export function fetchProductList() {
  return function (dispatch: any, getState: any) {
    const state: any = getState();
    const apiToken: any = state.apiToken.token;
    return axios
      .get(`${envs.API_URL}/product`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: types.USER_LIST,
          payload: response.data.Userlist,
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

//Fetch user with userID from api
export function fetchProduct(productID: string) {
  return function (dispatch: any, getState: any) {
    const state: any = getState();
    const apiToken: any = state.apiToken.token;
    return axios
      .get(`${envs.API_URL}/product/${productID}`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: types.USER,
          payload: response.data.Userlist,
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

//Add user in the api
export function createUser(formData: { username: string; password: string }) {
  return function (dispatch: any, getState: any) {
    const state: any = getState();
    const apiToken: any = state.apiToken.token;
    return axios
      .post(`${envs.API_URL}/users/add`, formData, {
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
