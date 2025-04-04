'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Category } from '@/models';
import { LinkCard, Title } from './styles';

//TODO: fix link underline, link image for now
export const CategoryCard = ({ ID, ImageURL, Name }: Category) => (
  <LinkCard>
    <Link href={{ pathname: `/categories/${ID}`, query: { name: Name } }}>
      <Image
        // src={ImageURL}
        src={'https://picsum.photos/200'}
        width={80}
        height={80}
        alt="category"
        priority
      />
      <Title>{Name}</Title>
    </Link>
  </LinkCard>
);
