'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Modal } from 'antd';

import { Container } from './styles';

interface ModalSuccessProps {
  visible: boolean;
}

const ModalSuccessSignup: React.FC<ModalSuccessProps> = ({ visible }) => {
  const router = useRouter();

  return (
    <Modal
      open={visible}
      centered
      closable={false}
      footer={null}
      styles={{
        body: {
          backgroundColor: '#e4f2ff',
          padding: 0,
        },
      }}
    >
      <Container>
        <div className="main-container">
          <Image
            src="/icons/logo.png"
            width={100}
            height={100}
            alt="grab and cash"
            priority
          />
          <div className="content-modal-ant">
            <h1>usuário criado com sucesso!</h1>
            <button onClick={() => router.push('/login')}>Acessar conta</button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalSuccessSignup;
