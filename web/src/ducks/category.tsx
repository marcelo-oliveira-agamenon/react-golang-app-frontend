import api from "../config/axiosConfig";
import { store } from "../store/store";
import { types } from "../store/reducer";

export type Category = {
  ID: string;
  Name: string;
  ImageURL: string;
  ImageKey: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
};

//Get all categories function
export function getCategories() {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return api
      .get(`/v1/category`, {
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
