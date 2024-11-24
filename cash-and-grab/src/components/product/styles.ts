import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 240px;
  border: 1.5px solid black;
  border-radius: 8px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  img {
    width: 200px;
    height: 140px;
    object-fit: fill;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 18px;
  margin-top: 8px;
`;

export const Title = styled.h2`
  color: black;
  font-family: 'Montserrat Regular';
  font-size: 14px;
  text-transform: capitalize;
`;

export const SubTitle = styled.p`
  font-family: 'Montserrat Regular';
  font-size: 11px;
  color: #7c7c7c;
  padding: 0 12px;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  height: 50px;
`;
