import styled from '@emotion/styled';
import { Box, Typography } from "@mui/material";

export const OrderList = styled(Box)`
  display: flex;
	flex-direction: column;
`;

export const OrderItems = styled(Box)`
  width: 220px;
  padding: 20px;
  margin-right: 20px;
	margin-bottom: 20px;
  background-color: #d4d4d4;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
		margin-bottom: 0;
  }
`;

export const Order = styled(Box)`
  display: flex;
  flex-direction: column;
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
	position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 260px;
	background: white;
  border: 2px solid #000;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	padding: 20px 20px 40px 20px;
`;