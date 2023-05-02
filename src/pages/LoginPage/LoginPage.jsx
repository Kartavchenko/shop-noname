import Login from "../../components/Login/Login";
import LoginWithGoogle from "../../components/LoginWithGoogle/LoginWithGoogle";
import { Typography } from "@mui/material";
import { Link, BoxLogin, TitleForm } from "./LoginPage.styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectorIsLoggedInUser } from "../../redux/selectors";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile/user");
    }
  }, [navigate, isLoggedIn]);

  return (
    <BoxLogin>
      <TitleForm variant="h4">Login</TitleForm>
      <Login />
      <Typography variant="overline">Or</Typography>
      <LoginWithGoogle page={"Login"} />
      <Link to="/register">Haven't account? go to Registration</Link>
    </BoxLogin>
  );
};

export default LoginPage;
