import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 1000px;
  height: 620px;
  margin-top: 40px;
  background-color: white;
  border: 1px solid black;
  box-shadow: -4px 4px 8px rgb(0, 0, 0, 0.17);

  section {
    display: flex;
    padding: 45px 85px;
  }
`;

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: "Montserrat Regular";
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
    width: 290px;
    height: 20px;
    border: 1px solid #7c7c7c;
    background-color: #efefef;
    margin-bottom: 20px;
  }

  select {
    outline: none;
    border-radius: 8px;
    width: 310px;
    height: 23px;
    border: 1px solid #7c7c7c;
    background-color: #efefef;
    margin-bottom: 20px;
  }
`;
