import styled from '@emotion/styled';
import { TextField, Button } from "@mui/material";

export const SearchField = styled(TextField)`
  background-color: #CBD0D8;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 5px;

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-right: 10px;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const BtnSearch = styled(Button)`
  display: none;
  
  @media screen and (min-width: 768px){
    display: block;
  }
`;