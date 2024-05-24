'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { toggleModal } from '@/store/reducer/user';
import { Container } from './styles';

const ModalSuccessSignup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const showModal = useSelector((state: RootState) => state.user.showModal);

  const handleClick = () => {
    dispatch(toggleModal(false));
    router.push('/login');
  };

  return (
    <Modal
      open={showModal}
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
            <button onClick={handleClick}>Acessar conta</button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalSuccessSignup;
