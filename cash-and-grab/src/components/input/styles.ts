import styled from 'styled-components';

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const LabelCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  span {
    margin-bottom: 0;
    margin-left: -1px;
  }
`;

export const ShowPassword = styled.div`
  display: flex;
  align-items: baseline;
  color: white;
  text-transform: uppercase;
  gap: 8px;
`;

export const ShowPasswordLabel = styled.p`
  font-family: 'Montserrat Regular';
  font-size: 14px;

  @media (max-width: 400px) {
    padding: 0;
    margin: 0;
    margin-top: -10px;
  }
`;

export const Label = styled.label`
  font-family: 'Montserrat Regular';
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 15px;
  color: white;

  @media (max-width: 850px) {
    font-size: 14px;
  }

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;

export const Input = styled.input`
  padding: 0 12px;
  font-size: 16px;
  outline: none;
  border-style: none;
  font-family: 'Montserrat Regular';
  height: 35px;
  border-radius: 30px;
  box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);

  @media (max-width: 400px) {
    width: 100%;
  }

  &:focus {
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
  }

  @media (max-width: 370px) {
    width: 90%;
  }
`;
