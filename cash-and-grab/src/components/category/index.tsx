import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Category } from '@/models';
import { Container } from './styles';

export const CategoryCard = ({ ID, ImageURL, Name }: Category) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/categories/${ID}`)}>
      <Image src={ImageURL} width={80} height={80} alt="banner" priority />
      <h1>{Name}</h1>
    </Container>
  );
};
