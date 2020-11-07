import styled from "styled-components";

export const Container = styled.div`
  .container-list {
    display: flex;
    border-bottom: 1px solid black;
    align-items: center;

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
      h1 {
        font-family: "Montserrat Regular";
        font-size: 20px;
        text-transform: uppercase;
      }

      div {
        display: flex;

        p {
          font-family: "Montserrat Light";
          font-size: 12px;
        }

        span {
          font-family: "Montserrat SemiBold";
          font-size: 18px;
          letter-spacing: 1px;
        }
      }
    }
  }
`;
