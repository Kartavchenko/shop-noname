import styled from '@emotion/styled';
import { Button, Box } from "@mui/material";
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

export const Container = styled(Box)`
  padding: 20px;
`;

export const GoCatalogButton = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: 500;
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

export const LogOutBtn = styled(Button)`
  margin-top: 20px;
  width: 150px;
`;

export const LogOutIcon = styled(LogoutIcon)`
  margin-left: 5px;
`;