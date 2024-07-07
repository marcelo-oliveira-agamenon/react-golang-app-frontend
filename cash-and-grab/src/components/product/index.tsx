import React from 'react';
import { useRouter } from 'next/router';

import { Product } from '@/models';
import { Container } from './styles';

export const ProductCard = ({
  ID,
  Name,
  ProductImage,
  Value,
  Description,
}: Product) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/product/${ID}`)}>
      <img src={ProductImage[0].ImageURL} alt="product" />
      <section>
        <h2>{Name}</h2>
        <h2>R$ {Value.toFixed(2).replace('.', ',')}</h2>
      </section>
      <p>{Description}</p>
    </Container>
  );
};
