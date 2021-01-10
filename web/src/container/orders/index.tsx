import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

import { Container, Box } from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";

interface props extends RouteComponentProps<any> {}

function Orders(props: props) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container>
      <Header {...props} />
      <div className="buffer"></div>
      <h1 className="main-container-h1">Meus Pedidos</h1>

      <Box>
        <div className="card-profile">
          {loading ? <LoadingOutlined /> : null}
        </div>
      </Box>

      <Footer />
    </Container>
  );
}

export default connect(null, null)(Orders);
