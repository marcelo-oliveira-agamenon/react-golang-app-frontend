import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getOrdersByUserId, Order } from "../../ducks/order";
import { RouteComponentProps } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

import { Container, Box } from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import OrderComp from "../../components/order";

interface props extends RouteComponentProps<any> {
  getOrdersByUserId: () => Promise<any>;
}

function Orders(props: props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    setLoading(true);

    props
      .getOrdersByUserId()
      .then((response) => {
        setOrders(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header {...props} />
      <div className="buffer"></div>
      <h1 className="main-container-h1">Meus Pedidos</h1>

      <Box>
        <div className="card-profile">
          {loading ? (
            <LoadingOutlined />
          ) : (
            <>
              {orders.map((ord) => {
                return <OrderComp key={ord.ID} />;
              })}
            </>
          )}
        </div>
      </Box>

      <Footer />
    </Container>
  );
}

export default connect(null, { getOrdersByUserId })(Orders);
