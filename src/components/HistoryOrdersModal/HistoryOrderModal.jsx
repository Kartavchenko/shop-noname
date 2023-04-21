import { useOutletContext } from "react-router-dom";
import { parseDate } from "../../helpers/parseDate";
import {
  OrderItems,
  Order,
  TitlesOrder,
  OrderList,
  BoxOrders,
} from "./HistoryOrderModal.styled";

const HistoryOrdersModal = () => {
  const [historyOrders] = useOutletContext();

  const orderItem = historyOrders.map(({ id, order, totalAmount }) => (
    <OrderItems component="li" key={id}>
      {order.map(({ title, price, description }) => {
        return (
          <Order component="ul" key={title}>
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
        );
      })}
      <p>Total: ${totalAmount}</p>
      <p>{parseDate(id)}</p>
    </OrderItems>
  ));

  return (
    <div>
      <BoxOrders>
        <OrderList component="ul">{orderItem}</OrderList>
      </BoxOrders>
    </div>
  );
};

export default HistoryOrdersModal;
