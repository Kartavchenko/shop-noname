import React, { useState } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Button, Slide } from "@mui/material";
import { removeItemFromBasket, cleenBasket } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorBasketItems } from "../../redux/selectors";
import {
  IconRemoveFromBasket,
  UsersBasket,
  ButtonBasket,
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Basket = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const basketItems = useSelector(selectorBasketItems);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOrder = () => {
    handleClose();
    dispatch(cleenBasket());
    Report.success(
      "Order Success",
      "Our consultant will contact you for confirm.",
      "Okay"
    );
  };

  const removeFromBasket = (id) => {
    dispatch(removeItemFromBasket(id));
  };

  const catalogBasket = basketItems.map(
    ({ id, image, name, brand, price, description }) => {
      return (
        <li key={id}>
          <ul>
            <li>
              <img src={image} alt="equipment" width="200" height="200" />
            </li>
            <li>{name}</li>
            <li>{brand}</li>
            <li>{price}</li>
            <li>{description}</li>
            <li>
              <ButtonBasket type="button" onClick={() => removeFromBasket(id)}>
                <IconRemoveFromBasket />
              </ButtonBasket>
            </li>
          </ul>
        </li>
      );
    }
  );

  return (
    <div>
      <UsersBasket variant="contained" onClick={handleClickOpen}>
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
              catalogBasket
            ) : (
              <EmphtyBasket variant="h5" align="center">
                Nothing Aded <IconSadSmile />
              </EmphtyBasket>
            )}
          </ul>
        </ModalContainer>
        <ModalOrder>
          <Button onClick={handleOrder}>Order and pay</Button>
        </ModalOrder>
      </ModalBasket>
    </div>
  );
};

export default Basket;
