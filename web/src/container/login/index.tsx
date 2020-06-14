import React, { useState } from "react";
import { login } from "../../ducks/auth";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

export interface props {
  login: (username: string, password: string) => Promise<void>;
}

function Login(props: props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          height: "100vh",
          width: "100%",
          backgroundColor: "#7DBEF9",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "350px",
            height: "65vh",
            marginTop: "10vh",
            backgroundColor: "#fff",
            paddingLeft: "1.5vw",
            paddingRight: "1.5vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#E4F2FF",
              paddingTop: "2.5vh",
              paddingBottom: "2.5vh",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "Montserrat",
                    marginBottom: "2vh",
                  }}
                >
                  Usuário
                </h3>
                <input
                  type="text"
                  style={{
                    width: "230px",
                    paddingTop: "1vh",
                    paddingBottom: "1vh",
                    paddingRight: "1vw",
                    paddingLeft: "1vw",
                    borderRadius: 7,
                    borderStyle: "none",
                    outline: "none",
                  }}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "11vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "Montserrat",
                    marginBottom: "2vh",
                  }}
                >
                  Senha
                </h3>
                <input
                  type="password"
                  style={{
                    width: "230px",
                    paddingTop: "1vh",
                    paddingBottom: "1vh",
                    paddingRight: "1vw",
                    paddingLeft: "1vw",
                    borderRadius: 7,
                    borderStyle: "none",
                    outline: "none",
                  }}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onKeyPress={(event) => handleKeyPress(event.key)}
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "12vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  width: "250px",
                  paddingBottom: "1vh",
                  paddingTop: "1vh",
                  borderRadius: 8,
                  borderStyle: "none",
                  outline: "none",
                  fontFamily: "Montserrat",
                  backgroundColor: "#3B3D76",
                  color: "#fff",
                  fontSize: 17,
                  cursor: "pointer",
                }}
                onClick={() => handleSubmit()}
              >
                Entrar
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h4
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 10,
                  cursor: "pointer",
                }}
                onClick={() => handleSignUpClick()}
              >
                Não cadastrado? Crie sua conta aqui
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(null, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(Login);
