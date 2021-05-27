import { RouteComponentProps } from 'react-router-dom';
import api from 'config/axiosConfig';
import { types } from 'store/reducer';
import { store } from 'store/store';

export type User = {
  Address: string;
  ImageURL: string;
  ImageKey: string;
  Birthday: string;
  CreatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
  Email: string;
  FacebookID: string;
  Gender: string;
  ID: string;
  Name: string;
  Password: string;
  Phone: string;
  UpdatedAt: string;
};

//Login function
export function login(email: string, password: string) {
  return async function (dispatch: any) {
    return await api
      .post(`/v1/login`, {
        email: email,
        password: password,
      })
      .then(response => {
        dispatch({
          type: types.API_TOKEN,
          payload: response.data.token,
        });
        dispatch({
          type: types.LOGGED_USER,
          payload: response.data.user,
        });
        return Promise.resolve<boolean>(true);
      })
      .catch(error => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        let msg =
          error.response.data === 'Wrong password'
            ? 'Senha incorreta'
            : error.response.data === 'No user with this email'
            ? 'Nenhum usuário com este email'
            : 'Erro inesperado!';
        return Promise.reject<string>(msg);
      });
  };
}

//LoginWithFacebook function
export function loginFacebook(email: string, token: string) {
  return async function (dispatch: any) {
    return await api
      .post(`/v1/loginWithFacebook`, {
        email: email,
        token: token,
      })
      .then(response => {
        dispatch({
          type: types.API_TOKEN,
          payload: response.data.token,
        });
        dispatch({
          type: types.LOGGED_USER,
          payload: response.data.user,
        });
        return Promise.resolve<boolean>(true);
      })
      .catch(error => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        let msg =
          error.response.data === 'Invalid token'
            ? 'Token expirado para login com Facebook'
            : error.response.data === 'No user with this email'
            ? 'Nenhum usuário com este email'
            : 'Erro inesperado!';
        return Promise.reject<string>(msg);
      });
  };
}

//Add user in the api without token
export function signup(form: FormData) {
  return async function (dispatch: any) {
    return await api
      .post(`/v1/signUp`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        return Promise.resolve(true);
      })
      .catch(error => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        return Promise.reject(error.response.data);
      });
  };
}

//Remove token and user logged, redirect to login screen
export function logout(props: RouteComponentProps) {
  return function (dispatch: any) {
    props.history.push('/prelogin');
    return dispatch({
      type: types.LOGOUT,
      payload: '',
    });
  };
}

//Verify if a user is logged in
export function verifyLoggedUser(): User {
  const data: any = store.getState();
  const main: User = data.loggedUser;

  return main;
}

//Send email to reset password
export function sendEmailToResetPassword(email: string) {
  return async function (dispatch: any) {
    return await api
      .post(
        `/v1/resetPasswordLink`,
        {},
        {
          params: {
            email,
          },
        },
      )
      .then(() => {
        return Promise.resolve(true);
      })
      .catch(error => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        return Promise.reject(error.response.data);
      });
  };
}

//Reset password
export function resetPassword(data: FormData) {
  return async function (dispatch: any) {
    return await api
      .patch(`/v1/resetPassword`, data)
      .then(() => {
        return Promise.resolve(true);
      })
      .catch(error => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
        return Promise.reject(error.response.data);
      });
  };
}
