import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

import { socialLinks } from '@/util';
import { Container, CopyrightText, ImageContainer, Socials } from './styles';

export const Footer = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/icons/logo.png"
          width={160}
          height={160}
          alt="grab and cash"
          priority
        />
        <CopyrightText>
          Copyright © {format(new Date(), 'yyyy')} Grab and cash - Todos os
          direitos reservados
        </CopyrightText>
      </ImageContainer>
      <Socials>
        {socialLinks.map(social => {
          const IconComponent = social.icon;

          return (
            <Link
              key={social.id}
              href={social.mediaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent />
            </Link>
          );
        })}
      </Socials>
    </Container>
  );
};
