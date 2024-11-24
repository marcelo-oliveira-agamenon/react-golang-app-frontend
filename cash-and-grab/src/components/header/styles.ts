import styled from 'styled-components';

export const HeaderIcon = styled.div`
  background-color: #5988ff;
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  padding-left: 12px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 14px;
  }
`;

export const HeaderTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Montserrat Medium';
  font-size: 12px;
  color: white;
`;

export const DrawerMenu = styled.div`
  .ant-drawer-body {
    padding: 0;
  }
`;

export const DrawerOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  margin-top: 30px;
  gap: 12px;
`;

export const LinkOption = styled.a`
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-bottom: 30px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const LinkOptionTitle = styled.h1`
  font-family: 'Montserrat Medium';
  font-size: 20px;
  text-transform: uppercase;
  margin-left: 35px;
`;

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

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 14px;
  }

  @media (max-width: 700px) {
    justify-content: flex-end;
  }
`;

export const AvatarTitle = styled.h1`
  font-family: 'Montserrat Medium';
  font-size: 19px;
  text-transform: uppercase;
  margin-top: 7px;

  @media (max-width: 700px) {
    font-size: 17px;
    width: 80%;
    text-align: end;
    line-height: 1.2;
  }

  @media (max-width: 325px) {
    display: none;
  }
`;
