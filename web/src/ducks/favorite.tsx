import api from "../config/axiosConfig";
import { store } from "../store/store";
import { types } from "../store/reducer";

export type Favorite = {
  ID: string;
  UserID: string;
  ProductID: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
};

//add favorite product function
export function addFavorite(productID: string) {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  let form = new FormData();
  form.set("userid", state.loggedUser.ID);
  form.set("productid", productID);

  return function (dispatch: any) {
    return api
      .post(`/v1/favorite`, form, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        return Promise.reject<boolean>(false);
      });
  };
}

//Delete favorites function
export function deleteFavorite(favoriteID: string) {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return api
      .delete(`/v1/favorite/${favoriteID}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        return Promise.reject<boolean>(false);
      });
  };
}

//Get favorites by user function
export function getFavoriteByUser() {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return api
      .get(`/v1/favorite/${state.loggedUser.ID}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        return Promise.reject<boolean>(false);
      });
  };
}
