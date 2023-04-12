import { ButtonBasket, IconRemoveFromBasket } from "../Basket.styled";
import { ItemContainer, Item } from "./ItemBasket.styled";

export const ItemBasket = ({ basketItems, removeFromBasket }) => {
  return basketItems.map(
    ({ id, images, category, brand, price, description }) => (
      <ItemContainer key={id}>
        <Item>
          <li>
            <img src={images} alt="equipment" width="200" height="200" />
          </li>
          <li>{category.name}</li>
          <li>{brand}</li>
          <li>{price}</li>
          <li>{description}</li>
          <li>
            <ButtonBasket type="button" onClick={() => removeFromBasket(id)}>
              <IconRemoveFromBasket />
            </ButtonBasket>
          </li>
        </Item>
      </ItemContainer>
    )
  );
};
