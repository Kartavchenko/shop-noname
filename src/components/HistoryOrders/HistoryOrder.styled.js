import styled from '@emotion/styled';
import { Box, Typography, Button } from "@mui/material";

export const OrderList = styled(Box)`
  display: flex;
	flex-direction: column;
`;

export const BoxOrderTitle = styled(Box)`
  display: flex;
  margin-bottom: 10px;
`;

export const OrderItem = styled(Box)`  
  width: 100%;
  padding: 20px;
	margin-bottom: 20px;
  background-color: #333D51;
  border-radius: 10px;
  box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.1);

  &:last-child {
		margin-bottom: 0;
  }

  animation: item 600 ;

  @keyframes item {
    from {
      transform: transformY(100px);
    }
    to {
      transform: transformY(0);
    }
  }
`;

export const OrderListProducts = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemProduct = styled(Box)`
  border-bottom: 1px solid black;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const ProductItem = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ProductList = styled(Box)` 
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export const TitlesOrder = styled(Typography)`
  color: #CBD0D8;
  font-weight: 600;
`;

export const Text = styled.p`
  color: #CBD0D8;
`;

export const BoxOrders = styled(Box)`
  padding: 20px;
`;

export const BoxBtnLoadMore = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const ButtonLoadMore = styled(Button)`
  background-color: rgba(246, 192, 38, 0.8); 
  
  &:hover, :focus {
    background-color: #F6C026;
  }
`;