import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, BoxContent } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { BarsLoader } from "../../components/loaders/LoaderBars";

const Home = () => {
  return (
    <Container>
      <Header />
      <BoxContent>
        <Suspense fallback={<BarsLoader />}>
          <Outlet />
        </Suspense>
      </BoxContent>
      <Footer />
    </Container>
  );
};

export default Home;
