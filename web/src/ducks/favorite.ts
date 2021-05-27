import api from 'config/axiosConfig';
import { store } from 'store/store';
import { types } from 'store/reducer';

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
  let form = new FormData();
  form.set('userid', state.loggedUser.ID);
  form.set('productid', productID);

  return async function (dispatch: any) {
    return await api
      .post(`/v1/favorite`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
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
  return async function (dispatch: any) {
    return await api
      .delete(`/v1/favorite/${favoriteID}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
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
  return async function (dispatch: any) {
    return await api
      .get(`/v1/favorite/${state.loggedUser.ID}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        return Promise.reject<boolean>(false);
      });
  };
}
