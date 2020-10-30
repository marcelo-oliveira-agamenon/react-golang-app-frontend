import api from "../config/axiosConfig";
import { store } from "../store/store";
import { types } from "../store/reducer";

//Get promotion products function
export function getPromotions() {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return api
      .get(`/v1/product/promotion`, {
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
