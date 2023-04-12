import styled from '@emotion/styled';
import { Button, Box, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const UserNameText = styled(Typography)`
  font-size: 16px;
  text-transform: uppercase;
`;

export const LogOutBtn = styled(Button)`
  margin-top: 20px;
  width: 150px;
`;

export const LogOutIcon = styled(LogoutIcon)`
  margin-left: 5px;
`;