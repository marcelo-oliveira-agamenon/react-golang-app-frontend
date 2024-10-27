'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useAuth } from '@/services';
import { RootState } from '@/store/store';
import { Input } from '@/components';
import {
  Container,
  Overlay,
  Card,
  Box,
  BoxInput,
  BtnLogin,
  ForgotPassword,
  TitleBox,
  SignupLink,
  Link,
} from './styles';

export default function Login() {
  const loading = useSelector((state: RootState) => state.user.loading);
  const { login } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => login(email, password);

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
            <TitleBox>faça login para continuar</TitleBox>
            <BoxInput>
              <Input
                labelInput="email"
                type="email"
                id="email"
                valueInput={email}
                onChangeValue={e => setEmail(e)}
                required
              />
              <Input
                children={
                  <ForgotPassword href="/resetPassword">
                    esqueceu sua senha?
                  </ForgotPassword>
                }
                labelInput="password"
                type="password"
                id="password"
                valueInput={password}
                onChangeValue={e => setPassword(e)}
                onKeyDown={event => {
                  if (event.key === 'Enter') {
                    handleLogin();
                  }
                }}
                required
              />
            </BoxInput>
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
            <SignupLink>
              Não possui cadastro?
              <Link href="/signup">Cadastre-se</Link>
            </SignupLink>
          </Box>
        </Card>
      </Overlay>
    </Container>
  );
}
