import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 240px;
  border: 1.5px solid black;
  border-radius: 8px;
  margin-right: 17px;
  align-items: center;

  div {
    gap: 18px;

    h1 {
      color: black;
      font-family: "Montserrat Regular";
      font-size: 14px;
      text-transform: capitalize;
    }
  }

  p {
    font-family: "Montserrat Regular";
    font-size: 11px;
    color: #7c7c7c;
    padding: 0 12px;
    margin-top: 12px;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    height: 50px;
  }

  img {
    width: 200px;
    height: 140px;
    object-fit: fill;
  }
`;
