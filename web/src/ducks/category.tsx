import api from 'config/axiosConfig';
import { types } from 'store/reducer';

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
  return async function (dispatch: any) {
    return await api
      .get(`/v1/category`)
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
