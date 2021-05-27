import { types } from 'store/reducer';
import api from 'config/axiosConfig';

//Get all orders by user id function
export function verifyCouponVality(hash: string) {
  return async function (dispatch: any) {
    return await api
      .get(`/v1/coupon`, {
        params: {
          hash,
        },
      })
      .then(response => {
        return Promise.resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
