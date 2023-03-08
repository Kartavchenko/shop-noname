import { useState } from "react";
import { loginInAccount } from "../../redux/authOperations";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, BtnLogin, Form, BoxForm } from "./Login.styled";
import { selectorIsLoggedInUser, selectorError } from "../../redux/selectors";

const Login = () => {
  const [loginForm, setLoginForm] = useState(null);
  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  const isError = useSelector(selectorError);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(loginInAccount(loginForm));
    if (isLoggedIn) {
      form.reset();
      navigation("/");
    }
  };

  return (
    <BoxForm>
      <Form component="form" onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Write email"
          error={Boolean(isError)}
          helperText={isError ? "wrong email or password" : false}
          onChange={(e) => {
            setLoginForm((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Write password"
          error={Boolean(isError)}
          onChange={(e) => {
            setLoginForm((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
        />
        <BtnLogin type="submit" variant="contained">
          Login In
        </BtnLogin>
      </Form>
    </BoxForm>
  );
};

export default Login;
