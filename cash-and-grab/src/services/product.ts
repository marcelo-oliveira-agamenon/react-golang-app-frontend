import { useDispatch } from 'react-redux';

import { toggleLoading } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';
import { Product, QueryParamsProducts } from '@/models';

const useProduct = () => {
  const dispatch = useDispatch();

  const getAllProducts = async (
    queryParams: QueryParamsProducts,
  ): Promise<Product[]> => {
    dispatch(toggleLoading(true));
    try {
      const params = new URLSearchParams(queryParams);
      const response = await api.get('/v1/product', {
        params,
      });

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
