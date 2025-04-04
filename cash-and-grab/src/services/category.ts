import { useDispatch } from 'react-redux';

import { toggleLoading } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';
import { Category, QueryParamsCategories } from '@/models';

const useCategory = () => {
  const dispatch = useDispatch();

  const getCategories = async (
    queryParams: QueryParamsCategories,
  ): Promise<Category[]> => {
    dispatch(toggleLoading(true));
    try {
      const params = new URLSearchParams(queryParams);
      const response = await api.get('/v1/category', { params });

      dispatch(toggleLoading(false));
      return response.data;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return [];
  };

  const getCategory = async (categoryID: string): Promise<Category> => {
    dispatch(toggleLoading(true));
    try {
      const response = await api.get(`/v1/category/${categoryID}`);

      dispatch(toggleLoading(false));
      return response.data;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return {} as Category;
  };

  return { getCategories, getCategory };
};

export { useCategory };
