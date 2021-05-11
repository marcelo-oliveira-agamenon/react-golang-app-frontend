import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from '@ducks/product';

import { Container } from './styles';

interface props extends RouteComponentProps<any> {
  product: Product;
}

const product: React.FC<props> = ({ product, history }) => {
  return (
    <Container
      onClick={() =>
        history.push({
          pathname: '/product',
          state: product,
        })
      }
    >
      <img src={product.ProductImage[0].ImageURL} alt="product" />
      <section>
        <h2>{product.Name}</h2>
        <h2>R$ {product.Value.toFixed(2).replace('.', ',')}</h2>
      </section>
      <p>{product.Description}</p>
    </Container>
  );
};

export default product;
