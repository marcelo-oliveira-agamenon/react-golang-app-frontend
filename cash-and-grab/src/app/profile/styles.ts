import styled from 'styled-components';

export const Buffer = styled.div`
  width: 100%;
  padding-top: 60px;
`;

export const PageTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: 10%;
  font-family: 'Montserrat SemiBold';
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;

  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  position: initial;
  height: auto;
  overflow-y: hidden;
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 18px;

  label {
    color: black;
  }
`;

export const CardProfile = styled.div`
  display: grid;
  grid-template-rows: 1fr, 3fr;
  grid-template-columns: 1fr 1fr;
  padding: 40px 60px;
  width: 60%;
  height: auto;
  background-color: white;
  border-radius: 8px;

  @media (max-width: 1150px) {
    padding: 40px 30px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 100%;
  }

  @media (max-width: 700px) {
    width: 75%;
  }
`;

export const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 50px;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const AvatarBoxImg = styled.img`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const AvatarBoxInput = styled.input`
  display: none;
`;

export const AvatarBoxBtnImgProfile = styled.div`
  margin-top: 40px;

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
`;

export const AvatarBoxBtnAdd = styled.button`
  outline: none;
  border-style: none;
  cursor: pointer;
  font-family: 'Montserrat Medium';
  font-size: 10px;
  padding: 5px 7px;
  margin-right: 8px;
  border-radius: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  background-color: #312f92;
`;

export const AvatarBoxBtnRemove = styled(AvatarBoxBtnAdd)`
  color: black;
  background-color: white;
  box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.25);
`;

export const ButtonComponent = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  gap: 5px;

  @media (max-width: 620px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ButtonComponentSubmit = styled.button`
  width: 160px;
  margin-right: 10px;
  border-radius: 10px;
  outline: none;
  border-style: none;
  cursor: pointer;
  padding: 4px 0;
  font-family: 'Montserrat Medium';
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  background-color: #312f92;
`;

export const ButtonComponentCancel = styled(ButtonComponentSubmit)`
  color: black;
  background-color: white;
  box-shadow: -2px 2px 6px rgb(0, 0, 0, 0.25);
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;
