import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import {
  sendEmailToResetPassword,
  resetPassword as resetPasswordService,
} from 'ducks/auth';
import { useToasts } from 'react-toast-notifications';
import { RouteComponentProps } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

import { Container, Overlay, Card, Inputcomp, Box, BtnLogin } from './styles';
import Logo from 'assets/icons/logo.png';

interface props extends RouteComponentProps {
  sendEmailToResetPassword: (email: string) => Promise<boolean>;
  resetPasswordService: (data: FormData) => Promise<boolean>;
}

function ResetPassword({
  history,
  sendEmailToResetPassword,
  location,
  resetPasswordService,
}: props) {
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { addToast } = useToasts();

  useEffect(() => {
    const param = location.pathname.slice(15);

    if (param || param.length) {
      setShowChangePassword(true);
    }
  }, [location]);

  const handleSubmit = async () => {
    if (!email) {
      addToast('Preencha o email!', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }

    setLoading(true);

    await sendEmailToResetPassword(email)
      .then(response => {
        if (response) {
          addToast('Código de verificação enviado com sucesso', {
            appearance: 'success',
            autoDismiss: true,
          });

          history.push('/login');
        }

        setLoading(false);
      })
      .catch(() => {
        addToast('Erro ao enviar o código de verificação', {
          appearance: 'error',
          autoDismiss: true,
        });

        setLoading(false);
      });
  };

  const handleChangePassword = async () => {
    if (newPassword !== repeatPassword) {
      addToast('Senhas não coincidem', {
        appearance: 'error',
        autoDismiss: true,
      });

      return;
    }

    if (!newPassword || !repeatPassword) {
      addToast('Preencha os campos', {
        appearance: 'error',
        autoDismiss: true,
      });

      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append('email', email);
    data.append('password', newPassword);
    data.append('reset', repeatPassword);

    await resetPasswordService(data)
      .then(response => {
        if (response) {
          history.push('/login');
        }
      })
      .catch(() => {
        addToast('Erro ao alterar sua senha', {
          appearance: 'error',
          autoDismiss: true,
        });

        setLoading(false);
      });
  };

  return (
    <Container>
      <Overlay>
        <Card>
          <img src={Logo} alt="grab and cash" />

          <Box>
            <h1>Redefina sua senha</h1>

            <Inputcomp>
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Inputcomp>

            {showChangePassword ? (
              <>
                <Inputcomp>
                  <label htmlFor="new-password">nova senha</label>
                  <input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                  />
                </Inputcomp>

                <Inputcomp>
                  <label htmlFor="repeat-password">confirme senha</label>
                  <input
                    id="repeat-password"
                    type="password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                  />
                </Inputcomp>
              </>
            ) : null}

            <BtnLogin
              onClick={() => {
                if (showChangePassword) {
                  handleChangePassword();
                } else {
                  handleSubmit();
                }
              }}
              disabled={loading}
            >
              {loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 30,
                        color: 'white',
                      }}
                    />
                  }
                />
              ) : (
                'redefinir'
              )}
            </BtnLogin>

            <p onClick={() => history.push('/pre-login')}>cancelar</p>
          </Box>
        </Card>
      </Overlay>
    </Container>
  );
}

export default connect(null, {
  sendEmailToResetPassword,
  resetPasswordService,
})(ResetPassword);
