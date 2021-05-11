import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Rate, InputNumber } from 'antd';
import { Product } from '@ducks/product';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { getAllProducts } from '@ducks/product';
import { addFavorite } from '@ducks/favorite';
import {
  ShareAltOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { Container, BoxProduct, Products } from './styles';
import Header from '@components/header';
import Footer from '@components/footer';
import ProductComp from '@components/product';

interface props extends RouteComponentProps<any> {
  getAllProducts: () => Promise<any>;
  addFavorite: (productID: string) => Promise<any>;
}

function Productpage(props: props) {
  const { state } = useLocation<Product>();
  const [products, setProducts] = useState<Array<Product>>([]);
  const [quantity, setQuantity] = useState<any>(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    props.getAllProducts().then(res => {
      setProducts(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header {...props} />
      <div className="buffer"></div>
      <Breadcrumb separator="/">
        <Breadcrumb.Item onClick={() => props.history.push('/home')}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item
          onClick={() =>
            props.history.push({
              pathname: '/categories',
              state: {
                categoryID: state.Categoryid,
              },
            })
          }
        >
          Categoria
        </Breadcrumb.Item>
        <Breadcrumb.Item>{state.Name}</Breadcrumb.Item>
      </Breadcrumb>
      <BoxProduct>
        <div className="container-product">
          <div className="data-img-product">
            <div className="btn-imagem">
              <img src={state.ProductImage[0].ImageURL} alt="product" />
              <div>
                <ShareAltOutlined />
                <h1>compartilhe</h1>
              </div>
              <div onClick={() => props.addFavorite(state.ID)}>
                <HeartOutlined />
                <h1>adicionar aos favoritos</h1>
              </div>
            </div>

            <div className="data-text">
              <h1>{state.Name}</h1>
              <Rate value={3} disabled />
              <p>{state.Description}</p>
              <div className="price">
                <span>R$ {state.Value.toFixed(2).replace('.', ',')}</span>
                {state.HasShipping ? null : <button>frete grátis</button>}
              </div>
              <div className="selector-qtd">
                <h1>Quantidade: </h1>
                <InputNumber
                  min={1}
                  value={quantity}
                  onChange={value => setQuantity(value)}
                />
              </div>

              {state.StockQtd > 0 ? (
                <button
                  onClick={() =>
                    props.history.push({
                      pathname: '/cart',
                      state: {
                        product: state,
                        quantity: quantity,
                      },
                    })
                  }
                  className="buy-button"
                >
                  <ShoppingCartOutlined />
                  <span>comprar</span>
                </button>
              ) : (
                <h2>Produto Esgotado</h2>
              )}
            </div>
          </div>

          <div className="details-class">
            <h1>detalhes técnicos</h1>
            <p>{state.TecnicalDetails}</p>
          </div>
        </div>
      </BoxProduct>

      <Products>
        <div className="component">
          <h1>outros produtos</h1>
          <div className="product-comp">
            {products.map(product => {
              return (
                <ProductComp key={product.ID} product={product} {...props} />
              );
            })}
          </div>
        </div>
      </Products>
      <Footer />
    </Container>
  );
}

export default connect(null, { getAllProducts, addFavorite })(Productpage);
