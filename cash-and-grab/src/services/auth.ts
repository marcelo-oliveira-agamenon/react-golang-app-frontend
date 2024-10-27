import { redirect } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { ZodError, z } from 'zod';
import { toast } from 'react-toastify';

import { useLocalStorage } from '@/hooks';
import { saveUser, toggleLoading, toggleModal } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';

const signupSchema = z.object({
  email: z.string().min(1).email('Preencha o email'),
  password: z.string().min(1),
  name: z.string().min(1),
  date: z.string().min(1),
  phone: z.string().min(1),
  gender: z.string().min(1),
  address: z.string().min(1),
  avatar: z.string().min(1),
});

const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

const useAuth = () => {
  const dispatch = useDispatch();
  const { addToLocalStorage, clearLocalStorage } = useLocalStorage();

  const login = async (email: string, password: string) => {
    dispatch(toggleLoading(true));
    try {
      loginSchema.parse({ email, password });
      const response = await api.post('/v1/login', {
        email: email,
        password: password,
      });

      dispatch(saveUser(response.data));
      addToLocalStorage('token', response.data.token);
      redirect('/home');
    } catch (error) {
      if (error instanceof ZodError) {
        return toast.error('Insira o email ou senha corretamente');
      }
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

  const signup = async ({
    email,
    password,
    name,
    date,
    phone,
    gender,
    address,
    file,
    avatar,
  }: {
    email: string;
    password: string;
    name: string;
    date: string;
    phone: string;
    gender: string;
    address: string;
    file: any;
    avatar: string | null;
  }) => {
    const form = new FormData();
    form.set('email', email);
    form.set('password', password);
    form.set('name', name);
    form.set('birthday', date);
    form.set('phone', phone);
    form.set('gender', gender);
    form.set('address', address);
    if (avatar !== '') {
      form.append('avatar', file);
    }

    try {
      signupSchema.parse({});
      const response = await api.post('/v1/signUp', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch(saveUser(response.data));
      dispatch(toggleModal(true));
    } catch (error) {
      if (error instanceof ZodError) {
        return toast.error('Preencha os campos corretamente');
      }
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
