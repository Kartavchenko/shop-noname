import { ButtonBasket, IconRemoveFromBasket } from "../Basket.styled";
import { ItemContainer, Item } from "./ItemBasket.styled";

export function ItemBasket({ basketItems, removeFromBasket }) {
  return basketItems.map(
    ({ _id, image_url, category, name, price, quantity }) => (
      <ItemContainer key={_id}>
        <Item>
          <li>
            <img src={image_url} alt="equipment" width="200" height="200" />
          </li>
          <li>{name}</li>
          <li>{category}</li>
          <li>{price}</li>
          <li>x{quantity}</li>
          <li>
            <ButtonBasket type="button" onClick={() => removeFromBasket(_id)}>
              <IconRemoveFromBasket />
            </ButtonBasket>
          </li>
        </Item>
      </ItemContainer>
    )
  );
}
