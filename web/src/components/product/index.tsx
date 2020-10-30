import React from "react";

import { Container } from "./styles";

interface props {
  product: any;
}

const product: React.FC<props> = ({ product }) => {
  return (
    <Container>
      <img src={product.Photos[0]} alt="product" />
      <div>
        <h1>{product.Name}</h1>
        <h1>R$ {parseFloat(product.Value).toFixed(2).replace(".", ",")}</h1>
      </div>
      <p>{product.Description}</p>
    </Container>
  );
};

export default product;
