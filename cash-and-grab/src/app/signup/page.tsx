import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signup } from 'ducks/auth';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { Container, Card, InputCont, ImgContainer } from './styles';
import ModalSuccess from 'components/modalSignup';
import ImageAvatar from 'assets/avatar/avataaars.png';

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
  const { addToast } = useToasts();
  const { state } = useLocation<facebookData>();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (state !== undefined) {
      handleFacebookSignUp(state);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleFacebookSignUp = (state: facebookData) => {
    setEmail(state.email);
    setName(state.name);
    getBase64ImageFromUrl(state.picture.data.url)
      .then(resp => {
        setFile(resp);
        setAvatar(state.picture.data.url);
      })
      .catch(() => {
        addToast('Falha ao carregar imagem do Facebook', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };

  async function getBase64ImageFromUrl(imageUrl: string) {
    let res = await fetch(imageUrl);
    let blob = await res.blob();

    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          resolve(reader.result);
        },
        false,
      );

      reader.onerror = () => {
        return reject('');
      };
      reader.readAsDataURL(blob);
    });
  }

  const handleSubmit = () => {
    setLoading(true);
    if (
      email === '' ||
      pass === '' ||
      name === '' ||
      date === '' ||
      phone === '' ||
      gender === '' ||
      address === '' ||
      avatar === ''
    ) {
      addToast('Preencha os campos!', {
        appearance: 'error',
        autoDismiss: true,
      });
      setLoading(false);
      return;
    }

    let form = new FormData();
    form.set('email', email);
    form.set('password', pass);
    form.set('name', name);
    form.set('birthday', date);
    form.set('phone', phone);
    form.set('gender', gender);
    form.set('address', address);
    if (avatar !== '') {
      form.append('avatar', file);
    }

    props
      .signup(form)
      .then(() => {
        setLoading(false);
        setShow(true);
      })
      .catch(err => {
        addToast(err, {
          appearance: 'error',
          autoDismiss: true,
        });
        setLoading(false);
      });
  };

  const phoneMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  };

  const handleImage = (event: any) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      let image = URL.createObjectURL(event.target.files[0]);
      setAvatar(image);
    }
  };

  return (
    <Container>
      <Card>
        <ModalSuccess visible={show} {...props} />
        <section>
          <div>
            <InputCont>
              <label htmlFor="name">nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="password">senha</label>
              <input
                id="password"
                type="password"
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="phone">telefone</label>
              <input
                id="phone"
                type="text"
                value={phone}
                maxLength={15}
                onChange={e => setPhone(phoneMask(e.target.value))}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="date">data de nascimento</label>
              <input
                id="date"
                min={Date()}
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </InputCont>

            <InputCont>
              <label htmlFor="gender">gênero</label>
              <select id="gender" onChange={e => setGender(e.target.value)}>
                <option value=""></option>
                <option value="masc">Masculino</option>
                <option value="fem">Feminino</option>
                <option value="other">Outro</option>
              </select>
            </InputCont>

            <InputCont>
              <label htmlFor="address">endereço</label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </InputCont>
          </div>

          <ImgContainer>
            <section>
              <img src={avatar !== '' ? avatar : ImageAvatar} alt="avatar" />
              <input
                type="file"
                id="fileHandle"
                accept="image/jpg/png/jpeg"
                onChange={e => handleImage(e)}
              />
            </section>
            <div>
              <button
                onClick={() => document.getElementById('fileHandle')?.click()}
              >
                adicionar imagem
              </button>
              <button className="remove-btn" onClick={() => setAvatar('')}>
                remover imagem
              </button>
            </div>
          </ImgContainer>
        </section>

        <div className="btn-main">
          <button
            className="remove-btn"
            onClick={() => props.history.push('/prelogin')}
          >
            cancelar
          </button>
          <button disabled={loading} onClick={() => handleSubmit()}>
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
          </button>
        </div>
      </Card>
    </Container>
  );
}
