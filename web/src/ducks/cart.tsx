import { types } from "../store/reducer";
import { store } from "../store/store";
import { Product } from "./product";

export type Order = {
  product: Product;
  quantity: number;
};

//save one order in cart
export function saveProductInCart(order: Order) {
  const state: any = store.getState();
  const orders: Array<Order> = state.cart;
  orders.push(order);
  return function (dispatch: any) {
    return dispatch({
      type: types.CART,
      payload: orders,
    });
  };
}

//get all orders in cart
export function getAllOrderInCart() {
  const state: any = store.getState();
  const orders: Array<Order> = state.cart;
  return function (dispatch: any) {
    return Promise.resolve(orders);
  };
}
