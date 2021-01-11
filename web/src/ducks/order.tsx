import api from "../config/axiosConfig";
import { types } from "../store/reducer";
import { store } from "../store/store";

export type Order = {
  ID: string;
  UserID: string;
  ProductID: Array<string>;
  TotalValue: number;
  status: string;
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
export function createOrder(data: object) {}

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
