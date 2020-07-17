import InitialState from "../ducks/state";

export const Types = {
  USER: "user",
};

function rootReducer(
  state = InitialState,
  action: {
    type: String;
    payload: any;
  }
) {
  if (action.type === Types.USER) {
    return Object.assign({}, state, {
      user: action.payload,
    });
  }
  return state;
}

export default rootReducer;
