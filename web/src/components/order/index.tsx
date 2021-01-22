import React from "react";
import { parseISO, format } from "date-fns";
import { Order } from "../../ducks/order";

import { Container } from "./styles";

interface props {
  order: Order;
}

const order: React.FC<props> = ({ order }) => {
  return (
    <Container>
      <div className="title">
        <div>
          <h4>Código do Pedido: {order.ProductID}</h4>
        </div>

        <div>
          <h4>
            Criado: {format(parseISO(order.CreatedAt), "dd/MM/yyyy HH:mm")}
          </h4>
        </div>

        <div className="details">
          <div>
            <h2>Quantidade: {order.Qtd}</h2>
          </div>

          <div>
            <h3>{"R$ " + order.TotalValue.toFixed(2).replace(".", ",")}</h3>
          </div>
        </div>
      </div>

      <div className="status">
        <span className={order.Paid ? "paid" : "pending"}>
          {order.Paid ? "PAGO" : "PENDENTE"}
        </span>

        <h5 className={order.Status}>
          {order.Status === "PENDENTE" ? "AGUARDANDO CLIENTE" : order.Status}
        </h5>
      </div>
    </Container>
  );
};

export default order;
