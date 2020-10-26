import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { Checkbox, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { login } from "../../ducks/auth";

import { Container, Overlay, Card, Box, Inputcomp, BtnLogin } from "./styles";
import Logo from "../../assets/icons/logo.png";

interface props extends RouteComponentProps<any> {
  login: (email: string, password: string) => Promise<any>;
}

function Login(props: props) {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setLoading(true);
    props
      .login(email, pass)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  };

  return (
    <Container>
      <Overlay>
        <Card>
          <img src={Logo} alt="grab and cash" />
          <Box>
            <h1>faça login para continuar</h1>
            <Inputcomp>
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Inputcomp>

            <Inputcomp>
              <div>
                <label htmlFor="password">password</label>
                <div>
                  <p>exibir senha</p>
                  <Checkbox
                    checked={show}
                    onChange={() => setShow((show) => !show)}
                  />
                </div>
              </div>
              <input
                id="password"
                type={show ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <span>esqueceu sua senha?</span>
            </Inputcomp>

            <BtnLogin onClick={() => handleLogin()} disabled={loading}>
              {loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined style={{ fontSize: 30, color: "white" }} />
                  }
                />
              ) : (
                "entrar"
              )}
            </BtnLogin>

            <p>
              não possui cadastro?{" "}
              <span onClick={() => props.history.push("/signup")}>
                cadastre-se
              </span>
            </p>
          </Box>
        </Card>
      </Overlay>
    </Container>
  );
}

export default connect(null, {
  login,
})(Login);
