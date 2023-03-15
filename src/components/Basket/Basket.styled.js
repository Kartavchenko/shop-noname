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
`;

export const ModalBack = styled(DialogActions)`
  justify-content: flex-start;
`;

export const ModalTitle = styled(DialogTitle)`
  text-align: center;
`;

export const ModalContainer = styled(DialogContent)`
	min-width: 500px;
	min-height: 400px;
`;

export const IconRemoveFromBasket = styled(RemoveShoppingCartIcon)`
  
`;

export const UsersBasket = styled(Button)`

@media screen and (min-width: 768px) {
  margin-right: 10px;
}

@media screen and (min-width: 1200px) {
  margin-right: 20px;
}  
  
  &:hover, :focus {
    background-color: #4e4e4e;
  } 
`;

export const ButtonBasket = styled(Button)`
  
`;

export const IconBasket = styled(ShoppingCartIcon)`
  color: #ffffff;
`;

export const IconBackArrow = styled(WestIcon)`
  
`;
