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
  animation: intro 1.5s;

  @keyframes intro {
    from {
      transform: rotate(-55deg);
      width: 900px;
      height: 500px;
    }
    to {
      transform: rotate(0deg);
    }
  }

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
    font-size: 42px;
    text-align: center;
    color: white;
    margin-top: 20px;
    font-weight: 200;
    margin-bottom: 100px;
    letter-spacing: 1px;
  }

  p {
    font-family: "Montserrat Regular";
    font-size: 20px;
    margin-top: 120px;
    color: white;
    font-weight: 200;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  span {
    font-family: "Montserrat SemiBold";
    color: #312f92;
    font-weight: 600;
    cursor: pointer;

    :hover {
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

export const Btncomp = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  height: 56px;
  width: 320px;
  margin: 8px 0;
  align-items: center;
  border-radius: 22px;
  box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
  cursor: pointer;

  @media (max-width: 400px) {
    width: 90%;
  }

  :hover {
    animation: hover 3s;
  }

  @keyframes hover {
    from {
      margin-left: 15px;
    }
  }

  h4 {
    font-family: "Montserrat Regular";
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
    margin-top: 6px;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  path {
    color: black;
  }
`;
