import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { RightCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import CartList from 'components/cart-list-detail';
import ModalCart from 'components/modalCart';
import { deleteOneOrderFromCart } from '@/store';
import { CreateOrderParams, Order } from '@/models';
import { authorization, Header, Footer } from '@/components';
import { useOrder, useCoupon } from '@/services';
import { formatToCurrency } from '@/util';
import {
  Container,
  Box,
  Buffer,
  CartTitle,
  BoxCart,
  BoxCartEmptyMessage,
  BoxCartRedirect,
  BoxCartCoupon,
  BoxCartCouponTitle,
  BoxCartSubtotal,
  BoxCartButtonContainer,
  BoxCartButtonContainerText,
  BoxCartButton,
  BoxCartSubtotalText,
  BoxCartSubtotalDescription,
} from './styles';

function Cart() {
  const { createOrder } = useOrder();
  const { verifyCouponVality } = useCoupon();
  const [cart, setCart] = useState<Array<Order>>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [discount, setDiscount] = useState<number>(0);
  const [disableCoupon, setDisableCoupon] = useState<boolean>(false);

  const handleUseCoupon = async () => {
    await verifyCouponVality(coupon).then(response => {
      setDiscount((total * response.discount) / 100);
      setTotal(total - (total * response.discount) / 100);
      setDisableCoupon(true);
    });
  };

  // TODO: add coupon used
  const handleOrder = async () => {
    let aux = 0;
    cart.forEach(obj => (aux += aux + obj.quantity));
    const data: CreateOrderParams = {
      productID: cart.map(obj => obj.product.ID),
      qtd: aux,
      totalValue: total,
    };

    const response = await createOrder(data);

    if (response) {
      setShow(true);
      props.deleteAllCartProducts();
      setCount(count + 1);
    }
  };

  return (
    <Container>
      {/* <ModalCart visible={show} {...props} /> */}
      <Header />
      <Buffer />
      <CartTitle>confira seu carrinho</CartTitle>

      <Box>
        <BoxCart>
          {cart.length > 0 ? (
            cart.map((order, index) => (
              <CartList
                key={index}
                product={order.product}
                quantity={order.quantity}
                onDelete={() => {
                  deleteOneOrderFromCart(index);
                  setRefresh(!refresh);
                }}
              />
            ))
          ) : (
            <>
              <BoxCartEmptyMessage>Carrinho vazio</BoxCartEmptyMessage>
              <Link href="/home">
                <BoxCartRedirect>Continue comprando</BoxCartRedirect>
              </Link>
            </>
          )}

          {cart.length > 0 && (
            <>
              <BoxCartCoupon>
                <BoxCartCouponTitle>inserir cupom</BoxCartCouponTitle>

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
              </BoxCartCoupon>

              <BoxCartSubtotal>
                {discount !== 0 ? (
                  <>
                    <BoxCartSubtotalText>Desconto:</BoxCartSubtotalText>

                    <BoxCartSubtotalDescription>
                      {formatToCurrency(discount, 'pt-BR', 'BRL')}
                    </BoxCartSubtotalDescription>
                  </>
                ) : null}

                <>
                  <BoxCartSubtotalText>Total:</BoxCartSubtotalText>

                  <BoxCartSubtotalDescription>
                    {formatToCurrency(total, 'pt-BR', 'BRL')}
                  </BoxCartSubtotalDescription>
                </>
              </BoxCartSubtotal>

              <BoxCartButtonContainer>
                <Link href="/home">
                  <BoxCartButtonContainerText>
                    retornar
                  </BoxCartButtonContainerText>
                </Link>

                <BoxCartButton onClick={handleOrder}>
                  <ShoppingCartOutlined />
                  finalizar compra
                </BoxCartButton>
              </BoxCartButtonContainer>
            </>
          )}
        </BoxCart>
      </Box>
      <Footer />
    </Container>
  );
}

export default authorization(Cart);
