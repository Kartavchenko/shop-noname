import React, { useState } from "react";
import { Slide } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "../../helpers/notifications";
import { removeItemFromBasket, cleenBasket } from "../../redux/userSlice";
import { selectorBasketItems, selectorUserData } from "../../redux/selectors";
import { ItemBasket } from "./ItemBasket/ItemBasket";
import { addToHistoryOrders } from "../../redux/dataOperations";
import {
  UsersBasket,
  IconBasket,
  IconBackArrow,
  ModalBasket,
  ModalContainer,
  ModalTitle,
  ModalOrder,
  ModalBack,
  IconSadSmile,
  EmphtyBasket,
  ButtonOrderPay,
  ButtonBack,
} from "./Basket.styled";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function Basket() {
  const [open, setOpen] = useState(false); // Modal state

  const { uid } = useSelector(selectorUserData);

  const dispatch = useDispatch();

  const basketItems = useSelector(selectorBasketItems);

  const totalPrice = basketItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const addToOrderHistory = async (order) => {
    try {
      await addToHistoryOrders(uid, order);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const destructuringBasketItems = basketItems.map(
    ({ image_url, category, name, price, description, quantity }) => {
      return { image_url, category, name, price, description, quantity };
    }
  );

  const handleOrder = async () => {
    if (basketItems.length === 0)
      return Notiflix.Report.failure(
        "Order Failure",
        "Please add product to basket.",
        "Okay"
      );
    await addToOrderHistory({
      items: destructuringBasketItems,
      totalPrice: totalPrice,
    });

    handleClose();

    await dispatch(cleenBasket());
    Notiflix.Report.success(
      "Order Success",
      "Our consultant will contact you for confirm.",
      "Okay"
    );
  };

  const removeFromBasket = (id) => {
    dispatch(removeItemFromBasket(id));
  };

  return (
    <div>
      <UsersBasket onClick={handleClickOpen}>
        {basketItems.length > 0 ? basketItems.length : null}
        <IconBasket />
      </UsersBasket>
      <ModalBasket
        open={open}
        TransitionComponent={Transition}
        scroll="body"
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <ModalTitle>{"Order"}</ModalTitle>
        <ModalBack>
          <ButtonBack onClick={handleClose}>
            <IconBackArrow />
            Сontinue shopping
          </ButtonBack>
        </ModalBack>
        <ModalContainer>
          <ul>
            {basketItems.length >= 1 ? (
              <ItemBasket
                basketItems={basketItems}
                removeFromBasket={removeFromBasket}
              />
            ) : (
              <EmphtyBasket variant="h5" align="center">
                Nothing Aded <IconSadSmile />
              </EmphtyBasket>
            )}
          </ul>
        </ModalContainer>
        <ModalOrder>
          <ButtonOrderPay variant="contained" onClick={handleOrder}>
            Order and pay ${totalPrice}
          </ButtonOrderPay>
        </ModalOrder>
      </ModalBasket>
    </div>
  );
}

export default Basket;
