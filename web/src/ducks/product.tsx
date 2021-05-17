import api from 'config/axiosConfig';
import { types } from 'store/reducer';
import { Category } from './category';

export type ProductImage = {
  ID: string;
  Productid: string;
  ImageURL: string;
  ImageKey: string;
  CreatedAt: string;
  UpdatedAt: string;
};

export type Product = {
  ID: string;
  Name: string;
  Categoryid: number;
  Category: Category;
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
  ProductImage: Array<ProductImage>;
  ShippingPrice: number;
  StockQtd: number;
  TecnicalDetails: string;
  Typeunit: string;
};

//Get promotion products function
export function getPromotions() {
  return function (dispatch: any) {
    return api
      .get(`/v1/product/promotion`)
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

//Get most recent products function
export function getRecents() {
  return function (dispatch: any) {
    return api
      .get(`/v1/product/recent`)
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

//Search product by name function
export function searchProduct(value: string) {
  return function (dispatch: any) {
    return api
      .get(`/v1/product/search/${value}`)
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

//Search product by name function
export function getAllProducts() {
  return function (dispatch: any) {
    return api
      .get(`/v1/product`)
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

//Search product by id function
export function getProductbyID(productID: string) {
  return function (dispatch: any) {
    return api
      .get(`/v1/product/getbyId/${productID}`)
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

//Get products by category function
export function getProductByCategory(categoryID: string) {
  return function (dispatch: any) {
    return api
      .get(`/v1/product/category/${categoryID}`)
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
