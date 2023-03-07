import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Home;
