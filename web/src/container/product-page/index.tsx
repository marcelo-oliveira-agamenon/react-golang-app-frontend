import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Breadcrumb, Rate } from "antd";
import { Product } from "../../ducks/product";
import { RouteComponentProps, useLocation } from "react-router-dom";
import { getAllProducts } from "../../ducks/product";
import {
  ShareAltOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { Container, BoxProduct, Products } from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductComp from "../../components/product";

interface props extends RouteComponentProps<any> {
  getAllProducts: () => Promise<any>;
}

function Productpage(props: props) {
  const { state } = useLocation<Product>();
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    props.getAllProducts().then((res) => {
      setProducts(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header {...props} />
      <div className="buffer"></div>
      <Breadcrumb separator="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Categoria</Breadcrumb.Item>
        <Breadcrumb.Item>{state.Name}</Breadcrumb.Item>
      </Breadcrumb>
      <BoxProduct>
        <div className="container-product">
          <div className="data-img-product">
            <div>
              <img src={state.Photos[0]} alt="product" />
              <div>
                <ShareAltOutlined />
                <h1>compartilhe</h1>
              </div>
              <div>
                <HeartOutlined />
                <h1>adicionar aos favoritos</h1>
              </div>
            </div>
            <div>
              <h1>{state.Name}</h1>
              <Rate value={3} disabled />
              <p>{state.Description}</p>
              <div>
                <span>R$ {state.Value}</span>
                {state.HasShipping ? null : <button>frete grátis</button>}
              </div>
              <button
                onClick={() =>
                  props.history.push({ pathname: "/cart", state: state })
                }
              >
                <ShoppingCartOutlined />
                <span>comprar</span>
              </button>
            </div>
          </div>

          <div>
            <h1>detalhes técnicos</h1>
            <p>{state.TecnicalDetails}</p>
          </div>
        </div>
      </BoxProduct>

      <Products>
        <h1>outros produtos</h1>
        <div className="product-comp">
          {products.map((product) => {
            return (
              <ProductComp key={product.ID} product={product} {...props} />
            );
          })}
        </div>
      </Products>
      <Footer />
    </Container>
  );
}

export default connect(null, { getAllProducts })(Productpage);
