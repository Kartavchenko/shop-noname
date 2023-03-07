import { loginWithGoogle } from "../../redux/authOperations";
import { useDispatch } from "react-redux";
import { LoginBtnGoogle, LoginIconGoogle } from "./LoginWithGoogle.styled";

const LoginWithGoogle = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <LoginBtnGoogle
      variant="contained"
      color="secondary"
      type="button"
      onClick={() => {
        dispatch(loginWithGoogle());
      }}
    >
      <LoginIconGoogle />
      {page} with Google
    </LoginBtnGoogle>
  );
};

export default LoginWithGoogle;
