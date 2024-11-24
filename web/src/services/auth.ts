import api from 'config/axiosConfig';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { saveUser } from 'store/reducer/user';

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { addToLocalStorage } = useLocalStorage();

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/v1/login', {
        email: email,
        password: password,
      });

      dispatch(saveUser(response.data));
      addToLocalStorage('token', response.data.token);
      navigate('/home');
    } catch (error) {
      const msg = error as string;
      addToast(msg, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return { login };
};

export { useAuth };
