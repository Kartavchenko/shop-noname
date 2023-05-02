import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from "@mui/material";

export const BoxLogin = styled(Box)`
  display: flex;
	flex-direction: column;
	align-items: center;
  overflow: hidden;
`;

export const TitleForm = styled(Typography)`
  margin-top: 50px;
	margin-bottom: 50px;
  color: #CBD0D8;
`;

export const Link = styled(NavLink)`
  color: rgba(246, 192, 38, 0.8); 
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) ;
  
  &:hover, :focus {
    color: #F6C026;
  }
`;