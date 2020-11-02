import styled from "styled-components";
import Img from "../../assets/image/backgroundImageLogin.jpg";

export const Container = styled.div`
  background: url(${Img});
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

  h1 {
    font-family: "Montserrat SemiBold";
    text-transform: uppercase;
    font-size: 30px;
    padding: 0 60px;
    text-align: center;
    color: white;
    margin-top: 20px;
    font-weight: 200;
    margin-bottom: 60px;
    letter-spacing: 1px;
  }

  p {
    font-family: "Montserrat Regular";
    font-size: 16px;
    margin-top: 32px;
    color: white;
    font-weight: 200;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  span {
    font-family: "Montserrat SemiBold";
    color: #312f92;
    font-weight: 600;
    margin-bottom: 100px;

    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 15px;
    }
  }

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

    h1 {
      font-size: 28px;
      padding: 0 70px;
      margin-top: 40px;
      margin-bottom: 60px;
    }
  }

  @media (max-width: 400px) {
    p {
      padding: 0 30px;
      text-align: center;
    }
  }
`;

export const Inputcomp = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Montserrat Light";
    font-size: 10px;
    margin: 0;
    margin-right: -25px;
    text-transform: uppercase;
  }

  .input-component {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-content: center;

    span {
      margin-bottom: 0;
      margin-left: -10px;
    }

    .show-password {
      display: flex;
      align-items: baseline;

      @media (max-width: 400px) {
        flex-direction: column;
        justify-content: center;

        p {
          padding: 0;
          margin: 0;
          margin-top: -10px;
        }

        span {
          margin-left: 0;
        }
      }
    }
  }

  label {
    font-size: 14px;
    font-family: "Montserrat SemiBold";
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    margin-bottom: 10px;
    margin-left: 15px;
  }

  input[type="email"] {
    padding: 0 12px;
    font-size: 16px;
    outline: none;
    border-style: none;
    font-family: "Montserrat Regular";
    width: 375px;
    height: 35px;
    border-radius: 30px;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
    margin-bottom: 30px;

    @media (max-width: 400px) {
      width: 100%;
    }
  }

  input[type="password"],
  input[type="text"] {
    padding: 0 12px;
    font-size: 16px;
    outline: none;
    border-style: none;
    font-family: "Montserrat Regular";
    width: 375px;
    height: 35px;
    border-radius: 30px;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
    margin-bottom: 15px;

    @media (max-width: 400px) {
      width: 100%;
    }
  }

  input:focus {
    box-shadow: 3px 3px 10px rgb(0, 0, 0, 0.25);
  }

  span {
    font-family: "Montserrat SemiBold";
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-left: 17px;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const BtnLogin = styled.button`
  width: 380px;
  height: 55px;
  border-radius: 18px;
  background-color: #312f92;
  color: white;
  text-transform: uppercase;
  font-family: "Montserrat SemiBold";
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1px;
  border-style: none;
  outline: none;

  :hover {
    box-shadow: 2px 2px 4px rgb(49, 47, 146, 0.6);
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`;
