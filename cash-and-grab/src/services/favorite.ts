import { useDispatch } from 'react-redux';

import { toggleLoading } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';

const useFavorite = () => {
  const dispatch = useDispatch();

  const addProductFavorite = async (productID: string): Promise<void> => {
    dispatch(toggleLoading(true));
    try {
      await api.post(`/v1/favorite/${productID}`);
      dispatch(toggleLoading(false));
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
  };

  const removeProductFavorite = async (productID: string): Promise<void> => {
    dispatch(toggleLoading(true));
    try {
      await api.delete(`/v1/favorite/${productID}`);
      dispatch(toggleLoading(false));
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
  };

  return { addProductFavorite, removeProductFavorite };
};

export { useFavorite };
