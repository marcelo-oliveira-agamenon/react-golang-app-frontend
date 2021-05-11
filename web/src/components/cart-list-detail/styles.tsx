import styled from 'styled-components';

export const Container = styled.div`
  .container-list {
    display: flex;
    border-bottom: 1px solid black;
    align-items: center;
    margin: 30px 70px;
    padding: 0 60px;
    padding-bottom: 25px;

    img {
      width: 85px;
      height: 80px;
      border-radius: 15px;
    }

    span {
      font-size: 30px;
      cursor: pointer;
    }

    .data-list {
      margin-left: 110px;
      margin-right: 340px;

      h1 {
        font-family: 'Montserrat Regular';
        font-size: 20px;
        text-transform: capitalize;
      }

      div {
        display: flex;
        align-items: center;
        min-width: 250px;
        justify-content: space-between;

        p {
          font-family: 'Montserrat Light';
          font-size: 12px;
          margin: 0;
        }

        span {
          font-family: 'Montserrat SemiBold';
          font-size: 18px;
          letter-spacing: 1px;
        }
      }
    }
  }
`;
