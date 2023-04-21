import styled from '@emotion/styled';
import { Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';

export const UserNameText = styled(Typography)`
  font-size: 16px;
  text-transform: uppercase;
`;

export const GoCatalogButton = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: 700;
  width: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #000000;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    background-color: #f5f5f5;
    
    }
`;