import api from 'config/axiosConfig';
import { useNavigate } from 'react-router-dom';

async function login(email: string, password: string) {
  const navigate = useNavigate();

  try {
    const response = await api.post('/v1/login', {
      email: email,
      password: password,
    });

    navigate('/');
  } catch (error) {
    console.log('aaa ');
  }
}

export { login };
