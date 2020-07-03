import React, { useState } from "react";
import { login } from "../../ducks/auth";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  MainContainer,
  SecondContainer,
  ThirdContainer,
  TitleContainer,
  UserContainer,
  Username,
  Input,
  TitleSecContainer,
  Password,
  PasswordTitle,
  EnterContainer,
  EnterButton,
  SignupContainer,
  SignupButton,
  MainTitleContainer,
  TitleMain,
} from "./styles";

export interface props {
  login: (username: string, password: string) => Promise<void>;
}

function Login(props: props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  function handleSubmit() {
    if (username === "" || password === "") {
      return;
    }
    props.login(username, password).then((response) => {
      if (response !== undefined) {
        history.push("/dashboard");
      }
    });
  }

  function handleSignUpClick() {
    history.push("/signup");
  }

  function handleKeyPress(key: string) {
    if (key === "Enter") {
      handleSubmit();
    }
    return;
  }

  return (
    <>
      <MainContainer>
        <MainTitleContainer>
          <TitleMain>Bem vindo a nossa Plataforma!</TitleMain>
        </MainTitleContainer>
        <SecondContainer>
          <ThirdContainer>
            <TitleContainer>
              <UserContainer>
                <Username>Usuário</Username>
                <Input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </UserContainer>
            </TitleContainer>
            <TitleSecContainer>
              <Password>
                <PasswordTitle>Senha</PasswordTitle>
                <Input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onKeyPress={(event) => handleKeyPress(event.key)}
                />
              </Password>
            </TitleSecContainer>
            <EnterContainer>
              <EnterButton onClick={() => handleSubmit()}>Entrar</EnterButton>
            </EnterContainer>
            <SignupContainer>
              <SignupButton onClick={() => handleSignUpClick()}>
                Não cadastrado? Crie sua conta aqui
              </SignupButton>
            </SignupContainer>
          </ThirdContainer>
        </SecondContainer>
      </MainContainer>
    </>
  );
}

export default connect(null, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(Login);
