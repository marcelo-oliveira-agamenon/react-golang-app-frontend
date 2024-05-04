import api from 'config/axiosConfig';

async function login(email: string, password: string) {
  try {
    const response = await api.post('/v1/login', {
      email: email,
      password: password,
    });
  } catch (error) {
    console.log('aaa ');
  }
}

export { login };
