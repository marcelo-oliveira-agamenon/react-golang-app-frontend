import { Types } from "../store/reducer";

export function login(username: string, password: string) {
  return function (dispatch: any) {
    dispatch({
      type: Types.USER,
      payload: {
        username: username,
        password: password,
      },
    });
    console.log(username, password);
  };
}
