import React, { useState } from 'react';
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
import {
  Container,
  Avatar,
  AvatarTitle,
  HeaderIcon,
  HeaderTitle,
  HeaderTitleDiv,
  DrawerMenu,
  DrawerOptions,
  LinkOption,
  LinkOptionTitle,
} from './styles';

export const Header = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const { logout } = useAuth();
  const [showDrawer, setShow] = useState<boolean>(false);
  const aa = useSelector((state: RootState) => state);
  console.log('ww ', aa);

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
          <HeaderIcon>
            <HeaderTitleDiv>
              <HeaderTitle>BEM VINDO, {user.Name}</HeaderTitle>
              <HeaderTitle>{user.Email}</HeaderTitle>
            </HeaderTitleDiv>
            <Image
              src={user.ImageURL ? user.ImageURL : '/avatar/avataaars.png'}
              width={160}
              height={160}
              alt="avatar"
              priority
            />
          </HeaderIcon>

          <DrawerOptions>
            <LinkOption href="/home">
              <HomeOutlined />
              <LinkOptionTitle>home</LinkOptionTitle>
            </LinkOption>
            <LinkOption href="/orders">
              <ShoppingOutlined />
              <LinkOptionTitle>pedidos</LinkOptionTitle>
            </LinkOption>
            <LinkOption href="/cart">
              <ShoppingCartOutlined />
              <LinkOptionTitle>carrinho</LinkOptionTitle>
            </LinkOption>
            <LinkOption href="/myProfile">
              <UserOutlined />
              <LinkOptionTitle>meu perfil</LinkOptionTitle>
            </LinkOption>
            <LinkOption href="/favorites">
              <HeartOutlined />
              <LinkOptionTitle>favoritos</LinkOptionTitle>
            </LinkOption>
            <LinkOption href="#" role="button" onClick={logout}>
              <LogoutOutlined />
              <LinkOptionTitle>sair</LinkOptionTitle>
            </LinkOption>
          </DrawerOptions>
        </Drawer>
      </DrawerMenu>
      <Container>
        <MenuOutlined onClick={() => setShow(showDrawer => !showDrawer)} />

        <Avatar>
          <AvatarTitle>bem vindo {user.Name}</AvatarTitle>
          <Image
            src={user.ImageURL ? user.ImageURL : '/avatar/avataaars.png'}
            width={160}
            height={160}
            alt="avatar"
            priority
          />
        </Avatar>
      </Container>
    </>
  );
};
