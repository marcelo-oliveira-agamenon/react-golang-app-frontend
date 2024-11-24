'use client';
import Image from 'next/image';
import { FacebookOutlined, MailOutlined } from '@ant-design/icons';

import { useAuth } from '@/services';
import {
  Container,
  Overlay,
  Card,
  Box,
  LoginEmail,
  BoxTitle,
  BtnLabel,
  SignupLink,
  Link,
} from './styles';

export default function PreLogin() {
  const { loginFacebook } = useAuth();

  const responseFacebook = (response: any) => {
    loginFacebook(response.email, response.accessToken);
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
            <Image
              src="/icons/logo.png"
              width={200}
              height={200}
              alt="grab and cash"
              priority
            />
            <BoxTitle>entre em nossa plataforma</BoxTitle>

            {/* <auth
              cssClass="facebook-btn"
              appId={appID}
              textButton="entrar com facebook"
              callback={responseFacebook}
              fields="name,email,picture"
              icon={<FacebookOutlined />}
            /> */}

            <LoginEmail href="/login">
              <MailOutlined />
              <BtnLabel>entrar com email</BtnLabel>
            </LoginEmail>

            <SignupLink>
              não possui cadastro? <Link href="/signup">cadastre-se</Link>
            </SignupLink>
          </Box>
        </Card>
      </Overlay>
    </Container>
  );
}
