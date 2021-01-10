import { RouteComponentProps } from "react-router-dom";
import api from "../config/axiosConfig";
import { types } from "../store/reducer";
import { store } from "../store/store";

export type Order = {
  ID: string;
  UserID: string;
  ProductID: Array<string>;
  TotalValue: number;
  status: string;
  Qtd: number;
  Paid: boolean;
  Rate: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
};

//Get all orders by user id function
export function getOrdersByUserId(userid: string) {
  return function (dispatch: any) {};
}
