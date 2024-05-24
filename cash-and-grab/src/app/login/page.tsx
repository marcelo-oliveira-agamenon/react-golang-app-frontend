'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ZodError, z } from 'zod';
import { Checkbox, Spin } from 'antd';
import { toast } from 'react-toastify';
import { LoadingOutlined } from '@ant-design/icons';

import { useAuth } from '@/services';
import { RootState } from '@/store/store';
import { Input } from '@/components';
import { Container, Overlay, Card, Box, Inputcomp, BtnLogin } from './styles';

const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export default function Login() {
  const router = useRouter();
  const loading = useSelector((state: RootState) => state.user.loading);
  const { login } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  const handleLogin = () => {
    try {
      loginSchema.parse({ email, password });
      login(email, password);
    } catch (error) {
      if (error instanceof ZodError) {
        toast.error('Insira o email ou senha corretamente');
      }
    }
  };

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
            <h1>faça login para continuar</h1>
            <Input
              labelInput="email"
              type="email"
              valueInput={email}
              onChangeValue={e => setEmail(e)}
              required
            />

            <Inputcomp>
              <div className="input-component">
                <label htmlFor="password">Senha</label>
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
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
                onKeyDown={event => {
                  if (event.key === 'Enter') {
                    handleLogin();
                  }
                }}
              />
              <span onClick={() => router.push('/resetPassword')}>
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
              Não possui cadastro?
              <span onClick={() => router.push('/signup')}>Cadastre-se</span>
            </p>
          </Box>
        </Card>
      </Overlay>
    </Container>
  );
}
