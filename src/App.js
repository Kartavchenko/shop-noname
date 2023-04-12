import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFoundPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="profile" element={<ProfilePage/>} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
        <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
