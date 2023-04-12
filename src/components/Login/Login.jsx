import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, BtnLogin, Form, BoxForm } from "./Login.styled";
import { userIsLoggedIn } from "../../redux/userSlice";
import { loginAccount } from "../../redux/authOperations";
import { selectorIsLoggedInUser, selectorError } from "../../redux/selectors";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  const isError = useSelector(selectorError);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userData = await loginAccount(userEmail, userPassword);

    await dispatch(userIsLoggedIn(userData));

    if (isLoggedIn) {
      form.reset();
      navigation("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setUserEmail(value);
        break;
      case "password":
        setUserPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <BoxForm>
      <Form component="form" onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          label="Email"
          name="email"
          placeholder="Write email"
          error={Boolean(isError)}
          helperText={isError ? "wrong email or password" : false}
          onChange={handleChange}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          name="password"
          placeholder="Write password"
          error={Boolean(isError)}
          onChange={handleChange}
        />
        <BtnLogin type="submit" variant="contained">
          Login In
        </BtnLogin>
      </Form>
    </BoxForm>
  );
};

export default Login;
