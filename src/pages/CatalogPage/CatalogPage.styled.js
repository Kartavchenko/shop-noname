import styled from '@emotion/styled';
import { Box } from "@mui/material";
import { Pagination } from "@mui/material";

export const Main = styled.main`
  background: #433E49;
`;

export const BoxLoading = styled.div`
  position: relative;
  width: 90vw;
  height: 90vh;
`;

export const BoxList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -20px;
`;

export const BoxPagination = styled(Box)`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const PaginationStyled = styled(Pagination)`
  
  & .MuiPaginationItem-root {
    color: #CBD0D8;
    border-color: #CBD0D8;
  }
`;

export const TextFail = styled.h2`
  display: flex;
  justify-content: center;
  color: #CBD0D8;
`;