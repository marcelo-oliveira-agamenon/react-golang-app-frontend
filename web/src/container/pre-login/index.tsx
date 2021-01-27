import React from "react";
import { connect } from "react-redux";
import { loginFacebook } from "../../ducks/auth";
import { RouteComponentProps } from "react-router-dom";
import { FacebookOutlined, MailOutlined } from "@ant-design/icons";
import FacebookLogin, {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse,
} from "react-facebook-login";
import { useToasts } from "react-toast-notifications";

import { Container, Overlay, Card, Box, Btncomp } from "./styles";
import Logo from "../../assets/icons/logo.png";

interface props extends RouteComponentProps<any> {
  loginFacebook: (email: string, token: string) => Promise<any>;
}

function PreLogin(props: props) {
  let appID = process.env.REACT_APP_FACEBOOK_ID as string;
  const { addToast } = useToasts();

  const responseFacebook = (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse | any
  ) => {
    console.log("dasd", response);
    props
      .loginFacebook(response.email, response.accessToken)
      .then((resp) => {
        if (resp) {
          props.history.push("/home");
        } else {
          props.history.push("/signup", response);
        }
      })
      .catch((err) => {
        addToast(err, {
          appearance: "error",
          autoDismiss: true,
        });
      });
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
              appId={appID}
              textButton="entrar com facebook"
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

export default connect(null, {
  loginFacebook,
})(PreLogin);
