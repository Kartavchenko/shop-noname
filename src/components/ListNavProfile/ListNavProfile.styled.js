import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Box } from "@mui/material";

export const Container = styled(Box)`
  width: 300px;
  height: 100vh;
  border-right: 1px solid #e0e0e0;
  

  @media screen and (max-width: 768px) {

  }
`;

export const BoxNav = styled(Box)`
  padding: 5px;

  &:first-of-type {
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const NavUser = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  font-weight: 500;
  color: #000000;
  
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${props => props.active ? "#f5f5f5" : "transparent" };
  
  &:hover, &:focus {
    background-color: #f5f5f5;
  }
`;