import React, { useState, useEffect, useCallback } from 'react';
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
import { verifyCouponVality } from 'ducks/coupon';
import { RightCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useToasts } from 'react-toast-notifications';

import { Container, Box } from './styles';
import Header from 'components/header';
import CartList from 'components/cart-list-detail';
import Footer from 'components/footer';
import ModalCart from 'components/modalCart';

interface IAllOrdersInCart {
  orders: Order[];
  total: number;
}

interface props extends RouteComponentProps {
  getAllOrderInCart: () => Promise<IAllOrdersInCart>;
  saveProductInCart: (order: Order) => void;
  deleteFromCart: (index: number) => void;
  createOrder: (data: any) => Promise<boolean>;
  deleteAllCartProducts: () => void;
  verifyCouponVality: (hash: string) => Promise<any>;
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
  const [discount, setDiscount] = useState<number>(0);
  const [disableCoupon, setDisableCoupon] = useState<boolean>(false);

  const addProductToOrder = useCallback((): void => {
    if (state) {
      let order = {
        product: state.product,
        quantity: state.quantity,
      };

      props.saveProductInCart(order);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    addProductToOrder();
  }, [addProductToOrder]);

  useEffect(() => {
    props.getAllOrderInCart().then(response => {
      setTotal(response.total);
      setCart(response.orders);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, count]);

  async function handleUseCoupon() {
    await props.verifyCouponVality(coupon).then(response => {
      if (response) {
        addToast('Cupom válido', {
          appearance: 'success',
          autoDismiss: true,
        });

        setDiscount((total * response.discount) / 100);
        setTotal(total - (total * response.discount) / 100);
        setDisableCoupon(true);
      } else {
        addToast('Cupom inválido', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    });
  }

  async function handleOrder() {
    let aux = 0;
    cart.forEach(obj => (aux += aux + obj.quantity));
    let data = {
      productID: cart.map(obj => obj.product.ID),
      qtd: aux,
      totalValue: total,
    };

    await props.createOrder(data).then(() => {
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
            cart.map((order, index) => (
              <CartList
                key={index}
                product={order.product}
                quantity={order.quantity}
                onDelete={() => {
                  props.deleteFromCart(index);
                  setRefresh(!refresh);
                }}
              />
            ))
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
                    disabled={disableCoupon}
                  />
                  <RightCircleOutlined
                    onClick={() => {
                      if (disableCoupon === false) {
                        handleUseCoupon();
                      }
                    }}
                  />
                </div>
              </div>

              <div className="subtotal">
                {discount !== 0 ? (
                  <>
                    <p>Desconto:</p>

                    <span>R$ {discount.toFixed(2).replace('.', ',')}</span>
                  </>
                ) : null}

                <>
                  <p>Total:</p>

                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </>
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
  verifyCouponVality,
})(Cart);
