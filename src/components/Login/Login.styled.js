import styled from '@emotion/styled';
import { TextField, Button, Box } from "@mui/material";

export const BoxForm = styled(Box)`
  display: flex;
`;

export const Form = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Input = styled(TextField)`
  width: 350px;
	margin-bottom: 15px;

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

export const BtnLogin = styled(Button)`

`;