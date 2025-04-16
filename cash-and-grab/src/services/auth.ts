import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { ZodError, z } from 'zod';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';

import { useLocalStorage } from '@/hooks';
import { saveUser, toggleLoading, toggleModal, cleanUser } from '@/store';
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
  email: z.string().min(1).email('Preencha o email'),
  password: z.string().min(1),
});

const resetPasswordSchema = z
  .object({
    email: z.string().min(1).email('Preencha o email'),
    newPassword: z.string().min(3),
    repeatPassword: z.string().min(3),
    hash: z.string().min(1),
  })
  .refine(data => data.newPassword === data.repeatPassword, {
    message: 'Senhas não coincidem',
    path: ['repeatPassword'],
  });

const resetPasswordLinkSchema = z.object({
  email: z.string().min(1).email('Preencha o email'),
});

const useAuth = () => {
  const router = useRouter();
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

      dispatch(saveUser(response.data.user));
      addToLocalStorage('token', response.data.token);
      router.push('/home');
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

      dispatch(saveUser(response.data.user));
      addToLocalStorage('token', response.data.token);
      router.push('/home');
    } catch (error) {
      axiosErrorHandler(error);
      router.push('/signup');
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
    try {
      const data = {
        email,
        password,
        name,
        date,
        phone,
        gender,
        address,
        avatar,
      };
      signupSchema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        return toast.error('Preencha os campos corretamente');
      }
    }

    const form = new FormData();
    form.set('email', email);
    form.set('password', password);
    form.set('name', name);
    form.set('birthday', format(parseISO(date), 'dd/MM/yyyy'));
    form.set('phone', phone.replace('-', '').replaceAll(' ', ''));
    form.set('gender', gender);
    form.set('address', address);
    if (avatar !== '') {
      form.append('avatar', file);
    }

    try {
      const response = await api.post('/v1/signUp', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch(saveUser(response.data));
      dispatch(toggleModal(true));
    } catch (error) {
      axiosErrorHandler(error);
    }
  };

  const sendEmailResetPassword = async (email: string) => {
    try {
      const data = {
        email,
      };
      resetPasswordLinkSchema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        return toast.error('Preencha o email');
      }
    }

    dispatch(toggleLoading(true));
    try {
      const response = await api.post(
        '/v1/resetPasswordLink',
        {},
        {
          params: {
            email,
          },
        },
      );

      if (response) {
        toast.success('Código de verificação enviado com sucesso');
        router.push('/home');
      }
    } catch (error) {
      axiosErrorHandler(error);
      toast.error('Erro ao enviar o código de verificação');
    }
    dispatch(toggleLoading(false));
  };

  const resetPassword = async (
    email: string,
    newPassword: string,
    repeatPassword: string,
  ) => {
    try {
      const data = {
        email,
        newPassword,
        repeatPassword,
        hash: '',
      };
      resetPasswordSchema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        return toast.error('Preencha os campos corretamente');
      }
    }

    dispatch(toggleLoading(true));

    const form = new FormData();
    form.set('email', email);
    form.set('password', newPassword);
    form.set('reset', repeatPassword);

    try {
      const response = await api.patch('/v1/resetPassword', form);

      if (response) {
        toast.success('Senha alterada com sucesso');
        router.push('/login');
      }
    } catch (error) {
      axiosErrorHandler(error);
      toast.error('Erro ao alterar sua senha');
    }
    dispatch(toggleLoading(false));
  };

  const logout = async () => {
    try {
      await api.post('/v1/logout');
      clearLocalStorage();
      dispatch(cleanUser());
      router.push('/');
    } catch (error) {
      axiosErrorHandler(error);
    }
  };

  return {
    login,
    loginFacebook,
    signup,
    sendEmailResetPassword,
    resetPassword,
    logout,
  };
};

export { useAuth };
