import styled from "styled-components";

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;
`;

export const Banner = styled.div`
  width: 100%;
  height: 280px;

  div {
    width: 100%;
    padding-top: 50px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-bottom: 50px;
  }
`;

export const ContSearch = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export const PromotionComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 200px;
  margin-top: 150px;
  margin-bottom: 250px;

  h1 {
    font-family: "Montserrat SemiBold";
    letter-spacing: 1px;
    font-size: 16px;
    color: white;
    text-transform: uppercase;
  }

  div {
    display: flex;
    background-color: white;
  }
`;
