import React, { useState } from 'react';
import { connect } from 'react-redux';
import { User } from 'ducks/auth';

import { Container, Box, InputContainer } from './styles';
import Header from 'components/header';
import Footer from 'components/footer';
import { RouteComponentProps } from 'react-router-dom';

interface props extends RouteComponentProps {
  loggedUser: User;
}

function MyProfile(props: props) {
  const [name, setName] = useState<string>(props.loggedUser.Name);
  const [email, setEmail] = useState<string>(props.loggedUser.Email);
  const [phone, setPhone] = useState<string>(props.loggedUser.Phone);
  const [pass, setPass] = useState<string>('');
  const [date, setDate] = useState<string>(props.loggedUser.Birthday);
  const [gender, setGender] = useState<string>(props.loggedUser.Gender);
  const [address, setAddress] = useState<string>(props.loggedUser.Address);
  const [avatar, setAvatar] = useState<string>(props.loggedUser.ImageURL);
  const [file, setFile] = useState<any>();

  const handleImage = (event: any): void => {
    if (event.target.files.length > 0) {
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
      <Header {...props} />
      <div className="buffer"></div>
      <h1 className="main-container-h1">meu perfil</h1>

      <Box>
        <div className="card-profile">
          <div className="inputs">
            <InputContainer>
              <label htmlFor="name">nome</label>
              <input
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="email">email</label>
              <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">senha</label>
              <input
                type="password"
                value={pass}
                onChange={event => setPass(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="date">data de nascimento</label>
              <input
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="gender">gênero</label>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={event => setGender(event.target.value)}
              >
                <option value=""></option>
                <option value="masc">Masculino</option>
                <option value="fem">Feminino</option>
              </select>
            </InputContainer>

            <InputContainer>
              <label htmlFor="phone">telefone</label>
              <input
                type="text"
                value={phone}
                onChange={event => setPhone(phoneMask(event.target.value))}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="address">endereço</label>
              <input
                type="text"
                value={address}
                onChange={event => setAddress(event.target.value)}
              />
            </InputContainer>
          </div>

          <div className="avatar-profile">
            <img src={avatar} alt="user profile" />
            <input
              type="file"
              id="fileHandle"
              accept="image/jpg/png/jpeg"
              onChange={e => handleImage(e)}
            />
            <div className="buttons-img-profile">
              <button
                onClick={() => document.getElementById('fileHandle')?.click()}
              >
                adicionar imagem
              </button>
              <button onClick={() => setAvatar('')} className="cancel-btn">
                remover imagem
              </button>
            </div>
          </div>

          <div></div>

          <div className="button-comp">
            <button
              className="cancel-btn"
              onClick={() => props.history.push('/home')}
            >
              cancelar
            </button>
            <button onClick={() => handleSubmit()}>salvar</button>
          </div>
        </div>
      </Box>
      <Footer />
    </Container>
  );
}

export default connect((state: { loggedUser: User }) => {
  return {
    loggedUser: state.loggedUser,
  };
}, null)(MyProfile);
