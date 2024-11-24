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

export const CardForm = styled.form`
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
  height: 100%;

  @media (max-width: 750px) {
    width: 100%;

    @keyframes intro {
      from {
        margin-left: -3000px;
      }

      to {
        margin-left: 0;
      }
    }
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 40px;
`;

export const TitleBox = styled.h1`
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

export const SignupLink = styled.p`
  font-family: 'Montserrat Light';
  font-size: 10px;
  margin: 0;
  margin-right: -25px;
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
  font-size: 16px;
  margin-top: 25px;
  color: white;
  font-weight: 200;
  letter-spacing: 1px;

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
  margin-top: 60px;

  &:hover {
    transition-duration: 1s;
    box-shadow: 2px 2px 4px rgb(49, 47, 146, 0.6);
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`;

export const Link = styled.a`
  font-family: 'Montserrat SemiBold';
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 6px;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ForgotPassword = styled.a`
  font-family: 'Montserrat SemiBold';
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #312f92;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
