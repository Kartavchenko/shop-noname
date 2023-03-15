import styled from '@emotion/styled';
import { Box, Button, Typography, Link } from "@mui/material";
import { NavLink } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const HeaderBox = styled(Box)`
  padding: 0 10px 0 10px;
  display: flex;
  background-color: #332c2c;
  height: 60px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px){
    padding: 0 20px 0 20px;
  }
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

export const UserIcon = styled(PersonOutlineIcon)`
  color: rgba(135, 31, 255, 0.8);
  align-items: center;
  color: white;
`;

export const User = styled(NavLink)`

`;

export const UserBtnProfile = styled(Button)`
  text-transform: none;
  
  @media screen and (min-width: 768px) {
    margin-right: 5px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 10px;
  }

  &:hover, :focus {
    background-color: #4e4e4e;
  } 
`;

export const BoxAuthBtn = styled(Box)`
  
`;

export const Logo = styled(NavLink)`
  display: flex;
`;

export const LogoTitleMob = styled(Typography)`
  color: #a103fc;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoTitleSubMob = styled(Typography)`
  color: #5e03ff;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoTitle = styled(Typography)`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    color: #a103fc;
  }
`;

export const LogoTitleSub = styled(Typography)`
  display: none;
  
  @media screen and (min-width: 768px) {
    display: inline;
    color: #5e03ff;
  }
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

