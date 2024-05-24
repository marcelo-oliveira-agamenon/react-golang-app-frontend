import { useDispatch } from 'react-redux';

import { toggleLoading } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';
import { Category } from '@/models';

const useCategory = () => {
  const dispatch = useDispatch();

  const getCategories = async (): Promise<Category[]> => {
    dispatch(toggleLoading(true));
    try {
      const response = await api.get('/v1/category');

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
