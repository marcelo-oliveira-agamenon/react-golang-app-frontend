'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { toggleModal } from '@/store/reducer/user';
import {
  Container,
  ImageContainer,
  BtnContainer,
  ButtonSuccess,
  Message,
} from './styles';

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
        <ImageContainer>
          <Image
            src="/icons/logo.png"
            width={100}
            height={100}
            alt="grab and cash"
            priority
          />
          <BtnContainer>
            <Message>usuário criado com sucesso!</Message>
            <ButtonSuccess onClick={handleClick}>Acessar conta</ButtonSuccess>
          </BtnContainer>
        </ImageContainer>
      </Container>
    </Modal>
  );
};

export default ModalSuccessSignup;
