import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: white;
  height: 50px;
  width: 100%;

  .anticon {
    margin-left: 15px;
    font-size: 22px;
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-family: "Montserrat Medium";
    font-size: 19px;
    text-transform: uppercase;
    margin-right: 25px;
  }
`;
