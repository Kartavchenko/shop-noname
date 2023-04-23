import React, { useState } from "react";
import Notiflix from "../../helpers/notifications";
import { Button, Slide } from "@mui/material";
import { removeItemFromBasket, cleenBasket } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorBasketItems, selectorUserData } from "../../redux/selectors";
import { ItemBasket } from "./ItemBasket/ItemBasket";
import { doc } from "firebase/firestore";
import { fireDB } from "../../firebase/config";
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
} from "./Basket.styled";
import { setDoc } from "firebase/firestore";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Basket = () => {
  const [open, setOpen] = useState(false); // Modal state

  const userID = useSelector(selectorUserData);

  const dispatch = useDispatch();

  const basketItems = useSelector(selectorBasketItems);

  const addToOrderHistory = async (order) => {
    // Create document in firebase collection
    try {
      await setDoc(doc(fireDB, `${userID.uid}/${Date.now()}`), {
        order,
        totalAmount,
      }); // Add to firebase collection
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

  const handleOrder = async () => {
    if (basketItems.length === 0)
      return Notiflix.Report.failure(
        "Order Failure",
        "Please add product to basket.",
        "Okay"
      );
    await addToOrderHistory(basketItems);
    handleClose();
    await dispatch(cleenBasket());
    Notiflix.Report.success(
      "Order Success",
      "Our consultant will contact you for confirm.",
      "Okay"
    );
  };

  const totalAmount = basketItems.reduce((acc, item) => acc + item.price, 0);

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
          <Button onClick={handleClose}>
            <IconBackArrow />
            Сontinue shopping
          </Button>
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
          <Button variant="contained" onClick={handleOrder}>
            Order and pay ${totalAmount}
          </Button>
        </ModalOrder>
      </ModalBasket>
    </div>
  );
};

export default Basket;
