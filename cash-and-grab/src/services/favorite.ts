import { useDispatch } from 'react-redux';

import { toggleLoading } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';
import { Favorite, QueryParamsFavorites } from '@/models';

const useFavorite = () => {
  const dispatch = useDispatch();

  const getFavoriteByUser = async (
    queryParams: QueryParamsFavorites,
  ): Promise<Favorite[]> => {
    dispatch(toggleLoading(true));
    try {
      const params = new URLSearchParams(queryParams);
      const response = await api.get('/v1/favorite', { params });

      dispatch(toggleLoading(false));
      return response.data;
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
    return [];
  };

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

  return { getFavoriteByUser, addProductFavorite, removeProductFavorite };
};

export { useFavorite };
