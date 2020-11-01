import initialState from "../ducks/state";

export enum types {
  LOGGED_USER = "loggedUser",
  API_TOKEN = "apiToken",
  ERROR = "error",
  LOGOUT = "logout",
}

function rootReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  if (action.type === types.LOGGED_USER) {
    return Object.assign({}, state, {
      loggedUser: action.payload,
    });
  }
  if (action.type === types.API_TOKEN) {
    return Object.assign({}, state, {
      apiToken: action.payload,
    });
  }
  if (action.type === types.LOGOUT) {
    return Object.assign({}, state, {
      loggedUser: "",
      apiToken: "",
    });
  }
  if (action.type === types.ERROR) {
    return Object.assign({}, state, {
      error: action.payload,
    });
  }
  return state;
}

export default rootReducer;
