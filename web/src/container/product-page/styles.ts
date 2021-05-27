import styled from 'styled-components';

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;

  .buffer {
    width: 100%;
    padding-top: 60px;
  }

  .ant-breadcrumb {
    margin: 40px 0;
    margin-left: 12%;
  }

  .ant-breadcrumb-link {
    font-size: 20px;
    color: white;
    text-transform: uppercase;
    font-family: 'Montserrat SemiBold';
    cursor: pointer;
  }

  .ant-breadcrumb-separator {
    color: white;
    font-size: 22px;
  }
`;

export const BoxProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1120px) {
    padding: 0 8px;
  }

  .container-product {
    width: 1100px;
    height: auto;
    background-color: white;
    border-radius: 8px;
    margin-top: 30px;
    padding: 40px 70px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 40px;
    }

    .data-text {
      .ant-rate {
        color: black;
        margin-bottom: 30px;
      }

      h1 {
        font-family: 'Montserrat Regular';
        font-size: 25px;
        text-transform: capitalize;
      }

      h2 {
        font-family: 'Montserrat Bold';
        font-size: 25px;
        text-transform: uppercase;
        color: red;
        margin-top: 30px;
      }

      p {
        font-family: 'Montserrat Light';
        font-size: 12px;
        margin: 0;
        margin-bottom: 30px;
      }

      .price {
        display: flex;
        justify-content: space-between;

        span {
          font-family: 'Montserrat Bold';
          font-size: 22px;
          letter-spacing: 1px;
        }

        button {
          font-family: 'Montserrat Medium';
          font-size: 9px;
          padding: 6px 15px;
          color: white;
          background-color: #35c14f;
          text-transform: uppercase;
          outline: none;
          border-style: none;
          border-radius: 18px;
        }
      }

      .selector-qtd {
        display: flex;
        margin-top: 20px;
        align-items: center;

        h1 {
          margin: 0;
          font-size: 13px;
          font-family: 'Montserrat Medium';
          margin-right: 30px;
        }
      }
    }

    .btn-imagem {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 768px) {
        margin-bottom: 20px;
      }

      div {
        display: flex;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 10px;
        margin-top: 10px;

        .anticon {
          margin-top: 8px;
          margin-right: 20px;
        }

        h1 {
          font-family: 'Montserrat Light';
          font-size: 18px;
        }
      }
    }

    .details-class {
      border: 1px solid black;
      padding: 5px 60px;
      margin-top: 120px;

      @media (max-width: 768px) {
        margin-top: 80px;
        padding: 5px 25px;
      }

      h1 {
        margin-top: 5px;
        font-family: 'Montserrat Light';
        font-size: 18px;
        text-transform: capitalize;
      }

      p {
        font-family: 'Montserrat Light';
        font-size: 13px;
        text-align: justify;
      }
    }

    .data-img-product {
      display: grid;
      grid-template-columns: 50% 50%;

      @media (max-width: 1120px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      img {
        margin-bottom: 10px;
        width: 400px;
        height: 300px;

        @media (max-width: 768px) {
          width: 100%;
          margin-bottom: 25px;
        }
      }
    }

    .buy-button {
      display: flex;
      align-items: center;
      justify-content: start;
      border: 1px solid black;
      background-color: white;
      margin-top: 60px;
      width: 300px;
      height: 55px;
      border-radius: 8px;
      font-family: 'Montserrat Regular';
      font-size: 22px;
      text-transform: uppercase;
      cursor: pointer;

      @media (max-width: 620px) {
        width: 100%;
        justify-content: space-evenly;

        .anticon {
          margin-left: 0;
          margin-right: 0;
        }
      }

      .anticon {
        font-size: 25px;
        margin-left: 22px;
        margin-right: 58px;
      }
    }
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 620px) {
    padding: 0 8px;
  }

  .component {
    display: flex;
    flex-direction: column;
    width: 1200px;
    height: 200px;
    margin-top: 150px;
    margin-bottom: 100px;

    h1 {
      font-family: 'Montserrat SemiBold';
      letter-spacing: 1px;
      font-size: 18px;
      color: white;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .product-comp {
      display: flex;
      background-color: white;
      gap: 17px;
      border-radius: 5px;
      padding: 10px 15px;

      .anticon {
        color: #312f92;
        font-size: 45px;
      }
    }
  }
`;
