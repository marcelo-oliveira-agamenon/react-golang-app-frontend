import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, useLocation } from "react-router-dom";
import {
  saveProductInCart,
  getAllOrderInCart,
  Order,
  deleteFromCard,
} from "../../ducks/cart";

import { Container, Box } from "./styles";
import Header from "../../components/header";
import CartList from "../../components/cart-list-detail";
import Footer from "../../components/footer";

interface props extends RouteComponentProps {
  getAllOrderInCart: () => Promise<Array<Order>>;
  saveProductInCart: (order: Order) => void;
  deleteFromCard: (index: number) => void;
}

function Cart(props: props) {
  const { state } = useLocation<Order>();
  const [cart, setCart] = useState<Array<Order>>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (state) {
      let order = {
        product: state.product,
        quantity: state.quantity,
      };
      props.saveProductInCart(order);
    }

    props.getAllOrderInCart().then((res) => {
      setCart(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <Container>
      <Header {...props} />
      <div className="buffer"></div>
      <h1 className="title-cart">confira seu carrinho</h1>
      <Box>
        <div className="box-cart">
          {cart.length > 0 ? (
            cart.map((order, index) => {
              return (
                <CartList
                  key={index}
                  product={order.product}
                  quantity={order.quantity}
                  onDelete={() => {
                    props.deleteFromCard(index);
                    setRefresh(!refresh);
                  }}
                />
              );
            })
          ) : (
            <h2>Carrinho vazio</h2>
          )}
        </div>
        {cart.length > 0 && (
          <>
            {cart.map((order, index) => {
              return (
                <div className="product-cart" key={index}>
                  <h1>produto no carrinho</h1>
                  <div className="product-detail">
                    <img
                      src={order.product.ProductImage[0].ImageURL}
                      alt="product"
                    />
                    <div>
                      <h2>{order.product.Name}</h2>
                      <p>{order.product.Description}</p>
                    </div>
                    <div>
                      <span>
                        R$ {order.product.Value.toFixed(2).replace(".", ",")}
                      </span>
                      <h5>Quantidade: {order.quantity}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </Box>
      <Footer />
    </Container>
  );
}

export default connect(null, {
  getAllOrderInCart,
  saveProductInCart,
  deleteFromCard,
})(Cart);
