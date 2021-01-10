import styled from "styled-components";

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;

  .buffer {
    width: 100%;
    padding-top: 60px;
  }

  .title-cart {
    margin-top: 60px;
    margin-left: 10%;
    font-family: "Montserrat SemiBold";
    font-size: 28px;
    letter-spacing: 1px;
    color: white;
    text-transform: uppercase;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .box-cart {
    margin-top: 50px;
    width: 1100px;
    min-height: 100px;
    background-color: white;
    border-radius: 8px;

    h2 {
      text-align: center;
      margin-top: 20px;
      font-family: "Montserrat Regular";
      font-size: 28px;
      text-transform: capitalize;
    }
  }

  .product-cart {
    margin-top: 80px;
    width: 1100px;
    height: auto;
    background-color: white;
    border-radius: 8px;
    padding: 30px 60px;

    h1 {
      font-family: "Montserrat Regular";
      font-size: 25px;
      text-transform: capitalize;
      margin-bottom: 80px;
    }
  }

  .product-detail {
    display: flex;

    img {
      width: 220px;
      height: 180px;
      border-radius: 15px;
    }

    h2 {
      font-family: "Montserrat Regular";
      font-size: 20px;
      text-transform: capitalize;
      padding: 0 30px;
    }

    p {
      font-family: "Montserrat Light";
      font-size: 13px;
      text-align: justify;
      padding: 0 30px;
    }

    span {
      font-family: "Montserrat SemiBold";
      font-size: 22px;
      letter-spacing: 1px;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
