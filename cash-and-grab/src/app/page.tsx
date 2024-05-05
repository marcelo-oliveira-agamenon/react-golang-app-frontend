'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FacebookOutlined, MailOutlined } from '@ant-design/icons';

import { useAuth } from '@/services/auth';
import { Container, Overlay, Card, Box, Btncomp } from './styles';

export default function PreLogin() {
  const router = useRouter();
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
            <h1>entre em nossa plataforma</h1>

            {/* <auth
              cssClass="facebook-btn"
              appId={appID}
              textButton="entrar com facebook"
              callback={responseFacebook}
              fields="name,email,picture"
              icon={<FacebookOutlined />}
            /> */}

            <Btncomp onClick={() => router.push('/login')}>
              <MailOutlined />
              <h4>entrar com email</h4>
            </Btncomp>

            <p>
              não possui cadastro?{' '}
              <span onClick={() => router.push('/signup')}>cadastre-se</span>
            </p>
          </Box>
        </Card>
      </Overlay>
    </Container>
  );
}
