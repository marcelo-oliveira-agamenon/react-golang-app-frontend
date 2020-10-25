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

  img {
    display: none;
  }

  h1 {
    font-family: "Montserrat SemiBold";
    text-transform: uppercase;
    font-size: 39px;
    padding: 0 30px;
    text-align: center;
    color: white;
    margin-top: 20px;
    font-weight: 200;
    margin-bottom: 100px;
  }

  p {
    font-family: "Montserrat Regular";
    font-size: 20px;
    margin-top: 120px;
    color: white;
    font-weight: 200;
    text-transform: capitalize;
  }

  span {
    font-family: "Montserrat SemiBold";
    color: #312f92;
    font-weight: 600;
    cursor: pointer;

    :hover {
      font-size: 20.5px;
      text-decoration: underline;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 35px;
    }

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

    img {
      display: initial;
      width: auto;
      height: 30%;
    }

    h1 {
      font-size: 28px;
      padding: 0 70px;
      margin-top: 40px;
      margin-bottom: 30px;
    }

    p {
      margin-top: 50px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      margin-left: 0;
      margin-right: 0;
      padding: 0;
    }
  }
`;

export const Inputcomp = styled.div`
  label {
    font-family: "Montserrat SemiBold";
    text-transform: uppercase;
    color: white;
  }

  input[type="email"],
  input[type="password"] {
    outline: none;
    border-style: none;
    font-family: "Montserrat Regular";
    width: 300px;
    height: 30px;
    border-radius: 30px;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
  }
`;
