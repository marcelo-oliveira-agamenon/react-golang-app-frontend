import React from "react";
import { Category } from "../../ducks/category";

import { Container } from "./styles";
import image from "../../assets/image/banner_home.jpg";

interface props {
  data: Category;
}

const category: React.FC<props> = ({ data }) => {
  return (
    <Container>
      <img src={image} alt="banner" />
      <h1>{data.Name}</h1>
    </Container>
  );
};

export default category;
