import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 22px;
  border-radius: 18px;
  border: 2px solid black;

  img {
    width: 150px;
    height: 150px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }

  button {
    width: fit-content;
    margin: 30px 0;
    background-color: #3b3d76;
    color: white;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Montserrat Medium';
    padding: 4px 32px;
    border-radius: 6px;
    outline: none;
    border-style: none;
    cursor: pointer;
  }

  p {
    font-family: 'Montserrat Medium';
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  h1 {
    text-align: center;
    font-family: 'Montserrat Medium';
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1;
  }
`;
