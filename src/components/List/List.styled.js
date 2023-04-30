import styled from '@emotion/styled';
import { Button, Box } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddTaskIcon from "@mui/icons-material/AddTask";

export const Card = styled(Box)`
  margin-left: 20px;
  margin-top: 20px;

  position: relative;

  animation: card 500ms ease-in-out;

  @keyframes card {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
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

  .show-description {
    opacity: 0;
  }
  /* при наведенні на опис показувати додаткові данні, 
  не на картинку  */
  &:hover .show-description {
    opacity: 1;
    animation: show 500ms ease-in-out;
    
    @keyframes show {
      from {
        transform: translateY(100px);
      }
      to {
        transform: translateY(0);
      }
    }
  }

`;

export const ItemCard = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  color: #CBD0D8;
`;

export const ImageCard = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
`;

export const ImagePlug = styled.div`
  width: 300px;
  height: 250px;
  background-color: #e1e1e1;
`;

export const TextDescription = styled.p`
  position: absolute;
  background-color: #333D51;
  border-radius: 10px;
  padding: 5px;
  top: 100px;
`;

export const ButtonBasket = styled(Button)`
  min-width: 0;
  padding: 0;
  margin-left: 40px;
`;

export const IconAddToBasket = styled(AddShoppingCartIcon)`
  fill: #D3AC2B; 
  transition: transform 250ms, cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover, :focus {
    scale: 1.1;
  }
`;

export const IconAdded = styled(AddTaskIcon)`
  fill: #D3AC2B;
  transition: transform 500ms;

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