import React from "react";
import { connect } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";

import { Container, Avatar as Icon } from "./styles";

const header: React.FC = (props: any) => {
  return (
    <Container>
      <div>
        <MenuOutlined />
      </div>

      <Icon>
        <h1>bem vindo {props.loggedUser.Name}</h1>
        <img src={props.loggedUser.Avatar} alt="avatar" />
      </Icon>
    </Container>
  );
};

export default connect((state: { loggedUser: {} }) => {
  return {
    loggedUser: state.loggedUser,
  };
}, null)(header);
