import styled from 'styled-components';

export const SelectCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Montserrat Regular';
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-left: 10px;
  margin-bottom: 10px;

  @media (max-width: 850px) {
    font-size: 14px;
  }

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;

export const Select = styled.select`
  border-radius: 8px;
  height: 30px;
  border: 1px solid #7c7c7c;
  margin-bottom: 20px;
  box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
  border-style: none;
  padding: 0 12px;
  cursor: pointer;

  &:focus {
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
  }

  @media (max-width: 370px) {
    width: 90%;
  }
`;

export const Option = styled.option``;
