import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutAccount } from "../../redux/authOperations";
import {
  selectorIsLoggedInUser,
  selectorUserData,
} from "../../redux/selectors";
import { Container, LogOutBtn, LogOutIcon } from "./ProfilePage.styled";
import Profile from "../../components/Profile/Profile";

const ProfilePage = () => {
  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const userName = useSelector(selectorUserData);

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
      <Profile userName={userName} />
      <LogOutBtn type="button" onClick={logOutBtn}>
        LogOut
        <LogOutIcon />
      </LogOutBtn>
    </Container>
  );
};

export default ProfilePage;
