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
    padding-top: 60px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-bottom: 50px;
  }
`;

export const ContSearch = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
`;

export const PromotionComp = styled.div`
  display: flex;
  justify-content: center;

  .component {
    display: flex;
    flex-direction: column;
    width: 1200px;
    height: 200px;
    margin-top: 150px;
    margin-bottom: 30px;

    h1 {
      font-family: "Montserrat SemiBold";
      letter-spacing: 1px;
      font-size: 18px;
      color: white;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .product {
      display: flex;
      background-color: white;
      gap: 17px;
      border-radius: 5px;
      padding: 10px 15px;
    }
  }
`;
