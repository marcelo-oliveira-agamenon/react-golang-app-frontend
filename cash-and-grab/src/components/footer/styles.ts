import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22vh;
  width: 100%;
  height: 280px;
  background-color: white;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  img {
    width: 300px;
    height: 300px;
    object-fit: fill;
  }

  @media (max-width: 1050px) {
    align-items: center;

    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 870px) {
    flex-direction: column;
    justify-content: flex-start;

    img {
      width: 140px;
      height: 140px;
    }
  }
`;

export const CopyrightText = styled.h1`
  align-self: center;
  width: 500px;
  text-align: center;
  font-family: 'Montserrat Regular';
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 870px) {
    width: auto;
    font-size: 18px;
    padding: 0 15px;
  }
`;

export const Socials = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  gap: 18px;

  .anticon {
    font-size: 60px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 25px;

    .anticon {
      font-size: 40px;
    }
  }
`;
