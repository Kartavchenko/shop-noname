import { useState } from "react";
import { Typography, Fade, Modal, Backdrop } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ButtonBasket, IconAdded, IconAddToBasket } from "../List/List.styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  ButtonModal,
  ModalBox,
  ModalBoxTitle,
  BoxTitles,
  BoxPrice,
  AddedToFavoriteIcon,
  BoxWishlist,
  Price,
  MultipleItemButton,
  ReduceItemButton,
} from "./ModalProducts.styled";
import { getOneProduct } from "../../redux/dataOperations";

const ModalProduct = ({ items, addToBasket, checkProductInItems }) => {
  const { _id, image_url, name, price, description } = items;

  const [amountItem, setAmountItem] = useState(1);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
    getOneItem(_id);
  };

  const getOneItem = async (id) => await getOneProduct(id);

  const multipleItem = () => {
    setAmountItem(amountItem + 1);
  };

  const reduceItem = () => {
    if (amountItem <= 1) return;
    setAmountItem(amountItem - 1);
  };

  return (
    <div>
      <ButtonModal onClick={handleOpen}>{name}</ButtonModal>
      <Modal
        style={{ overflow: "auto", marginTop: "50px", marginBottom: "50px" }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <ModalBox>
            <ModalBoxTitle>
              <img src={image_url} alt={name} width={300} height={300} />
              <BoxTitles>
                <Typography
                  id="transition-modal-title"
                  variant="h5"
                  component="h2"
                >
                  {name}
                </Typography>
                <BoxPrice>
                  <Price>
                    <MultipleItemButton onClick={reduceItem}>
                      <RemoveIcon />
                    </MultipleItemButton>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {price}$
                    </Typography>
                    <ReduceItemButton onClick={multipleItem}>
                      <AddIcon />
                    </ReduceItemButton>
                  </Price>
                  <Typography variant="h6">x{amountItem}</Typography>
                  <ButtonBasket type="button" onClick={() => addToBasket(_id)}>
                    {checkProductInItems.includes(_id) ? (
                      <IconAdded />
                    ) : (
                      <IconAddToBasket />
                    )}
                  </ButtonBasket>
                </BoxPrice>
                <BoxWishlist>
                  <Typography>Add to wishlist</Typography>
                  <AddedToFavoriteIcon />
                  <FavoriteBorderIcon />
                </BoxWishlist>
              </BoxTitles>
            </ModalBoxTitle>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {description}
            </Typography>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalProduct;
