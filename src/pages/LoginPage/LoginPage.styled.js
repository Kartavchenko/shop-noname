import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from "@mui/material";

export const BoxLogin = styled(Box)`
  display: flex;
	flex-direction: column;
	align-items: center;
  height: calc(100vh - 100px);
  overflow: hidden;
`;

export const TitleForm = styled(Typography)`
  margin-top: 50px;
	margin-bottom: 50px;
`;

export const Link = styled(NavLink)`
  
`;