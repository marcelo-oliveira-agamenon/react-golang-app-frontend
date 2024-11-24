import React from 'react';
import Image from 'next/image';
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { format } from 'date-fns';

import { Container } from './styles';

export const Footer = () => {
  return (
    <Container>
      <div className="icon">
        <Image
          src="/icons/logo.png"
          width={160}
          height={160}
          alt="grab and cash"
          priority
        />
        <h1>
          Copyright © {format(new Date(), 'yyyy')} Grab and cash - Todos os
          direitos reservados
        </h1>
      </div>
      <div className="socials">
        <TwitterOutlined />
        <InstagramOutlined />
        <FacebookOutlined />
      </div>
    </Container>
  );
};
