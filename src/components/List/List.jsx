import { useState } from "react";
import plug from "../../image/no-image-icon.png";
import {
  ButtonBasket,
  IconAddToBasket,
  ItemsList,
  ItemCard,
  ImageCard,
  TextCard,
  Card,
  IconAdded,
  TextDescription,
  ButtonShowDescription,
} from "./List.styled";

const List = ({ items, addToBasket, checkProductInItems }) => {
  const { _id, category, image_url, name, price, description } = items;

  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card component="li">
      <ItemsList component="ul">
        <ItemCard component="li">
          <ImageCard
            showDescription={showDescription}
            src={image_url ?? plug}
            alt="equipment"
          />
        </ItemCard>
        <ItemCard component="li">
          <TextCard>{name}</TextCard>
        </ItemCard>
        <ItemCard component="li">
          <TextCard>Category: {category}</TextCard>
        </ItemCard>
        <ItemCard component="li">
          <TextCard>{description.slice(0, 35)}</TextCard>
          <TextDescription className={`${showDescription ? "show" : "hide"}`}>
            {description}
          </TextDescription>
        </ItemCard>
        <ItemCard component="li">
          <ButtonShowDescription
            size="small"
            type="button"
            onClick={handleToggleDescription}
          >
            {showDescription ? "hide description..." : "show description..."}
          </ButtonShowDescription>
        </ItemCard>
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
