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
  color: #000000;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    background-color: #f5f5f5;
    }
`;

export const InputName = styled(TextField)`

`;

export const Form = styled.form`
  display: flex;
`;

export const BtnChangeName = styled(Button)`
  width: 150px;
`;

export const CheckIconStyled = styled(CheckIcon)`
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BoxTitleLogout = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const LogOutBtn = styled(Button)`
  margin-top: 20px;
  width: 150px;
`;

export const LogOutIcon = styled(LogoutIcon)`
  margin-left: 5px;
`;