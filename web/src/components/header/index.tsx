import React from "react";
import { Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";

import { Container, Avatar as Icon } from "./styles";

const header: React.FC = () => {
  return (
    <Container>
      <div>
        <MenuOutlined />
      </div>

      <Icon>
        <h1>bem vindo usuário</h1>
        <Avatar size={64} icon={<UserOutlined />} />
      </Icon>
    </Container>
  );
};

export default header;
