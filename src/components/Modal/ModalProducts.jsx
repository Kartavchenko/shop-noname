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
import { getOneProduct, addToWishlist } from "../../redux/dataOperations";
import Notiflix from "../../helpers/notifications";
import { useSelector } from "react-redux";
import { selectorUserData } from "../../redux/selectors";

function ModalProduct({ items, addToBasket, checkProductInItems }) {
  const { _id, image_url, name, price, description } = items;

  const [amountItems, setAmountItems] = useState(1);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { uid } = useSelector(selectorUserData);

  const handleWishlistItem = async (id) => {
    // const fetchWishlist = await getWishlist(uid);
    // const checkIfItemExistInWishlist = fetchWishlist.find(
    //   (item) => item._id === id
    // );
    await addToWishlist(uid, items);
    Notiflix.Notify.success("Added to wishlist");
  };

  const handleOpen = () => {
    setOpen(true);
    getOneItem(_id);
  };

  const getOneItem = async (id) => await getOneProduct(id);

  const multipleItem = () => {
    setAmountItems(amountItems + 1);
  };

  const reduceItem = () => {
    if (amountItems <= 1) return;
    setAmountItems(amountItems - 1);
  };

  return (
    <div>
      <ButtonModal onClick={handleOpen}>{name}</ButtonModal>
      <Modal
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
                  <Typography variant="h6">x{amountItems}</Typography>
                  <ButtonBasket
                    type="button"
                    onClick={() => addToBasket(_id, amountItems)}
                  >
                    {checkProductInItems.includes(_id) ? (
                      <IconAdded />
                    ) : (
                      <IconAddToBasket />
                    )}
                  </ButtonBasket>
                </BoxPrice>
                <BoxWishlist>
                  <Typography>Add to wishlist</Typography>
                  <button type="button" onClick={() => handleWishlistItem(_id)}>
                    <AddedToFavoriteIcon />
                  </button>
                  <button type="button" onClick={() => handleWishlistItem(_id)}>
                    <FavoriteBorderIcon />
                  </button>
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
}

export default ModalProduct;
