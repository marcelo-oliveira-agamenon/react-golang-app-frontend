import React from 'react';
import { Modal } from 'antd';
import { RouteComponentProps } from 'react-router-dom';

import { Container } from './style';
import Logo from '@assets/icons/logo.png';

interface props extends RouteComponentProps {
  visible: boolean;
}

const ModalSuccessSignup: React.FC<props> = ({ visible, history }) => {
  return (
    <Modal
      visible={visible}
      centered
      closable={false}
      footer={null}
      bodyStyle={{
        backgroundColor: '#e4f2ff',
        padding: 0,
      }}
    >
      <Container>
        <div className="main-container">
          <img src={Logo} alt="cash and grab" />
          <div className="content-modal-ant">
            <h1>usuário criado com sucesso!</h1>
            <button onClick={() => history.push('/login')}>
              Acessar conta
            </button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalSuccessSignup;
