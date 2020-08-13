import InitialState from "../ducks/state";

export const Types = {
  TOKEN: "token",
  USERLIST: "userlist",
  LOGGEDUSER: "loggedUser",
  ERROR: "error",
};

function rootReducer(
  state = InitialState,
  action: {
    type: string;
    payload: any;
  }
) {
  if (action.type === Types.TOKEN) {
    return Object.assign({}, state, {
      token: action.payload,
    });
  }
  if (action.type === Types.USERLIST) {
    return Object.assign({}, state, {
      userList: action.payload,
    });
  }
  if (action.type === Types.LOGGEDUSER) {
    return Object.assign({}, state, {
      loggedUser: action.payload,
    });
  }
  if (action.type === Types.ERROR) {
    return Object.assign({}, state, {
      error: action.payload,
    });
  }

  return state;
}

export default rootReducer;
