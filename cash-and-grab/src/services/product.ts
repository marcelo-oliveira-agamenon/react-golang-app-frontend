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

      dispatch(toggleLoading(false));
      return response.data.products;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return [];
  };

  const getProduct = async (productID: string): Promise<Product> => {
    dispatch(toggleLoading(true));
    try {
      const response = await api.get(`/v1/product/${productID}`);

      dispatch(toggleLoading(false));
      return response.data;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return {} as Product;
  };

  const getProductByCategory = async (
    categoryID: string,
  ): Promise<Product[]> => {
    dispatch(toggleLoading(true));
    try {
      const response = await api.get(`/v1/product/category/${categoryID}`);

      dispatch(toggleLoading(false));
      return response.data.products;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return [];
  };

  return { getAllProducts, getProductByCategory, getProduct };
};

export { useProduct };
