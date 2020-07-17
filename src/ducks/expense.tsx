import axios from "axios";
import envs from "../config";
import { store } from "../store/store";
import { types } from "../store/reducers";

export type Expense = {
  expenseID: string;
  expense_userID: string;
  expense_type: string;
  expense_date: string;
  expense_value: number;
  expense_description: string;
};

//functions
//get a list of expenses per user from the API
export function fetchExpenses(userID: string) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .get(`${envs.API_URL}/expenses/${userID}`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: types.EXPENSE_LIST,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//add a new expense from the API
export function addExpense(
  userID: string,
  formData: {
    type: string;
    date: string;
    value: Number;
    description: string;
  }
) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .post(
        `${envs.API_URL}/expenses/add`,
        {
          userID,
          formData,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//delete a expense from the API
export function deleteExpense(expenseID: string) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .delete(`${envs.API_URL}/expenses/delete/${expenseID}`, {
        data: {
          expenseID: expenseID,
        },
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//update a expense from the API
export function updateExpense(
  expenseID: string,
  formData: {
    type: string;
    date: string;
    value: Number;
    description: string;
  }
) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .put(
        `${envs.API_URL}/expenses/update/${expenseID}`,
        {
          expenseID: expenseID,
          formdata: formData,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
