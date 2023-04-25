import styled from '@emotion/styled';
import { Box, Typography } from "@mui/material";

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
  background-color: rgba(255, 234, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);

  &:last-child {
		margin-bottom: 0;
  }
`;

export const OrderListProducts = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ItemProduct = styled(Box)`
  margin-right: 10px;
  border-bottom: 1px solid black;
  
  &:last-child {
    border-bottom: none;
    margin-right: 0;
  }
`;

export const ProductItem = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-right: 30px;

`;

export const ProductList = styled(Box)` 
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 5px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const TitlesOrder = styled(Typography)`
  font-weight: 600;
`;

export const BoxOrders = styled(Box)`
  padding: 20px;
`;