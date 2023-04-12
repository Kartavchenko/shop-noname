import plug from "../../image/no-image-icon.png";
import {
  ButtonBasket,
  IconAddToBasket,
  CardBox,
  ItemCardName,
  ItemCardImage,
  ImageCard,
  ItemCardPopular,
  ItemCardDescription,
  ItemCardPrice,
  ItemCard,
} from "./List.styled";

const List = ({ items, addToBasket }) => {
  return items.map(({ id, category, images, title, price, description }) => {
    return (
      <ItemCard key={id} component="li">
        <CardBox component="ul">
          <ItemCardImage component="li">
            <ImageCard src={images ?? plug} alt="equipment" />
          </ItemCardImage>
          <ItemCardName component="li">{title}</ItemCardName>
          <ItemCardPopular component="li">
            Category: {category.name}
          </ItemCardPopular>
          <ItemCardDescription component="li">
            {description.slice(0, 35)}
          </ItemCardDescription>
          <ItemCardPrice component="li">
            ${price}
            <ButtonBasket type="button" onClick={() => addToBasket(id)}>
              <IconAddToBasket />
            </ButtonBasket>
          </ItemCardPrice>
        </CardBox>
      </ItemCard>
    );
  });
};

export default List;
