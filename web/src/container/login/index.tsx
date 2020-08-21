import React, { useState } from "react";
import { login } from "../../ducks/auth";
import { connect } from "react-redux";
import { MainContainer, SecondContainer, InputContainer, EnterContainer } from "./styles";
import { RouteComponentProps } from "react-router-dom";

export interface props extends RouteComponentProps<any> {
  login: (username: string, password: string) => Promise<void>;
}

function Login(props: props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit() {
    if (username === "" || password === "") {
      return;
    }
    props.login(username, password).then((response) => {
      if (response !== undefined) {
        props.history.push("/dashboard");
      }
    });
  }

  function handleSignUpClick() {
    props.history.push("/signup");
  }

  function handleKeyPress(key: string) {
    if (key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <>
      <MainContainer>
        <SecondContainer>
          <h1>Bem vindo a nossa Plataforma!</h1>
          <div>
            <div>
              <InputContainer>
                <label>Usuário</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
              </InputContainer>
            </div>
            <div>
              <InputContainer>
                <label>Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onKeyPress={(event) => handleKeyPress(event.key)}
                />
              </InputContainer>
            </div>
            <EnterContainer>
              <button onClick={() => handleSubmit()}>Entrar</button>
            </EnterContainer>
            <EnterContainer>
              <h4 onClick={() => handleSignUpClick()}>Não cadastrado? Crie sua conta aqui</h4>
            </EnterContainer>
          </div>
        </SecondContainer>
      </MainContainer>
    </>
  );
}

export default connect(null, (dispatch: any) => ({
  login: (username: string, password: string) => dispatch(login(username, password)),
}))(Login);
