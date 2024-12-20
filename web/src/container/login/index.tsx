import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Checkbox, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { login } from 'ducks/auth';
import { useToasts } from 'react-toast-notifications';
import { useAuth } from 'services/auth';

import { Container, Overlay, Card, Box, Inputcomp, BtnLogin } from './styles';
import Logo from 'assets/icons/logo.png';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToasts();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = (): void => {
    if (email === '' || pass === '') {
      addToast('Preencha os Campos!', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }

    login(email, pass);
    // setLoading(true);
    // login(email, pass)
    //   .then(() => {
    //     props.history.push('/home');
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     addToast(err, {
    //       appearance: 'error',
    //       autoDismiss: true,
    //     });
    //     setPass('');
    //     setLoading(false);
    //   });
  };

  return (
    <Container>
      <Overlay>
        <Card>
          <img src={Logo} alt="grab and cash" />
          <Box>
            <h1>faça login para continuar</h1>
            <Inputcomp>
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Inputcomp>

            <Inputcomp>
              <div className="input-component">
                <label htmlFor="password">password</label>
                <div className="show-password">
                  <Checkbox
                    checked={show}
                    onChange={() => setShow(show => !show)}
                  />
                  <p>exibir senha</p>
                </div>
              </div>
              <input
                id="password"
                type={show ? 'text' : 'password'}
                value={pass}
                onChange={e => setPass(e.target.value)}
                onKeyDown={event => {
                  if (event.key === 'Enter') {
                    handleLogin();
                  }
                }}
              />
              <span onClick={() => navigate('/resetPassword')}>
                esqueceu sua senha?
              </span>
            </Inputcomp>

            <BtnLogin onClick={() => handleLogin()} disabled={loading}>
              {loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 30,
                        color: 'white',
                        marginTop: '10px',
                      }}
                    />
                  }
                />
              ) : (
                'entrar'
              )}
            </BtnLogin>

            <p>
              não possui cadastro?
              <span onClick={() => navigate('/signup')}>cadastre-se</span>
            </p>
          </Box>
        </Card>
      </Overlay>
    </Container>
  );
}

export default connect(null, {
  login,
})(Login);
