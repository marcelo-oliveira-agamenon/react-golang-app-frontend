import api from "../config/axiosConfig";
import { types } from "../store/reducer";
import { store } from "../store/store";

export type Order = {
  ID: string;
  UserID: string;
  ProductID: Array<string>;
  TotalValue: number;
  Status: string;
  Qtd: number;
  Paid: boolean;
  Rate: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
};

//Get all orders by user id function
export function createOrder(data: {
  productID: any;
  qtd: number;
  totalValue: number;
}) {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  const form = new FormData();
  form.append("userID", state.loggedUser.ID);
  form.append("productID", data.productID);
  form.append("qtd", data.qtd.toString());
  form.append("totalValue", data.totalValue.toString());

  return function (dispatch: any) {
    return api
      .post(`/v1/order`, form, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return Promise.resolve(true);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        return Promise.resolve(false);
      });
  };
}

//Get all orders by user id function
export function getOrdersByUserId() {
  const state: any = store.getState();
  const token = "Bearer " + state.apiToken;
  const user = state.loggedUser;

  return function (dispatch: any) {
    return api
      .get(`/v1/order/user/${user.ID}`, {
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