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
  Text,
} from "./HistoryOrder.styled";

function HistoryOrders() {
  const [orderListHistory, setOrderListHistory] = useState([]);
  const [loadMore, setLoadMore] = useState(10);

  const [historyOrders] = useOutletContext();

  useEffect(() => {
    setOrderListHistory(historyOrders.slice(0, loadMore));
  }, [historyOrders, loadMore]);

  const totalOrdersHave = historyOrders.length;
  const totalOrdersShow = orderListHistory.length;

  // order products list
  const eachItemInOrder = (list) =>
    list.map(({ name, price, description, quantity }) => {
      return (
        <ItemProduct component="li" key={name}>
          <ProductList component="ul">
            <ProductItem component="li">
              <TitlesOrder>X{quantity}</TitlesOrder>
              <TitlesOrder>Product:</TitlesOrder>
              <Text>{name}</Text>
            </ProductItem>
            <ProductItem component="li">
              <TitlesOrder>Price:</TitlesOrder>
              <Text>${price}</Text>
            </ProductItem>
            <ProductItem component="li">
              <TitlesOrder>Description:</TitlesOrder>
              <Text>{description}</Text>
            </ProductItem>
          </ProductList>
        </ItemProduct>
      );
    });

  // order user
  const orderList = orderListHistory.map(
    ({ _id, items, totalPrice, orderDate }) => (
      <OrderItem component="li" key={_id}>
        <BoxOrderTitle component="ul">
          <li>
            {/* Title order with date + time + sum */}
            <Text>{parseDate(orderDate)};</Text>
          </li>
          <li>
            <Text>Total: ${totalPrice}</Text>
          </li>
        </BoxOrderTitle>
        <OrderListProducts component="ul">
          {eachItemInOrder(items)}
        </OrderListProducts>
      </OrderItem>
    )
  );

  return (
    <BoxOrders>
      {totalOrdersHave ? (
        <OrderList component="ul">{orderList}</OrderList>
      ) : (
        <h2>No history exist</h2>
      )}
      {totalOrdersShow ? (
        <BoxBtnLoadMore>
          <ButtonLoadMore
            disabled={totalOrdersShow >= totalOrdersHave}
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
}

export default HistoryOrders;
