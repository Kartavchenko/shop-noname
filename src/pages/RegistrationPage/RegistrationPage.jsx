import Registration from "../../components/Registration/Registration";
import LoginWithGoogle from "../../components/LoginWithGoogle/LoginWithGoogle";
import { Typography } from "@mui/material";
import { Link, BoxRegister, TitleForm } from "./RegistrationPage.styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectorIsLoggedInUser } from "../../redux/selectors";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [navigate, isLoggedIn]);

  return (
    <BoxRegister>
      <TitleForm variant="h4">Register</TitleForm>
      <Registration />
      <Typography variant="overline">Or</Typography>
      <LoginWithGoogle page={"Registration"} />
      <Link to="/login">Alredy have account? go to Login</Link>
    </BoxRegister>
  );
};

export default RegistrationPage;
