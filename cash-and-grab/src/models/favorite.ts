export type Favorite = {
  ID: string;
  UserID: string;
  ProductID: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
};

export type QueryParamsFavorites = {
  limit: string;
  offset: string;
};
