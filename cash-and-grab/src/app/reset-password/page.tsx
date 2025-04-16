'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Spin } from 'antd';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

import { authorization, Input } from '@/components';
import { useAuth } from '@/services';
import { RootState } from '@/store';
import {
  Container,
  Overlay,
  Card,
  Box,
  BtnLogin,
  BoxTitle,
  BoxCancel,
} from './styles';

// TODO: maybe change hash validation?
function ResetPassword() {
  const { sendEmailResetPassword, resetPassword } = useAuth();
  const loading = useSelector((state: RootState) => state.user.loading);
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);

  useEffect(() => {
    const param = location.pathname.slice(15);

    if (param || param.length) {
      setShowChangePassword(true);
    }
  }, [location]);

  const handleSubmit = () => sendEmailResetPassword(email);

  const handleChangePassword = () =>
    resetPassword(email, newPassword, repeatPassword);

  return (
    <Container>
      <Overlay>
        <Card>
          <Image
            src="/icons/logo.png"
            width={200}
            height={200}
            alt="grab and cash"
            priority
          />

          <Box>
            <BoxTitle>Redefina sua senha</BoxTitle>

            <Input
              labelInput="email"
              valueInput={email}
              onChangeValue={e => setEmail(e)}
              required
            />

            {showChangePassword ? (
              <>
                <Input
                  id="new-password"
                  type="password"
                  labelInput="nova senha"
                  valueInput={newPassword}
                  onChangeValue={e => setNewPassword(e)}
                  required
                />

                <Input
                  id="repeat-password"
                  type="password"
                  labelInput="confirme senha"
                  valueInput={repeatPassword}
                  onChangeValue={e => setRepeatPassword(e)}
                  required
                />
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

            <BoxCancel>
              <Link href="/">cancelar</Link>
            </BoxCancel>
          </Box>
        </Card>
      </Overlay>
    </Container>
  );
}

export default authorization(ResetPassword);
