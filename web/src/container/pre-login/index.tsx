import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FacebookOutlined, MailOutlined } from "@ant-design/icons";

import { Container, Overlay, Card, Box, Btncomp } from "./styles";
import Logo from "../../assets/icons/logo.png";

interface props extends RouteComponentProps<any> {}

function preLogin(props: props) {
  return (
    <Container>
      <Overlay>
        <Card>
          <img src={Logo} alt="grab and cash" />
          <Box>
            <img src={Logo} alt="grab and cash" />
            <h1>entre em nossa plataforma</h1>
            <Btncomp>
              <FacebookOutlined />
              <h4>entrar com facebook</h4>
            </Btncomp>
            <Btncomp onClick={() => props.history.push("/login")}>
              <MailOutlined />
              <h4>entrar com email</h4>
            </Btncomp>
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

export default preLogin;
