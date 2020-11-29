import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Category } from "../../ducks/category";

import { Container } from "./styles";
import image from "../../assets/image/banner_home.jpg";

interface props extends RouteComponentProps<any> {
  data: Category;
}

const category: React.FC<props> = ({ data, history }) => {
  return (
    <Container
      onClick={() =>
        history.push({
          pathname: "/categories",
          state: {
            categoryID: data.ID,
            name: data.Name,
          },
        })
      }
    >
      <img src={image} alt="banner" />
      <h1>{data.Name}</h1>
    </Container>
  );
};

export default category;
