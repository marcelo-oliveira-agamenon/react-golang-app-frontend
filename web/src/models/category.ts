export type Category = {
  ID: string;
  Name: string;
  ImageURL: string;
  ImageKey: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: {
    Time: string;
    Valid: boolean;
  };
};
