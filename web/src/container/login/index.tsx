import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Checkbox } from "antd";

import { Container, Overlay, Card, Box, Inputcomp } from "./styles";
import Logo from "../../assets/icons/logo.png";

interface props extends RouteComponentProps<any> {}

function Login(props: props) {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container>
      <Overlay>
        <Card>
          <img src={Logo} alt="grab and cash" />
          <Box>
            <img src={Logo} alt="grab and cash" />
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
              <label htmlFor="password">password</label>
              <Checkbox
                checked={show}
                onChange={() => setShow((show) => !show)}
              />
              <input
                id="password"
                type={show ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Inputcomp>

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

export default Login;
