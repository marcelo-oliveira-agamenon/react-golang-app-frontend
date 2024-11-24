import { Category } from './category';

export type ProductImage = {
  ID: string;
  Productid: string;
  ImageURL: string;
  ImageKey: string;
  CreatedAt: string;
  UpdatedAt: string;
};

export type Product = {
  ID: string;
  Name: string;
  Categoryid: number;
  Category: Category;
  Value: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
  Description: string;
  Discount: number;
  HasPromotion: boolean;
  HasShipping: boolean;
  ProductImage: Array<ProductImage>;
  ShippingPrice: number;
  StockQtd: number;
  TecnicalDetails: string;
  Typeunit: string;
};

export type QueryParamsProducts = {
  limit: string;
  offset: string;
  category?: string;
  promotion?: string;
  name?: string;
  recent?: string;
};
