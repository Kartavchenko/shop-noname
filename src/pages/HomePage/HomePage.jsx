import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, BoxContent } from "./HomePage.styled";

const Home = () => {
  return (
    <Container>
      <Header />
      <BoxContent>
        <Suspense>
          <Outlet />
        </Suspense>
      </BoxContent>
      <Footer />
    </Container>
  );
};

export default Home;
