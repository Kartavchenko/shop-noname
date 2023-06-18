import styled from '@emotion/styled';
import { Box } from "@mui/material";

export const ItemContainer = styled(Box)`
  display: flex;
  justify-content: center;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
	margin-bottom: 20px;
`;

export const Item = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
`;