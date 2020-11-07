import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, useLocation } from "react-router-dom";
import { saveProductInCart, getAllOrderInCart, Order } from "../../ducks/cart";

import { Container, Box } from "./styles";
import Header from "../../components/header";
import CartList from "../../components/cart-list-detail";
import Footer from "../../components/footer";

interface props extends RouteComponentProps {
  getAllOrderInCart: () => Promise<Array<Order>>;
  saveProductInCart: (order: Order) => void;
}

function Cart(props: props) {
  const { state } = useLocation<Order>();
  const [cart, setCart] = useState<Array<Order>>([]);

  useEffect(() => {
    props.getAllOrderInCart().then((res) => {
      setCart(res);
    });

    if (state) {
      let order = {
        product: state.product,
        quantity: state.quantity,
      };
      props.saveProductInCart(order);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header {...props} />
      <div className="buffer"></div>
      <h1 className="title-cart">confira seu carrinho</h1>
      <Box>
        <div className="box-cart">
          {cart.length > 0 ? (
            cart.map((order) => {
              return (
                <CartList
                  key={order.product.ID}
                  product={order.product}
                  quantity={order.quantity}
                />
              );
            })
          ) : (
            <h2>Carrinho vazio</h2>
          )}
        </div>
        {state && (
          <div className="product-cart">
            <h1>produto no carrinho</h1>
            <div className="product-detail">
              <img src={state.product.Photos[0]} alt="product" />
              <div>
                <h2>{state.product.Name}</h2>
                <p>{state.product.Description}</p>
              </div>
              <div>
                <span>
                  R$ {state.product.Value.toFixed(2).replace(".", ",")}
                </span>
                <h5>Quantidade: 1</h5>
              </div>
            </div>
          </div>
        )}
      </Box>
      <Footer />
    </Container>
  );
}

export default connect(null, {
  getAllOrderInCart,
  saveProductInCart,
})(Cart);
