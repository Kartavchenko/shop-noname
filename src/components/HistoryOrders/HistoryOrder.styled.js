import styled from '@emotion/styled';
import { Box, Typography } from "@mui/material";

export const OrderList = styled(Box)`
  display: flex;
	flex-direction: column;
`;

export const BoxOrderTitle = styled(Box)`
  display: flex;
`;

export const OrderItem = styled(Box)`  
  width: 100%;
  padding: 20px;
	margin-bottom: 20px;
  background-color: #d4d4d4;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  &:last-child {
		margin-bottom: 0;
  }
`;

export const SubListOrder = styled(Box)`
  display: flex;
`;

export const Order = styled(Box)` 
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const TitlesOrder = styled(Typography)`
  font-weight: 600;
`;

export const BoxOrders = styled(Box)`
  padding: 20px;
`;