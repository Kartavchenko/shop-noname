import styled from '@emotion/styled';
import { Button, Box, TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckIcon from '@mui/icons-material/Check';

export const Container = styled(Box)`
  padding: 20px;
`;

export const GoCatalogButton = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  color: #CBD0D8;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    color: #ffffff;
    background-color: #D3AC2B;
    }
`;

export const Input = styled(TextField)`
  
  & .MuiInputLabel-root  {
    color: #CBD0D8;
  }

  & .MuiOutlinedInput-root {
    color: #CBD0D8;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: rgba(246, 192, 38, 0.8);
      color: #ffffff;
    }

    &:hover fieldset {
      border-color: #F6C026;
    }
  }
`;

export const Form = styled.form`
  display: flex;
`;

export const BtnChangeName = styled(Button)`
  width: 150px;
  background-color: rgba(246, 192, 38, 0.8); 
  
  &:hover, :focus {
    background-color: #F6C026;
  }
`;

export const CheckIconStyled = styled(CheckIcon)`
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BoxTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const LogOutBtn = styled(Button)`
  margin-top: 20px;
  width: 150px;
  color: #D3AC2B;
`;

export const LogOutIcon = styled(LogoutIcon)`
  margin-left: 5px;
  fill: #D3AC2B;
`;