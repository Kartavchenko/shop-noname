import styled from '@emotion/styled';
import { Box, Button, Typography, Link } from "@mui/material";
import { NavLink } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GridViewIcon from '@mui/icons-material/GridView';
import WidgetsIcon from '@mui/icons-material/Widgets';

export const HeaderBox = styled(Box)`
  padding: 0 10px 0 10px;
  display: flex;
  background-color: #433E49;
  height: 60px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px){
    padding: 0 20px 0 20px;
  }
`;

export const BoxFilterBtns = styled(Box)`
  position: absolute;
  top: 60px;
  background-color: #433E49;
  z-index: 10;
`;

export const GridFilterBtn = styled(Button)`
  min-width: 40px;
  background-color: #D3AC2B;
  margin-left: 5px;

  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  
  &:hover, :focus {
    background-color: #F6C026;
  }
`;

export const GridFilterIconOpen = styled(WidgetsIcon)`
  color: #433E49;
`;

export const GridFilterIconClose = styled(GridViewIcon)`
  color: #433E49;
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
  align-items: center;
  fill: #ffffff;
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
    background-color: #4C4556;
    
  } 
`;

export const BoxAuthBtn = styled(Box)`
  
`;

export const Logo = styled(NavLink)`
  display: flex;
`;

export const LogoTitleMob = styled(Typography)`
  color: rgba(246, 192, 38, 0.8);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoTitleSubMob = styled(Typography)`
  color: #F6C026;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoTitle = styled(Typography)`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    color: rgba(246, 192, 38, 0.8);
  }
`;

export const LogoTitleSub = styled(Typography)`
  display: none;
  
  @media screen and (min-width: 768px) {
    display: inline;
    color: rgba(246, 192, 38, 0.8);
  }
`;

export const LinkToLogin = styled(NavLink)`
  text-decoration: none;
`;

export const BtnToLogin = styled(Button)`
  margin-right: 20px;

  background-color: rgba(246, 192, 38, 0.8); 

  &:hover, :focus {
    background-color: #F6C026;
  }
`;

export const LinkToRegister = styled(NavLink)`
  text-decoration: none;
`;

export const BtnToRegister = styled(Button)`
  border-color: rgba(246, 192, 38, 0.8); 
  color: #CBD0D8;
  
  &:hover, :focus {
    border-color: #F6C026;
  }
`;

