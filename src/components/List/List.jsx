import plug from "../../image/no-image-icon.png";
import ModalProduct from "../Modal/ModalProducts";
import {
  ButtonBasket,
  IconAddToBasket,
  ItemsList,
  ItemCard,
  ImageCard,
  TextCard,
  Card,
  IconAdded,
} from "./List.styled";

const List = ({ items, addToBasket, checkProductInItems }) => {
  const { _id, category, image_url, price, description } = items;

  return (
    <Card component="li">
      <ItemsList component="ul">
        <ItemCard component="li">
          <ImageCard src={image_url ?? plug} alt="equipment" />
        </ItemCard>
        <ItemCard component="li">
          <ModalProduct /* <--- Modal window of product <---*/
            items={items}
            addToBasket={addToBasket}
            checkProductInItems={checkProductInItems}
          />
        </ItemCard>
        <ItemCard component="li">
          <TextCard>Category: {category}</TextCard>
        </ItemCard>
        <ItemCard component="li">
          <TextCard>{description.slice(0, 35)}</TextCard>
        </ItemCard>
        <ItemCard component="li"></ItemCard>
        <ItemCard component="li">
          <p>${price}</p>
          <ButtonBasket type="button" onClick={() => addToBasket(_id)}>
            {checkProductInItems.includes(_id) ? (
              <IconAdded />
            ) : (
              <IconAddToBasket />
            )}
          </ButtonBasket>
        </ItemCard>
      </ItemsList>
    </Card>
  );
};

export default List;
