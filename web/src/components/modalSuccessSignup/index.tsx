import React from "react";
import { Modal } from "antd";

// import { Container } from './styles';

interface props {
  visible: boolean;
}

const modalSuccessSignup: React.FC<props> = ({ visible }) => {
  return (
    <Modal visible={visible} width={300} centered>
      <h2>Sucesso!</h2>
    </Modal>
  );
};

export default modalSuccessSignup;
