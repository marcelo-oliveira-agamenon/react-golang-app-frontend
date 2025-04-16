import styled from 'styled-components';

export const Container = styled.div`
  background: url('/image/backgroundImageLogin.jpg');
  width: 100vw;
  height: 100vh;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  width: 1100px;
  height: 590px;
  background-color: white;
  box-shadow: -4px 4px 10px rgb(0, 0, 0, 0.25);

  img {
    margin-top: 50px;
    padding: 0 30px;
    width: 450px;
    height: 450px;
  }

  @media (max-width: 1000px) {
    img {
      width: 350px;
      height: 350px;
      padding: 0;
    }
  }

  @media (max-width: 750px) {
    height: 100vh;

    img {
      display: none;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-direction: column;
  background-color: #7dbef9;
  width: 80%;
  height: 100%;
  padding: 0 10px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const BoxTitle = styled.h1`
  font-family: 'Montserrat SemiBold';
  text-transform: uppercase;
  font-size: 30px;
  padding: 0 60px;
  text-align: center;
  color: white;
  margin-top: 20px;
  font-weight: 200;
  margin-bottom: 60px;
  letter-spacing: 1px;

  @media (max-width: 750px) {
    font-size: 28px;
    padding: 0 70px;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

export const BoxCancel = styled.h1`
  font-family: 'Montserrat Regular';
  font-size: 16px;
  margin-top: 32px;
  color: white;
  font-weight: 200;
  text-transform: capitalize;
  letter-spacing: 1px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    font-size: 15px;
  }

  @media (max-width: 400px) {
    padding: 0 30px;
    text-align: center;
  }
`;

export const BtnLogin = styled.button`
  width: 380px;
  height: 55px;
  border-radius: 18px;
  background-color: #312f92;
  color: white;
  text-transform: uppercase;
  font-family: 'Montserrat SemiBold';
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1px;
  border-style: none;
  outline: none;
  margin-top: 50px;

  :hover {
    box-shadow: 2px 2px 4px rgb(49, 47, 146, 0.6);
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`;
