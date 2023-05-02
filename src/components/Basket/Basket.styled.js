import styled from '@emotion/styled';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WestIcon from '@mui/icons-material/West';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const ModalBasket = styled(Dialog)`
  
`;

export const EmphtyBasket = styled(Typography)`

`;

export const IconSadSmile = styled(SentimentVeryDissatisfiedIcon)`
  color: green;
`;

export const ModalOrder = styled(DialogActions)`
  justify-content: center;
  background-color: #4C4556;
  `;

export const ModalBack = styled(DialogActions)`
  justify-content: flex-start;
  background-color: #4C4556;
  `;

export const ModalTitle = styled(DialogTitle)`
  text-align: center;
  background-color: #4C4556;
  color: #CBD0D8;
`;

export const ModalContainer = styled(DialogContent)`
  background-color: #4C4556;
	min-width: 500px;
	min-height: 400px;
  color: #CBD0D8;
`;

export const IconRemoveFromBasket = styled(RemoveShoppingCartIcon)`
  fill: #D3AC2B;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    scale: 1.1;
  }
`;

export const UsersBasket = styled(Button)`
  color: rgba(246, 192, 38, 0.8);
  
@media screen and (min-width: 768px) {
  margin-right: 10px;
}

@media screen and (min-width: 1200px) {
  margin-right: 20px;
}  
  
  &:hover, :focus {
    background-color: #4C4556;
  } 
`;

export const ButtonBasket = styled(Button)`
  
`;

export const IconBasket = styled(ShoppingCartIcon)`
  fill: #ffffff;
`;

export const ButtonBack = styled(Button)`
  background-color: rgba(246, 192, 38, 0.8); 
  color: #ffffff;

  &:hover, :focus {
    background-color: #F6C026;
  }
`;

export const IconBackArrow = styled(WestIcon)`
  fill: #ffffff;
`;

export const ButtonOrderPay = styled(Button)`
  background-color: rgba(246, 192, 38, 0.8); 
  
  &:hover, :focus {
    background-color: #F6C026;
  }
`;
