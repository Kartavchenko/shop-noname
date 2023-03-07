import {
  ButtonBasket,
  IconAddToBasket,
  CardBox,
  ItemCardName,
  ItemCardImage,
  ImageCard,
  IconPopular,
  ItemCardPopular,
  ItemCardDescription,
  ItemCardPrice,
  ItemCard,
} from "./List.styled";

const List = ({ filteredList, addToBasket }) => {
  return filteredList.map(
    ({ id, image, name, price, description, popular }) => {
      return (
        <ItemCard key={id} component="li">
          <CardBox component="ul">
            <ItemCardImage component="li">
              <ImageCard src={image} alt="equipment" />
            </ItemCardImage>
            <ItemCardName component="li">{name}</ItemCardName>
            <ItemCardPopular component="li">
              {popular}
              <IconPopular />
              <p>reviews</p>
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
    }
  );
};

export default List;
