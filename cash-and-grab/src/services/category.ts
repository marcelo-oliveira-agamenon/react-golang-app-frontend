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

      return response.data;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return [];
  };

  return { getCategories };
};

export { useCategory };
