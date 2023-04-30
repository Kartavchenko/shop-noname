import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { parseDate } from "../../helpers/parseDate";
import DownloadIcon from "@mui/icons-material/Download";
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
  BoxBtnLoadMore,
  ButtonLoadMore,
} from "./HistoryOrder.styled";

const HistoryOrders = () => {
  const [orderListHistory, setOrderListHistory] = useState([]);
  const [loadMore, setLoadMore] = useState(10);

  const [historyOrders] = useOutletContext();

  useEffect(() => {
    setOrderListHistory(historyOrders.slice(0, loadMore));
  }, [historyOrders, loadMore]);

  const totalOrdersHad = historyOrders.length;
  const totalOrdersShow = orderListHistory.length;

  // order products list
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
              <p>${price}</p>
            </ProductItem>
            <ProductItem component="li">
              <TitlesOrder>Description:</TitlesOrder>
              <p>{description}</p>
            </ProductItem>
          </ProductList>
        </ItemProduct>
      );
    });

  // order user
  const orderItems = orderListHistory.map(({ id, order, totalAmount }) => (
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
  ));

  return (
    <BoxOrders>
      <OrderList component="ul">{orderItems}</OrderList>
      {totalOrdersShow ? (
        <BoxBtnLoadMore>
          <ButtonLoadMore
            disabled={totalOrdersShow >= totalOrdersHad}
            variant="contained"
            color="secondary"
            onClick={() =>
              setLoadMore((prevState) => {
                return prevState + 10;
              })
            }
          >
            <DownloadIcon />
            Load More
          </ButtonLoadMore>
        </BoxBtnLoadMore>
      ) : null}
    </BoxOrders>
  );
};

export default HistoryOrders;
