import initialState from "../ducks/state";

export const types = {
  USER_LIST: "userList",
  FETCH_USER: "fetchUser",
  LOGGED_USER: "loggedUser",
  SAVINGS_LIST: "savingsList",
  API_TOKEN: "apiToken",
  EXPENSE_LIST: "expenseList",
  ERROR: "error",
};

function rootReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  if (action.type === types.USER_LIST) {
    return Object.assign({}, state, {
      userList: action.payload.response,
    });
  }
  if (action.type === types.LOGGED_USER) {
    return Object.assign({}, state, {
      loggedUser: action.payload.loggedUser,
    });
  }
  if (action.type === types.SAVINGS_LIST) {
    return Object.assign({}, state, {
      savingsList: action.payload,
    });
  }
  if (action.type === types.EXPENSE_LIST) {
    return Object.assign({}, state, {
      expenseList: action.payload.expenses,
    });
  }
  if (action.type === types.ERROR) {
    return Object.assign({}, state, {
      error: action.payload.response,
    });
  }
  if (action.type === types.API_TOKEN) {
    return Object.assign({}, state, {
      apiToken: action.payload.token,
    });
  }
  if (action.type === types.FETCH_USER) {
    return Object.assign({}, state, {
      fetchUser: action.payload.response,
    });
  }
  return state;
}

export default rootReducer;
