import { useDispatch } from 'react-redux';

import { toggleLoading } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';
import { Product } from '@/models';

const useProduct = () => {
  const dispatch = useDispatch();

  const getAllProducts = async (): Promise<Product[]> => {
    dispatch(toggleLoading(true));
    try {
      const response = await api.get('/v1/product');

      return response.data;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return [];
  };

  return { getAllProducts };
};

export { useProduct };
