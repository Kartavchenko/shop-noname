import { useDispatch } from "react-redux";
import { userIsLoggedIn } from "../../redux/userSlice";
import { loginWithGoogle } from "../../redux/authOperations";
import { LoginBtnGoogle, LoginIconGoogle } from "./LoginWithGoogle.styled";

const LoginWithGoogle = ({ page }) => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = async () => {
    try {
      const userData = await loginWithGoogle();

      await dispatch(userIsLoggedIn(userData));
    } catch (error) {
      return error.message;
    }
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
};

export default LoginWithGoogle;
