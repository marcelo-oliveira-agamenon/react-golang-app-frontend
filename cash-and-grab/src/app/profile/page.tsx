'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { Header, Footer, authorization, Input, Select } from '@/components';
import { RootState } from '@/store';
import { genderValues } from '@/util';
import {
  Container,
  Box,
  Buffer,
  PageTitle,
  CardProfile,
  AvatarBox,
  AvatarBoxImg,
  AvatarBoxInput,
  AvatarBoxBtnImgProfile,
  ButtonComponent,
  Inputs,
  AvatarBoxBtnAdd,
  AvatarBoxBtnRemove,
  ButtonComponentCancel,
  ButtonComponentSubmit,
} from './styles';

function Profile() {
  const { user } = useSelector((state: RootState) => state.user);
  const [name, setName] = useState<string>(user.Name);
  const [email, setEmail] = useState<string>(user.Email);
  const [phone, setPhone] = useState<string>(user.Phone);
  const [pass, setPass] = useState<string>('');
  const [date, setDate] = useState<string>(user.Birthday);
  const [gender, setGender] = useState<string>(user.Gender);
  const [address, setAddress] = useState<string>(user.Address);
  const [avatar, setAvatar] = useState<string>(user.ImageURL);
  const [file, setFile] = useState<any>();

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      let image = URL.createObjectURL(event.target.files[0]);
      setAvatar(image);
    }
  };

  const phoneMask = (value: string): string => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  };

  const handleSubmit = () => {
    console.log(file);
  };

  return (
    <Container>
      <Header />
      <Buffer />
      <PageTitle>meu perfil</PageTitle>

      <Box>
        <CardProfile>
          <Inputs>
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
              valueInput={pass}
              onChangeValue={e => setPass(e)}
              required
            />
            <Input
              labelInput="data de nascimento"
              valueInput={date}
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
            <Input
              labelInput="telefone"
              valueInput={phone}
              maxLength={14}
              onChangeValue={e => setPhone(phoneMask(e))}
              required
            />
          </Inputs>

          <AvatarBox>
            <AvatarBoxImg src={avatar} alt="user profile" />
            <AvatarBoxInput
              type="file"
              id="fileHandle"
              accept="image/jpg/png/jpeg"
              onChange={e => handleImage(e)}
            />
            <AvatarBoxBtnImgProfile>
              <AvatarBoxBtnAdd
                onClick={() => document.getElementById('fileHandle')?.click()}
              >
                adicionar imagem
              </AvatarBoxBtnAdd>
              <AvatarBoxBtnRemove onClick={() => setAvatar('')}>
                remover imagem
              </AvatarBoxBtnRemove>
            </AvatarBoxBtnImgProfile>
          </AvatarBox>

          <div></div>

          <ButtonComponent>
            <Link href="/home">
              <ButtonComponentCancel>cancelar</ButtonComponentCancel>
            </Link>
            <ButtonComponentSubmit onClick={() => handleSubmit()}>
              salvar
            </ButtonComponentSubmit>
          </ButtonComponent>
        </CardProfile>
      </Box>
      <Footer />
    </Container>
  );
}

export default authorization(Profile);
