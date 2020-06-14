import initialState from "../ducks/state";

export enum types {
  LOGGED_USER = "loggedUser",
  USER_LIST = "userList",
  USERNAME_LIST = "usernameList",
  USER = "user",
  PRODUCT_LIST = "productList",
  API_TOKEN = "apiToken",
  ERROR = "error",
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
  if (action.type === types.USER) {
    return Object.assign({}, state, {
      user: action.payload,
    });
  }
  if (action.type === types.USER_LIST) {
    return Object.assign({}, state, {
      userList: action.payload,
    });
  }
  if (action.type === types.USERNAME_LIST) {
    return Object.assign({}, state, {
      usernameList: action.payload,
    });
  }
  if (action.type === types.PRODUCT_LIST) {
    return Object.assign({}, state, {
      productList: action.payload,
    });
  }
  if (action.type === types.API_TOKEN) {
    return Object.assign({}, state, {
      apiToken: action.payload,
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
