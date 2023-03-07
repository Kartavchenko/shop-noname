import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorIsLoggedInUser } from "../../redux/selectors";

const ProfilePage = () => {
  const isLoggedIn = useSelector(selectorIsLoggedInUser);

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
    </div>
  );
};

export default ProfilePage;
