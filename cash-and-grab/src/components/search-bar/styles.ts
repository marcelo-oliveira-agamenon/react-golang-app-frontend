import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 780px;
  height: 120px;
  background: white;
  border-radius: 10px;
  @media (max-width: 815px) {
    width: 95%;
    min-height: 150px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  border: 1px solid black;
  border-radius: 5px;

  @media (max-width: 815px) {
    width: 90%;
  }
`;

export const TitleSearch = styled.h1`
  font-family: 'Montserrat Regular';
  letter-spacing: 1.7 px;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 460px) {
    padding: 0 15px;
  }
`;

export const InputSearch = styled.input`
  font-family: 'Montserrat Regular';
  outline: none;
  border: none;
  width: 550px;
  padding: 5px 10px;

  @media (max-width: 815px) {
    width: 90%;
  }
`;
