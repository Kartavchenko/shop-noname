import Basket from "../Basket/Basket";
import {
  HeaderBox,
  LinkToLogin,
  LinkToRegister,
  BtnToRegister,
  BtnToLogin,
  NavBar,
  LogoTitle,
  LogoTitleSub,
  LogOutBtn,
  LogOutIcon,
  BoxAuthBtn,
  BoxUser,
  Logo,
  User,
  UserProfile,
  UserIcon,
} from "./Header.styled";
import { logOutAccount } from "../../redux/authOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorIsLoggedInUser,
  selectorUserDate,
} from "../../redux/selectors";

const Header = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const userData = useSelector(selectorUserDate);

  return (
    <HeaderBox component="header">
      <Logo to="/">
        <LogoTitle variant="h4">Digital</LogoTitle>
        <LogoTitleSub variant="h4">Store</LogoTitleSub>
      </Logo>
      <NavBar component="nav">
        {isLoggedIn ? (
          <BoxUser>
            <User to="/profile">
              <UserProfile>
                <UserIcon />
                {userData.email}
              </UserProfile>
            </User>
            <Basket />
            <LogOutBtn type="button" onClick={() => dispatch(logOutAccount())}>
              LogOut
              <LogOutIcon />
            </LogOutBtn>
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
