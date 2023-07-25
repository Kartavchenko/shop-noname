import { useState } from "react";
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
  BoxFilterBtns,
  GridFilterBtn,
  GridFilterIconOpen,
  GridFilterIconClose,
} from "./Header.styled";
import { useSelector } from "react-redux";
import { selectorIsLoggedInUser } from "../../redux/selectors";
import Category from "../../components/Category/Category";

function Header() {
  const [filterBtn, setFilterBtn] = useState(false);

  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  return (
    <HeaderBox component="header">
      <Logo to="/">
        <LogoTitleMob variant="h4">P</LogoTitleMob>
        <LogoTitleSubMob variant="h4">S</LogoTitleSubMob>
        <LogoTitle variant="h4">Product</LogoTitle>
        <LogoTitleSub variant="h4">Store</LogoTitleSub>
      </Logo>
      <NavBar component="nav">
        <GridFilterBtn type="button" onClick={() => setFilterBtn(!filterBtn)}>
          {filterBtn ? <GridFilterIconOpen /> : <GridFilterIconClose />}
        </GridFilterBtn>
        <BoxFilterBtns>
          {filterBtn && <Category setFilterBtn={setFilterBtn} />}
        </BoxFilterBtns>
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
}

export default Header;
