import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { parseDate } from "../../helpers/parseDate";
import {
  ItemProduct,
  ProductItem,
  OrderItem,
  ProductList,
  TitlesOrder,
  OrderList,
  BoxOrders,
  OrderListProducts,
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
        <ItemProduct component="li" key={title}>
          <ProductList component="ul">
            <ProductItem component="li">
              <TitlesOrder>Product:</TitlesOrder>
              <p>{title}</p>
            </ProductItem>
            <ProductItem component="li">
              <TitlesOrder>Price:</TitlesOrder>
              <p>{price}</p>
            </ProductItem>
            <ProductItem component="li">
              <TitlesOrder>Description:</TitlesOrder>
              <p>{description}</p>
            </ProductItem>
          </ProductList>
        </ItemProduct>
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
        <OrderListProducts component="ul">
          {orderDetails(order)}
        </OrderListProducts>
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
