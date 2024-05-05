import { redirect } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { saveUser, toggleLoading } from '@/store/reducer/user';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util/error-toast-request';

const useAuth = () => {
  const dispatch = useDispatch();
  const { addToLocalStorage, clearLocalStorage } = useLocalStorage();

  const login = async (email: string, password: string) => {
    dispatch(toggleLoading(true));
    try {
      const response = await api.post('/v1/login', {
        email: email,
        password: password,
      });

      dispatch(saveUser(response.data));
      addToLocalStorage('token', response.data.token);
      redirect('/home');
    } catch (error) {
      axiosErrorHandler(error);
    }
    dispatch(toggleLoading(false));
  };

  const loginFacebook = async (email: string, token: string) => {
    try {
      const response = await api.post('/v1/loginWithFacebook', {
        email: email,
        token: token,
      });

      dispatch(saveUser(response.data));
      addToLocalStorage('token', response.data.token);
      redirect('/home');
    } catch (error) {
      axiosErrorHandler(error);
      redirect('/signup');
    }
  };

  const signup = async (form: FormData) => {
    try {
      const response = await api.post('/v1/signUp', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch(saveUser(response.data));
    } catch (error) {
      axiosErrorHandler(error);
    }
  };

  const logout = async () => {
    clearLocalStorage();
    redirect('/');
  };

  return { login, loginFacebook, signup, logout };
};

export { useAuth };
