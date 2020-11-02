import React from "react";
import { Breadcrumb } from "antd";
import { Product } from "../../ducks/product";
import { RouteComponentProps, useLocation } from "react-router-dom";

import { Container, BoxProduct } from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";

interface props extends RouteComponentProps<any> {}

function Productpage(props: props) {
  const { state } = useLocation<Product>();

  return (
    <Container>
      <Header {...props} />
      <div className="buffer"></div>
      <Breadcrumb separator="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Categoria</Breadcrumb.Item>
        <Breadcrumb.Item>{state.Name}</Breadcrumb.Item>
      </Breadcrumb>
      <BoxProduct></BoxProduct>
      <Footer />
    </Container>
  );
}

export default Productpage;
