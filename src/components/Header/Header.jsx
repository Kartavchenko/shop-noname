import Basket from "../Basket/Basket";
import SearchBar from "../Search/Search";
import {
  HeaderBox,
  LinkToLogin,
  LinkToRegister,
  BtnToRegister,
  BtnToLogin,
  NavBar,
  LogoTitle,
  LogoTitleSub,
  BoxAuthBtn,
  BoxUser,
  Logo,
  User,
  UserBtnProfile,
  UserIcon,
  LogoTitleMob,
  LogoTitleSubMob,
} from "./Header.styled";
import { useSelector } from "react-redux";
import { selectorIsLoggedInUser } from "../../redux/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  return (
    <HeaderBox component="header">
      <Logo to="/">
        <LogoTitleMob variant="h4">D</LogoTitleMob>
        <LogoTitleSubMob variant="h4">S</LogoTitleSubMob>
        <LogoTitle variant="h4">Digital</LogoTitle>
        <LogoTitleSub variant="h4">Store</LogoTitleSub>
      </Logo>
      <NavBar component="nav">
        <SearchBar />
        {isLoggedIn ? (
          <BoxUser>
            <User to="/profile/orders">
              <UserBtnProfile>
                <UserIcon />
              </UserBtnProfile>
            </User>
            <Basket />
          </BoxUser>
        ) : (
          <BoxAuthBtn>
            <LinkToLogin to="/login">
              <BtnToLogin variant="contained">Login In</BtnToLogin>
            </LinkToLogin>
            <LinkToRegister to="/register">
              <BtnToRegister variant="outlined">Registration</BtnToRegister>
            </LinkToRegister>
          </BoxAuthBtn>
        )}
      </NavBar>
    </HeaderBox>
  );
};

export default Header;
