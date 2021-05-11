import React, { useState } from 'react';
import { connect } from 'react-redux';
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
import { User, logout } from 'ducks/auth';

import { Container, Avatar as Icon, DrawerMenu } from './styles';
import { RouteComponentProps } from 'react-router-dom';

interface props extends RouteComponentProps {
  logout: (props: any) => void;
  loggedUser: User;
}

function Header(props: props) {
  const [showDrawer, setShow] = useState<boolean>(false);

  return (
    <>
      <DrawerMenu>
        <Drawer
          visible={showDrawer}
          placement="left"
          getContainer={false}
          closable={true}
          closeIcon={false}
          onClose={() => setShow(showDrawer => !showDrawer)}
          width={320}
        >
          <div className="header">
            <div>
              <h1>BEM VINDO, {props.loggedUser.Name}</h1>
              <h1>{props.loggedUser.Email}</h1>
            </div>
            <img src={props.loggedUser.ImageURL} alt="avatar" />
          </div>

          <div className="options">
            <div onClick={() => props.history.push('/home')}>
              <HomeOutlined />
              <h1>home</h1>
            </div>
            <div onClick={() => props.history.push('/orders')}>
              <ShoppingOutlined />
              <h1>pedidos</h1>
            </div>
            <div onClick={() => props.history.push('/cart')}>
              <ShoppingCartOutlined />
              <h1>carrinho</h1>
            </div>
            <div onClick={() => props.history.push('/myProfile')}>
              <UserOutlined />
              <h1>meu perfil</h1>
            </div>
            <div onClick={() => props.history.push('/favorites')}>
              <HeartOutlined />
              <h1>favoritos</h1>
            </div>
            <div onClick={() => props.logout(props)}>
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
          <h1>bem vindo {props.loggedUser.Name}</h1>
          <img src={props.loggedUser.ImageURL} alt="avatar" />
        </Icon>
      </Container>
    </>
  );
}

export default connect(
  (state: { loggedUser: User }) => {
    return {
      loggedUser: state.loggedUser,
    };
  },
  {
    logout,
  },
)(Header);
