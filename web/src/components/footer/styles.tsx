import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
  width: 100%;
  height: 280px;
  background-color: white;

  img {
    width: 300px;
    height: 300px;
    object-fit: fill;
  }

  h1 {
    align-self: center;
    width: 500px;
    text-align: center;
    font-family: "Montserrat Regular";
    font-size: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    gap: 18px;

    .anticon {
      font-size: 60px;
      cursor: pointer;
    }
  }
`;
