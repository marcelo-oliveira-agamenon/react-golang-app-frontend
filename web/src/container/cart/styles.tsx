import styled from 'styled-components';

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
    font-family: 'Montserrat SemiBold';
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 1100px;
    min-height: 100px;
    background-color: white;
    border-radius: 8px;

    @media (max-width: 1120px) {
      width: 98%;
    }

    h2 {
      text-align: center;
      margin-top: 20px;
      font-family: 'Montserrat Regular';
      font-size: 28px;
      text-transform: capitalize;
    }

    h3 {
      text-align: center;
      margin-top: 20px;
      font-family: 'Montserrat Regular';
      font-size: 15px;
      text-transform: uppercase;
      margin-top: 80px;
      color: blue;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }
  }

  .coupon {
    width: 82%;
    background-color: #efefef;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;

    @media (max-width: 1020px) {
      width: 100%;
      padding: 15px 1%;
      gap: 15px;
      margin-top: 20px;
      flex-direction: column;
      height: fit-content;
    }

    input[type='text'] {
      border-style: none;
      padding: 2px 12px;
      width: 200px;
      margin-right: 20px;
      outline: none;
    }

    .anticon {
      font-size: 20px;
      cursor: pointer;

      :hover {
        transform: scale(1.1);
      }
    }

    h4 {
      font-family: 'Montserrat Regular';
      text-transform: capitalize;
      font-size: 18px;
      margin: 0;
    }
  }

  .btn-cart {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding: 0 100px;
    margin-bottom: 30px;

    @media (max-width: 1020px) {
      flex-direction: column-reverse;
      padding: 0;
      gap: 25px;
    }

    button {
      padding: 10px 25px;
      border-radius: 8px;
      background-color: white;
      border: 2px solid black;
      font-size: 18px;
      text-transform: uppercase;
      cursor: pointer;

      .anticon {
        margin-right: 20px;
        font-size: 20px;
      }
    }

    p {
      margin: 0;
      text-transform: capitalize;
      cursor: pointer;
      font-size: 16px;

      :hover {
        text-decoration: underline;
      }
    }
  }

  .subtotal {
    display: flex;
    justify-content: space-between;
    padding: 8px 15px;
    align-items: center;
    background-color: #efefef;
    min-width: 280px;
    min-height: 30px;
    margin-top: 30px;

    @media (max-width: 1020px) {
      margin-top: 50px;
      width: fit-content;
    }

    p {
      margin: 0;
      font-family: 'Montserrat Regular';
      font-size: 18px;
    }

    span {
      font-family: 'Montserrat Bold';
    }
  }
`;
