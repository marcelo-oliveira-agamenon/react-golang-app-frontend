import styled from "styled-components";
import ImageLogin from "../../assets/image/backgroundImageLogin.jpg";

export const MainContainer = styled.div`
  display: flex;
  align-self: center;
  height: 100vh;
  width: 100%;
  background-image: url(${ImageLogin});
  justify-content: center;
  flex-direction: column;
`;

export const SecondContainer = styled.div`
  width: 350px;
  height: 65vh;
  margin-top: 7vh;
  background-color: #7dbef9;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  align-self: center;
`;

export const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e4f2ff;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  margin-top: 3vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Username = styled.h3`
  margin: 0;
  font-family: Montserrat;
  margin-bottom: 2vh;
  margin-left: 0.5vw;
  font-size: 15px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 230px;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 7px;
  border-style: none;
  outline: none;
`;

export const TitleSecContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 11vh;
`;

export const Password = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PasswordTitle = styled.h3`
  margin: 0;
  font-family: Montserrat;
  margin-bottom: 2vh;
  margin-left: 0.5vw;
  font-size: 15px;
  text-transform: uppercase;
`;

export const EnterContainer = styled.div`
  margin-top: 12vh;
  display: flex;
  justify-content: center;
`;

export const EnterButton = styled.button`
  width: 270px;
  padding-bottom: 1vh;
  padding-top: 1vh;
  border-radius: 8px;
  border-style: none;
  outline: none;
  font-family: Montserrat;
  background-color: #3b3d76;
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignupButton = styled.h4`
  font-family: Montserrat;
  font-size: 10px;
  cursor: pointer;
`;

export const MainTitleContainer = styled.div`
  align-self: center;
  background-color: #7dbef9;
  padding: 10px 8px;
  margin-top: -6vh;
  border-radius: 6px;
`;

export const TitleMain = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-family: Montserrat;
  letter-spacing: 3px;
`;
