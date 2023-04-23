import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { parseDate } from "../../helpers/parseDate";
import {
  OrderItem,
  Order,
  TitlesOrder,
  OrderList,
  BoxOrders,
  SubListOrder,
  BoxOrderTitle,
} from "./HistoryOrder.styled";

const HistoryOrders = () => {
  const [orderListHistory, setOrderListHistory] = useState([]);

  const [historyOrders] = useOutletContext();

  useEffect(() => {
    setOrderListHistory(historyOrders);
  }, [historyOrders]);

  // products list of order
  const orderDetails = (list) =>
    list.map(({ title, price, description }) => {
      return (
        <li key={title}>
          <Order component="ul">
            <li>
              <TitlesOrder>Product:</TitlesOrder>
              <p>{title}</p>
            </li>
            <li>
              <TitlesOrder>Price:</TitlesOrder>
              <p>{price}</p>
            </li>
            <li>
              <TitlesOrder>Description:</TitlesOrder>
              <p>{description}</p>
            </li>
          </Order>
        </li>
      );
    });

  // user order
  const orderItemWithDetails = orderListHistory.map(
    ({ id, order, totalAmount }) => (
      <OrderItem component="li" key={id}>
        <BoxOrderTitle component="ul">
          <li>
            <p>{parseDate(id)};</p>
          </li>
          <li>
            <p>Total: ${totalAmount}</p>
          </li>
        </BoxOrderTitle>
        <SubListOrder component="ul">{orderDetails(order)}</SubListOrder>
      </OrderItem>
    )
  );

  return (
    <BoxOrders>
      <OrderList component="ul">{orderItemWithDetails}</OrderList>
    </BoxOrders>
  );
};

export default HistoryOrders;
