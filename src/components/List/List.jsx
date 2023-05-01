import { useState } from "react";
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
  ButtonShowDescription,
} from "./List.styled";

const List = ({ elements, addToBasket, checkItemsInItems }) => {
  const { id, category, images, title, price, description } = elements;

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
            src={images ?? plug}
            alt="equipment"
          />
        </ItemCard>
        <ItemCard component="li">
          <p>{title}</p>
        </ItemCard>
        <ItemCard component="li">
          <p>Category: {category.name}</p>
        </ItemCard>
        <ItemCard component="li">
          <p>{description.slice(0, 35)}</p>
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
};

export default List;
