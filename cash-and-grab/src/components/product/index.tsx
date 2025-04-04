'use client';
import React from 'react';
import Image from 'next/image';

import { Product } from '@/models';
import { Link, Section, SubTitle, Title } from './styles';
import { formatToCurrency } from '@/util';

export const ProductCard = ({
  ID,
  Name,
  ProductImage,
  Value,
  Description,
}: Product) => (
  <Link href={`/products/${ID}`}>
    <Image
      src={
        ProductImage.length ? ProductImage[0].ImageURL : '/avatar/avataaars.png'
      }
      width={80}
      height={80}
      alt="product"
      priority
    />
    <Section>
      <Title>{Name}</Title>
      <Title>{formatToCurrency(Value, 'pt-BR', 'BRL')}</Title>
    </Section>
    <SubTitle>{Description}</SubTitle>
  </Link>
);
