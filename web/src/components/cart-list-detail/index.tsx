import React from "react";
import { Product } from "../../ducks/product";
import { DeleteOutlined } from "@ant-design/icons";

import { Container } from "./styles";

interface props {
  product: Product;
  quantity: number;
}

function Cartlistdetail(props: props) {
  const { product, quantity } = props;
  return (
    <Container>
      <div className="container-list">
        <img src={product.Photos[0]} alt="product" />
        <div className="data-list">
          <h1>{product.Name}</h1>
          <div>
            <p>Quantidade: {quantity}</p>
            <span>R$ {product.Value.toFixed(2).replace(".", ",")}</span>
          </div>
        </div>
        <DeleteOutlined />
      </div>
    </Container>
  );
}

export default Cartlistdetail;
