import { useDispatch } from 'react-redux';

import { toggleLoading } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';
import { CreateOrderParams, CreateOrderResponse } from '@/models';

const useOrder = () => {
  const dispatch = useDispatch();

  const createOrder = async (
    data: CreateOrderParams,
  ): Promise<CreateOrderResponse> => {
    dispatch(toggleLoading(true));
    try {
      const form = new FormData();
      form.append('productID', data.productID);
      form.append('qtd', data.qtd.toString());
      form.append('totalValue', data.totalValue.toString());
      const response = await api.post('/v1/product', form);

      dispatch(toggleLoading(false));
      return response.data;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return {} as CreateOrderResponse;
  };

  return { createOrder };
};

export { useOrder };
