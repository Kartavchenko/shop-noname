import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsLoggedInUser } from "../../redux/selectors";
import { logOutAccount } from "../../redux/authOperations";
import { LogOutBtn, LogOutIcon } from "./ProfilePage.styled";

const ProfilePage = () => {
  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      <h2>ProfilePage</h2>
      <NavLink to="/">Go to store</NavLink>
      <LogOutBtn type="button" onClick={() => dispatch(logOutAccount())}>
        LogOut
        <LogOutIcon />
      </LogOutBtn>
    </div>
  );
};

export default ProfilePage;
