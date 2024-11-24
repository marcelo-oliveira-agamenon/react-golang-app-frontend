import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  img {
    width: 200px;
    height: 200px;
    border-radius: 18px;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  color: white;
  font-family: 'Montserrat SemiBold';
`;
