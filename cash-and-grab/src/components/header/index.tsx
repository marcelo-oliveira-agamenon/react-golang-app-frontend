import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  MenuOutlined,
  HomeOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Drawer } from 'antd';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import { RootState } from '@/store';
import { useAuth } from '@/services';
import { Container, Avatar as Icon, DrawerMenu } from './styles';

export const Header = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const { logout } = useAuth();
  const [showDrawer, setShow] = useState<boolean>(false);

  return (
    <>
      <DrawerMenu>
        <Drawer
          open={showDrawer}
          placement="left"
          getContainer={false}
          closable={true}
          closeIcon={false}
          onClose={() => setShow(showDrawer => !showDrawer)}
          width={320}
        >
          <div className="header">
            <div>
              <h1>BEM VINDO, {user.Name}</h1>
              <h1>{user.Email}</h1>
            </div>
            <Image
              src={user.ImageURL}
              width={160}
              height={160}
              alt="avatar"
              priority
            />
          </div>

          <div className="options">
            <div onClick={() => router.push('/home')}>
              <HomeOutlined />
              <h1>home</h1>
            </div>
            <div onClick={() => router.push('/orders')}>
              <ShoppingOutlined />
              <h1>pedidos</h1>
            </div>
            <div onClick={() => router.push('/cart')}>
              <ShoppingCartOutlined />
              <h1>carrinho</h1>
            </div>
            <div onClick={() => router.push('/myProfile')}>
              <UserOutlined />
              <h1>meu perfil</h1>
            </div>
            <div onClick={() => router.push('/favorites')}>
              <HeartOutlined />
              <h1>favoritos</h1>
            </div>
            <div onClick={logout}>
              <LogoutOutlined />
              <h1>sair</h1>
            </div>
          </div>
        </Drawer>
      </DrawerMenu>
      <Container>
        <div>
          <MenuOutlined onClick={() => setShow(showDrawer => !showDrawer)} />
        </div>

        <Icon>
          <h1>bem vindo {user.Name}</h1>
          <Image
            src={user.ImageURL}
            width={160}
            height={160}
            alt="avatar"
            priority
          />
        </Icon>
      </Container>
    </>
  );
};
