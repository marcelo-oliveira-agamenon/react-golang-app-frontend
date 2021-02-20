import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: white;
  height: 60px;
  width: 100%;
  z-index: 9;

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
    margin-top: 7px;
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 14px;
  }

  @media (max-width: 700px) {
    justify-content: flex-end;

    h1 {
      font-size: 17px;
      width: 80%;
      text-align: end;
      line-height: 1.2;
    }
  }

  @media (max-width: 325px) {
    h1 {
      display: none;
    }
  }
`;

export const DrawerMenu = styled.div`
  .header {
    background-color: #5988ff;
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    padding-left: 12px;

    div {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-family: "Montserrat Medium";
      font-size: 12px;
      color: white;
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin: 0 14px;
    }
  }

  .ant-drawer-body {
    padding: 0;
  }

  .options {
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    margin-top: 30px;

    div {
      display: flex;
      align-items: center;
      font-size: 28px;
      margin-bottom: 30px;
      cursor: pointer;

      h1 {
        font-family: "Montserrat Medium";
        font-size: 20px;
        text-transform: uppercase;
        margin-top: 12px;
        margin-left: 35px;
      }
    }
  }
`;
