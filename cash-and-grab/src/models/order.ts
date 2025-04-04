import { Product } from './product';

export type Order = {
  product: Product;
  quantity: number;
};

export type CreateOrderParams = {
  productID: string;
  qtd: number;
  totalValue: number;
};

export type CreateOrderResponse = {
  ID: string;
  Userid: string;
  ProductID: Array<string>;
  TotalValue: number;
  Status: string;
  Qtd: number;
  Paid: boolean;
  Rate: number;
};
