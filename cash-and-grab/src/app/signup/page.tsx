'use client';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { phoneMask, genderValues, getBase64ImageFromUrl } from '@/util';
import { useAuth } from '@/services';
import { RootState } from '@/store/store';
import ModalSuccess from './modal-signup';
import { Input, Select } from '@/components';
import {
  Container,
  Card,
  ImgContainer,
  BtnCancel,
  Section,
  BtnSubmit,
  BtnContainer,
  ImgSection,
  InputContainer,
  BtnContImage,
} from './styles';

interface facebookData {
  email: string;
  name: string;
  accessToken: string;
  picture: {
    data: {
      height: number;
      width: number;
      url: string;
    };
  };
}

export default function SignUp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const loading = useSelector((state: RootState) => state.user.loading);
  const { signup } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [file, setFile] = useState<any>();

  // useEffect(() => {
  //   if (query !== undefined) {
  //     handleFacebookSignUp(query as any);
  //   }
  // }, [query]);

  const handleFacebookSignUp = (state: facebookData) => {
    setEmail(state.email);
    setName(state.name);
    getBase64ImageFromUrl(state.picture.data.url)
      .then(resp => {
        setFile(resp);
        setAvatar(state.picture.data.url);
      })
      .catch(() => {
        toast.error('Falha ao carregar imagem do Facebook');
      });
  };

  const handleSubmit = () =>
    signup({
      email,
      password,
      name,
      date,
      phone,
      gender,
      address,
      file,
      avatar,
    });

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      let image = URL.createObjectURL(event.target.files[0]);
      setAvatar(image);
    }
  };

  return (
    <Container>
      <Card>
        <ModalSuccess />
        <Section>
          <InputContainer>
            <Input
              labelInput="nome"
              valueInput={name}
              onChangeValue={e => setName(e)}
              required
            />
            <Input
              labelInput="email"
              valueInput={email}
              onChangeValue={e => setEmail(e)}
              type="email"
              required
            />
            <Input
              labelInput="senha"
              valueInput={password}
              onChangeValue={e => setPassword(e)}
              required
            />
            <Input
              labelInput="telefone"
              valueInput={phone}
              maxLength={15}
              onChangeValue={e => setPhone(phoneMask(e))}
              required
            />
            <Input
              labelInput="data de nascimento"
              valueInput={date}
              min={Date()}
              type="date"
              onChangeValue={e => setDate(e)}
              required
            />
            <Select
              options={genderValues}
              labelInput="gênero"
              valueInput={gender}
              onChangeValue={e => setGender(e)}
              required
            />
            <Input
              labelInput="endereço"
              valueInput={address}
              onChangeValue={e => setAddress(e)}
              required
            />
          </InputContainer>
          <ImgContainer>
            <ImgSection>
              <Image
                src={avatar !== '' ? avatar : '/avatar/avataaars.png'}
                width={160}
                height={160}
                alt="avatar"
                priority
              />
              <input
                type="file"
                id="fileHandle"
                accept="image/jpg/png/jpeg"
                onChange={e => handleImage(e)}
                required
              />
            </ImgSection>
            <BtnContImage>
              <BtnSubmit
                onClick={() => document.getElementById('fileHandle')?.click()}
              >
                adicionar imagem
              </BtnSubmit>
              <BtnSubmit className="remove-btn" onClick={() => setAvatar('')}>
                remover imagem
              </BtnSubmit>
            </BtnContImage>
          </ImgContainer>
        </Section>
        <BtnContainer>
          <BtnCancel href="/">cancelar</BtnCancel>
          <BtnSubmit disabled={loading} onClick={handleSubmit}>
            {loading ? (
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 16,
                      color: 'white',
                    }}
                  />
                }
              />
            ) : (
              'cadastrar'
            )}
          </BtnSubmit>
        </BtnContainer>
      </Card>
    </Container>
  );
}
