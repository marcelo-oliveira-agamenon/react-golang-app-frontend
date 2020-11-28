import api from "../config/axiosConfig";
import { store } from "../store/store";
import { types } from "../store/reducer";

export type Product = {
  ID: string;
  Name: string;
  Categoryid: number;
  Value: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
  Description: string;
  Discount: number;
  HasPromotion: boolean;
  HasShipping: boolean;
  Photos: Array<string>;
  ShippingPrice: number;
  StockQtd: number;
  TecnicalDetails: string;
  Typeunit: string;
};

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

//Get most recent products function
export function getRecents() {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return api
      .get(`/v1/product/recent`, {
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

//Search product by name function
export function searchProduct(value: string) {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return api
      .get(`/v1/product/search/${value}`, {
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

//Search product by name function
export function getAllProducts() {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return api
      .get(`/v1/product`, {
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

//Search product by id function
export function getProductbyID(productID: string) {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return api
      .get(`/v1/product/getbyId/${productID}`, {
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
