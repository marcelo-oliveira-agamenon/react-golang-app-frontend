import styled from "styled-components";

export const Container = styled.div`
  border: 1.5px solid black;
  display: flex;
  justify-content: space-between;
  padding: 15px 38px;

  .title {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      margin-bottom: 8px;

      h4 {
        font-family: "Montserrat Medium";
        font-size: 18px;
        margin: 0;
      }
    }

    .details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      div {
        display: flex;
        align-items: center;

        h2 {
          margin: 0;
          font-family: "Montserrat Light";
        }

        h3 {
          margin: 0;
          font-family: "Montserrat SemiBold";
        }
      }
    }
  }

  .status {
    display: flex;
    flex-direction: column;
    align-items: center;

    h5 {
      margin: 0;
      text-align: center;
      font-family: "Montserrat Medium";
      border-radius: 18px;
      color: white;
      font-family: "Montserrat Medium";
      padding: 5px 15px;
      width: fit-content;
    }

    span {
      text-align: center;
      border-radius: 18px;
      color: white;
      font-family: "Montserrat Medium";
      padding: 3px 15px;
      width: fit-content;
      margin-top: 18px;
      margin-bottom: 22px;
    }

    .paid {
      background-color: #35c14f;
    }

    .pending {
      background-color: #ff0000;
    }

    .PENDENTE {
      background-color: #ff0000;
    }

    .CANCELADO {
    }

    .ENTREGUE {
    }

    .ANDAMENTO {
    }
  }
`;
