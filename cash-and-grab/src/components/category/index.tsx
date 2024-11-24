'use client';
import React from 'react';
import Image from 'next/image';

import { Category } from '@/models';
import { Link, Title } from './styles';

export const CategoryCard = ({ ID, ImageURL, Name }: Category) => (
  <Link href={`/categories/${ID}`}>
    <Image src={ImageURL} width={80} height={80} alt="category" priority />
    <Title>{Name}</Title>
  </Link>
);
