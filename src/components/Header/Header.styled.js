import styled from '@emotion/styled';
import { Box, Button, Typography, Link } from "@mui/material";
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const HeaderBox = styled(Box)`
  padding: 0 40px 0 40px;
  display: flex;
  background-color: rgba(135, 31, 255, 0.1);
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled(Box)`
  display: flex;
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const BoxUser = styled(Box)`
  display: flex;
`;

export const UserIcon = styled(AccountBoxIcon)`
  color: rgba(135, 31, 255, 0.8);
  align-items: center;
`;

export const User = styled(NavLink)`

`;

export const UserProfile = styled(Button)`
  text-transform: none;
  margin-right: 10px;
`;

export const BoxAuthBtn = styled(Box)`
  
`;

export const Logo = styled(NavLink)`
  display: flex;
`;

export const LogoTitle = styled(Typography)`
  color: rgba(161, 3, 252, 1);
`;

export const LogoTitleSub = styled(Typography)`
  color: rgba(94, 3, 255, 1);
`;

export const LogOutBtn = styled(Button)`
  
`;

export const LogOutIcon = styled(LogoutIcon)`
  margin-left: 5px;
`;

export const LinkToLogin = styled(NavLink)`
  text-decoration: none;
`;

export const BtnToLogin = styled(Button)`
  margin-right: 20px;
`;

export const LinkToRegister = styled(NavLink)`
  text-decoration: none;
`;

export const BtnToRegister = styled(Button)`

`;

