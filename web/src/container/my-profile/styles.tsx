import styled from "styled-components";

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;

  .buffer {
    width: 100%;
    padding-top: 60px;
  }

  .main-container-h1 {
    margin-top: 80px;
    margin-bottom: 80px;
    margin-left: 18%;
    font-family: "Montserrat SemiBold";
    font-size: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;

  .card-profile {
    display: grid;
    grid-template-rows: 1fr, 3fr;
    grid-template-columns: 1fr 1fr;
    padding: 40px 60px;
    width: 800px;
    height: auto;
    background-color: white;
    border-radius: 8px;

    .inputs {
      width: 100%;
    }
  }

  .avatar-profile {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 50px;

    input {
      display: none;
    }

    img {
      margin-top: 20px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    .buttons-img-profile {
      margin-top: 40px;

      button {
        outline: none;
        border-style: none;
        cursor: pointer;
        font-family: "Montserrat Medium";
        font-size: 10px;
        padding: 5px 7px;
        margin-right: 8px;
        border-radius: 15px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: white;
        background-color: #312f92;
      }

      .cancel-btn {
        color: black;
        background-color: white;
        box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.25);
      }
    }
  }

  .button-comp {
    margin-top: 50px;
    gap: 5px;

    button {
      width: 160px;
      margin-right: 10px;
      border-radius: 10px;
      outline: none;
      border-style: none;
      cursor: pointer;
      padding: 4px 0;
      font-family: "Montserrat Medium";
      font-size: 13px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: white;
      background-color: #312f92;
    }

    .cancel-btn {
      color: black;
      background-color: white;
      box-shadow: -2px 2px 6px rgb(0, 0, 0, 0.25);
    }
  }
`;

export const InputContainer = styled.div`
  input {
    width: 100%;
    background-color: #efefef;
    border: 1.5px solid #7c7c7c;
    border-radius: 8px;
    margin-top: 7px;
    margin-bottom: 20px;
    padding: 0 10px;
  }

  select {
    width: 100%;
    background-color: #efefef;
    border: 1.5px solid #7c7c7c;
    border-radius: 8px;
    margin-top: 7px;
    margin-bottom: 20px;
    padding: 0 10px;
  }

  label {
    font-family: "Montserrat Regular";
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-left: 15px;
  }
`;
