import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Button, Box } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const BoxNavUser = styled(Box)`
  padding: 20px;
`;

export const NavUser = styled(NavLink)`
  padding: 20px;
  border-radius: 8px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover, &:focus {
    background-color: #f5f5f5;
  }
`;

export const BoxNavOrders = styled(Box)`
  padding: 20px;
`;

export const NavOrders = styled(NavLink)`
  padding: 20px;
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover, &:focus {
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