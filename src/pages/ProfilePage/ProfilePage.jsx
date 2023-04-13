import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutAccount } from "../../redux/authOperations";
import {
  selectorIsLoggedInUser,
  selectorUserData,
} from "../../redux/selectors";
import {
  Container,
  UserNameText,
  LogOutBtn,
  LogOutIcon,
} from "./ProfilePage.styled";

const ProfilePage = () => {
  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const { name, email } = useSelector(selectorUserData);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/");
    }
  }, [navigation, isLoggedIn]);

  const logOutBtn = () => {
    dispatch(logOutAccount());
  };

  return (
    <Container>
      <h2>ProfilePage</h2>
      <UserNameText>{name ? name : email}</UserNameText>
      <NavLink to="/">{"<-"}Go to catalog</NavLink>
      <LogOutBtn type="button" onClick={logOutBtn}>
        LogOut
        <LogOutIcon />
      </LogOutBtn>
    </Container>
  );
};

export default ProfilePage;
