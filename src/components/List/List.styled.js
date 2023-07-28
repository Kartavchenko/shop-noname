import styled from '@emotion/styled';
import { Button, Box, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddTaskIcon from "@mui/icons-material/AddTask";

export const Card = styled(Box)`
  margin-left: 20px;
  margin-top: 20px;

  position: relative;
`;

export const ItemsList = styled(Box)`
  box-shadow: 0 3px 15px 7px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 300px;
  min-height: 400px;
  justify-content: center;
  background-color: #333D51;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemCard = styled(Box)`
  display: flex;
  justify-content: center;
  color: #CBD0D8;
`;

export const ImageCard = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 5px;
  animation: show;
  filter: ${props => props.showDescription && "blur(5px)"};
`;

export const TextCard = styled(Typography)`
  padding-right: 10px;
  padding-left: 10px;
`;

export const ImagePlug = styled.div`
  width: 300px;
  height: 250px;
  background-color: #e1e1e1;
`;

export const TextDescription = styled.p`
  position: absolute;
  color: #CBD0D8;
  background-color: #333D51;
  border-radius: 10px;
  padding: 5px;
  top: 150px;
  opacity: ${props => props.showDescription ? 1 : 0};
      
    &.hide {

      animation: hide 300ms ease-in;
      
      @keyframes hide {
        from {
          transform: translateY(0);
          opacity: ${props => props.showDescription ? 1 : 0};
        }
        to {
          transform: translateY(100%);
          opacity: 0;
        }
      }
    }

    &.show {
      opacity: 1;

      animation: show 300ms ease-in;
      
      @keyframes show {
        from {
          opacity: 0;
          transform: translateY(100%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    
`;

export const ButtonBasket = styled(Button)`
  min-width: 0;
  padding: 0;
  margin-left: 40px;
`;

export const IconAddToBasket = styled(AddShoppingCartIcon)`
  fill: #D3AC2B; 
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover, :focus {
    scale: 1.1;
  }
`;

export const IconAdded = styled(AddTaskIcon)`
  fill: #D3AC2B;

  animation: mount 500ms ease-in-out;
  
  @keyframes mount {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;