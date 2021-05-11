import React from 'react';
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { format } from 'date-fns';

import { Container } from './styles';
import Logo from '@assets/icons/logo.png';

const footer: React.FC = () => {
  return (
    <Container>
      <div className="icon">
        <img src={Logo} alt="cash and grab" />
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

export default footer;
