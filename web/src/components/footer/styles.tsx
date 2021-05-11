import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22vh;
  width: 100%;
  height: 280px;
  background-color: white;

  .icon {
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
      width: 300px;
      height: 300px;
      object-fit: fill;
    }

    h1 {
      align-self: center;
      width: 500px;
      text-align: center;
      font-family: 'Montserrat Regular';
      font-size: 22px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    gap: 18px;

    .anticon {
      font-size: 60px;
      cursor: pointer;
    }
  }

  @media (max-width: 1050px) {
    .socials {
      flex-direction: column;
    }
  }

  @media (max-width: 1050px) {
    .icon {
      align-items: center;

      img {
        width: 200px;
        height: 200px;
      }
    }
  }

  @media (max-width: 870px) {
    .icon {
      flex-direction: column;
      justify-content: flex-start;

      img {
        width: 140px;
        height: 140px;
      }

      h1 {
        width: auto;
        font-size: 18px;
        padding: 0 15px;
      }
    }
  }
`;
