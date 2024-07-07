import styled from 'styled-components';

export const SelectCont = styled.div`
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

  select {
    outline: none;
    border-radius: 8px;
    width: 300px;
    height: 23px;
    border: 1px solid #7c7c7c;
    background-color: #efefef;
    margin-bottom: 20px;

    &:focus {
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

    select {
      width: 90%;
    }
  }
`;