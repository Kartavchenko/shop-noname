import styled from '@emotion/styled';
import { Button, Box } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';

export const CardBox = styled(Box)`
  box-shadow: 0 3px 7px 1px rgba(0,0,0,0.3);
  border-radius: 10px;
  width: 300px;
  min-height: 350px;
  padding-left: 0;
  padding: 20px;
  justify-content: center;
`;

export const ItemCard = styled(Box)`
  margin-left: 20px;
  margin-top: 20px;
`;

export const ItemCardImage = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const ImageCard = styled.img`
  width: 200px;
  height: 200px;
`;

export const ItemCardName = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const ItemCardPopular = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const IconPopular = styled(StarIcon)`
  color: #e1ff00;
  margin-right: 10px;
`;

export const ItemCardDescription = styled(Box)`
  display: flex;
  margin-bottom: 5px;
  
`;

export const ItemCardPrice = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonBasket = styled(Button)`
  
`;

export const IconAddToBasket = styled(AddShoppingCartIcon)`
  
`;