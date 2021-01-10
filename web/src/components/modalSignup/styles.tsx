import styled from "styled-components";

export const Container = styled.div`
  .ant-modal-body {
    border-radius: 20px;
  }

  .main-container {
    background-color: #e4f2ff;
    display: flex;
    width: 520px;
    height: 200px;
    border: 2px solid black;
    border-radius: 20px;
    align-items: center;

    img {
      width: 160px;
      height: 150px;
      margin-left: 20px;
    }

    .content-modal-ant {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;

      h1 {
        text-align: center;
        font-family: "Montserrat Medium";
        font-size: 22px;
        text-transform: uppercase;
      }

      button {
        width: 280px;
        background-color: #3b3d76;
        color: white;
        font-size: 16px;
        text-transform: uppercase;
        font-family: "Montserrat Medium";
        padding: 2px 0;
        border-radius: 6px;
        outline: none;
        border-style: none;
        cursor: pointer;
      }
    }

    @media (max-width: 550px) {
      /* .main-container {
        flex-direction: column;
        width: fit-content;
        height: auto;
      }

      img {
        display: none;
      }

      .content-modal-ant {
        h1 {
          font-size: 15px;
        }
      } */
    }
  }
`;
