import styled from "styled-components";

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;
`;

export const ContSearch = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  h1 {
    font-family: "Montserrat SemiBold";
    text-transform: uppercase;
    font-size: 22px;
    margin-left: 15%;
    color: white;
  }

  .anticon {
    color: white;
    font-size: 100px;
  }

  .container-categories {
    display: grid;
    margin-top: 80px;
    row-gap: 30px;
    column-gap: 50px;
    grid-template-columns: 33% 33% 33%;
    align-self: center;

    .each {
      padding: 26px 9px;
      background-color: white;
      width: fit-content;
      border-radius: 5px;
    }
  }
`;
