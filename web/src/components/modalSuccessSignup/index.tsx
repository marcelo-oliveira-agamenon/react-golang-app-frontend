import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { RouteComponentProps } from "react-router-dom";

import { Container } from "./styles";
import Logo from "../../assets/icons/logo.png";

interface props extends RouteComponentProps {
  visible: boolean;
}

const ModalSuccessSignup: React.FC<props> = ({ visible, history }) => {
  const [width, setWidth] = useState<number>(1080);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      visible={visible}
      //width={width - 400}
      centered
      closable={false}
      footer={null}
      bodyStyle={{
        backgroundColor: "#e4f2ff",
        padding: 0,
      }}
    >
      {console.log(width)}
      <Container>
        <div className="main-container">
          <img src={Logo} alt="cash and grab" />
          <div className="content-modal-ant">
            <h1>usuário criado com sucesso!</h1>
            <button onClick={() => history.push("/login")}>
              Acessar conta
            </button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalSuccessSignup;
