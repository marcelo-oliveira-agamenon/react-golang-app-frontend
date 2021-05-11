import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import {
  saveProductInCart,
  getAllOrderInCart,
  Order,
  deleteFromCart,
  deleteAllCartProducts,
} from 'ducks/cart';
import { createOrder } from 'ducks/order';
import { RightCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useToasts } from 'react-toast-notifications';

import { Container, Box } from './styles';
import Header from 'components/header';
import CartList from 'components/cart-list-detail';
import Footer from 'components/footer';
import ModalCart from 'components/modalCart';

interface props extends RouteComponentProps {
  getAllOrderInCart: () => Promise<Array<Order>>;
  saveProductInCart: (order: Order) => void;
  deleteFromCart: (index: number) => void;
  createOrder: (data: any) => Promise<boolean>;
  deleteAllCartProducts: () => void;
}

function Cart(props: props) {
  const { addToast } = useToasts();
  const { state } = useLocation<Order>();
  const history = props.history;
  const [cart, setCart] = useState<Array<Order>>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (state) {
      let order = {
        product: state.product,
        quantity: state.quantity,
      };
      props.saveProductInCart(order);
    }

    props.getAllOrderInCart().then(res => {
      let total = 0;
      res.forEach(obj => {
        total = total + obj.quantity * obj.product.Value;
      });
      setTotal(total);
      setCart(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, count]);

  function useCoupon() {
    addToast('Cupom cadastrado com sucesso', {
      appearance: 'success',
      autoDismiss: true,
    });
  }

  function handleOrder() {
    let aux = 0;
    cart.forEach(obj => (aux += aux + obj.quantity));
    let data = {
      productID: cart.map(obj => obj.product.ID),
      qtd: aux,
      totalValue: total,
    };
    props.createOrder(data).then(() => {
      setShow(true);
    });
    props.deleteAllCartProducts();
    setCount(count + 1);
  }

  return (
    <Container>
      <ModalCart visible={show} {...props} />
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
                    props.deleteFromCart(index);
                    setRefresh(!refresh);
                  }}
                />
              );
            })
          ) : (
            <>
              <h2>Carrinho vazio</h2>
              <h3 onClick={() => props.history.push('/home')}>
                Continue comprando
              </h3>
            </>
          )}

          {cart.length > 0 && (
            <>
              <div className="coupon">
                <h4>inserir cupom</h4>

                <div>
                  <input
                    type="text"
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                  />
                  <RightCircleOutlined onClick={useCoupon} />
                </div>
              </div>
              <div className="subtotal">
                <p>Total:</p>

                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="btn-cart">
                <p onClick={() => history.push('/home')}>retornar</p>

                <button onClick={handleOrder}>
                  <ShoppingCartOutlined />
                  finalizar compra
                </button>
              </div>
            </>
          )}
        </div>
      </Box>
      <Footer />
    </Container>
  );
}

export default connect(null, {
  getAllOrderInCart,
  saveProductInCart,
  deleteFromCart,
  createOrder,
  deleteAllCartProducts,
})(Cart);
