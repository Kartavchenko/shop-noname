import styled from '@emotion/styled';
import { Button } from "@mui/material";

export const SortBtn = styled(Button)`
  display: flex;
  justify-content: flex-start;
  color: #F6C026;
  text-transform: none;
  

  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;

  &:hover, :focus {
      color: #ffffff;
    }
`;