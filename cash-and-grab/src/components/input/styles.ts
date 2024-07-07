import styled from 'styled-components';

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  label {
    font-family: 'Montserrat Regular';
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-left: 10px;
  }

  input {
    outline: none;
    border-style: none;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid #7c7c7c;
    background-color: #efefef;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
    font-family: 'Montserrat Regular';

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

    input {
      width: 90%;
    }
  }
`;
