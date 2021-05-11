import React from 'react';
import { Modal } from 'antd';
import { RouteComponentProps } from 'react-router-dom';

import { Container } from './style';
import Logo from 'assets/icons/logo.png';

interface props extends RouteComponentProps {
  visible: boolean;
}

const modalCart: React.FC<props> = ({ visible, history }) => {
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
        <img src={Logo} alt="cash and grab" />

        <div>
          <h1>Parabéns! seu pedido nº 3 está sendo processado!</h1>

          <button onClick={() => history.push('/orders')}>
            acompanhar pedido
          </button>

          <p onClick={() => history.push('/home')}>continue comprando</p>
        </div>
      </Container>
    </Modal>
  );
};

export default modalCart;
