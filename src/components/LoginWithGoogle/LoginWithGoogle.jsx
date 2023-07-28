import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../../redux/authOperations";
import { LoginBtnGoogle, LoginIconGoogle } from "./LoginWithGoogle.styled";

function LoginWithGoogle({ page }) {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <LoginBtnGoogle
      variant="contained"
      color="secondary"
      type="button"
      onClick={handleLoginWithGoogle}
    >
      <LoginIconGoogle />
      {page} with Google
    </LoginBtnGoogle>
  );
}

export default LoginWithGoogle;
