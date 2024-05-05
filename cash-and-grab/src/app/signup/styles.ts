import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 1000px;
  height: 600px;
  margin-top: 40px;
  background-color: white;
  border: 1px solid black;
  box-shadow: -4px 4px 8px rgb(0, 0, 0, 0.17);

  section {
    display: grid;
    padding: 28px 85px;
    grid-template-columns: 50% 50%;
  }

  .btn-main {
    float: right;
    padding: 0 60px;

    button {
      font-family: 'Montserrat Regular';
      letter-spacing: 1px;
      border-radius: 16px;
      background-color: #312f92;
      color: white;
      width: 180px;
      height: 30px;
      cursor: pointer;
      outline: none;
      border: none;
      font-size: 13px;
      text-transform: uppercase;
      margin-right: 30px;

      :hover {
        background-color: #cfcff1;
        color: black;
      }
    }

    .remove-btn {
      background-color: white;
      color: black;
      box-shadow: -2px 2px 3px rgb(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 850px) {
    width: auto;
    height: auto;
    margin: 0;
    margin-bottom: 10px;
    padding: 0 20px;

    section {
      display: flex;
      flex-direction: column-reverse;
      padding: 28px 5%;
      align-items: center;
    }

    .btn-main {
      float: none;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      padding: 0;

      button {
        margin-right: 0;
        margin-bottom: 20px;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 370px) {
    padding: 0 20px;
  }
`;

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: 'Montserrat Regular';
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  input {
    outline: none;
    border-style: none;
    padding: 0 10px;
    border-radius: 8px;
    width: 300px;
    height: 22px;
    border: 1px solid #7c7c7c;
    background-color: #efefef;
    margin-bottom: 20px;

    :focus {
      box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
    }
  }

  select {
    outline: none;
    border-radius: 8px;
    width: 300px;
    height: 23px;
    border: 1px solid #7c7c7c;
    background-color: #efefef;
    margin-bottom: 20px;

    :focus {
      box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 850px) {
    label {
      font-size: 14px;
    }
  }

  @media (max-width: 370px) {
    align-items: center;

    label {
      font-size: 15px;
    }

    input {
      width: 90%;
    }

    select {
      width: 90%;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    padding: 0;

    input {
      display: none;
    }
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    button {
      font-family: 'Montserrat Regular';
      letter-spacing: 1px;
      border-radius: 30px;
      background-color: #312f92;
      color: white;
      width: 128px;
      height: 25px;
      cursor: pointer;
      outline: none;
      border: none;
      font-size: 9px;
      text-transform: uppercase;
      margin-right: 30px;

      :hover {
        background-color: #cfcff1;
        color: black;
      }
    }

    .remove-btn {
      background-color: white;
      color: black;
      box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.25);
    }
  }

  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }

  @media (max-width: 850px) {
    margin-bottom: 30px;

    div {
      button {
        margin: 0;
      }
    }
  }

  @media (max-width: 370px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        margin-bottom: 10px;
      }
    }
  }
`;
