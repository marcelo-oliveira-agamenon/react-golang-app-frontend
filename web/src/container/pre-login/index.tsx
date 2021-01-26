import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FacebookOutlined, MailOutlined } from "@ant-design/icons";
import FacebookLogin, {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse,
} from "react-facebook-login";

import { Container, Overlay, Card, Box, Btncomp } from "./styles";
import Logo from "../../assets/icons/logo.png";

interface props extends RouteComponentProps<any> {}

function preLogin(props: props) {
  const responseFacebook = (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    props.history.push("/signup", response);
  };

  return (
    <Container>
      <Overlay>
        <Card>
          <img src={Logo} alt="grab and cash" />
          <Box>
            <img src={Logo} alt="grab and cash" />
            <h1>entre em nossa plataforma</h1>

            <FacebookLogin
              cssClass="facebook-btn"
              appId="420103122437966"
              callback={responseFacebook}
              fields="name,email,picture"
              icon={<FacebookOutlined />}
            />

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
