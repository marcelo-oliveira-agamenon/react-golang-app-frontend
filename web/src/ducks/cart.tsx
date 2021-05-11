import { types } from 'store/reducer';
import { store } from 'store/store';
import { Product } from './product';

export type Order = {
  product: Product;
  quantity: number;
};

//save one order in cart
export function saveProductInCart(order: Order) {
  const state: any = store.getState();
  const orders: Array<Order> = state.cart;
  let aux = false;
  orders.forEach(ord => {
    if (ord.product.ID === order.product.ID) {
      ord.quantity = ord.quantity + order.quantity;
      aux = !aux;
    }
  });

  if (aux === false) {
    orders.push(order);
  }

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

  return function () {
    return Promise.resolve(orders);
  };
}

//delete order from cart
export function deleteFromCart(index: number) {
  const state: any = store.getState();
  const orders: Array<Order> = state.cart;

  return function (dispatch: any) {
    let aux = orders.filter((item, value) => {
      return value !== index && item;
    });
    return dispatch({
      type: types.CART,
      payload: aux,
    });
  };
}

//delete all orders from cart
export function deleteAllCartProducts() {
  return function (dispatch: any) {
    return dispatch({
      type: types.CART,
      payload: [],
    });
  };
}
