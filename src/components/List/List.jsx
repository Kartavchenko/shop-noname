import plug from "../../image/no-image-icon.png";
import {
  ButtonBasket,
  IconAddToBasket,
  ItemsList,
  ItemCard,
  ImageCard,
  Card,
  IconAdded,
  TextDescription,
} from "./List.styled";

const List = ({ items, addToBasket, checkItemsInItems }) => {
  return items.map(({ id, category, images, title, price, description }) => {
    return (
      <Card key={id} component="li">
        <ItemsList component="ul">
          <ItemCard component="li">
            <ImageCard src={images ?? plug} alt="equipment" />
          </ItemCard>
          <div className="hover-description">
            <ItemCard component="li">
              <p>{title}</p>
            </ItemCard>
            <ItemCard component="li">
              <p>Category: {category.name}</p>
            </ItemCard>
            <ItemCard component="li">
              <p>{description.slice(0, 35)}</p>
              <TextDescription className="show-description">
                {description}
              </TextDescription>
            </ItemCard>
          </div>
          <ItemCard component="li">
            <p>${price}</p>
            <ButtonBasket type="button" onClick={() => addToBasket(id)}>
              {checkItemsInItems.includes(id) ? (
                <IconAdded />
              ) : (
                <IconAddToBasket />
              )}
            </ButtonBasket>
          </ItemCard>
        </ItemsList>
      </Card>
    );
  });
};

export default List;
