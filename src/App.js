import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFoundPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const HistoryOrders = lazy(() => import("./components/HistoryOrders/HistoryOrders"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const WishList = lazy(() => import("./components/WishList/WishList"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<CatalogPage />} />
        <Route path="profile" element={<ProfilePage />} >
          <Route index element={ <Profile/>} />
          <Route path="orders" element={<HistoryOrders />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
