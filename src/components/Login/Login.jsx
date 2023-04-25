import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, BtnLogin, Form, BoxForm } from "./Login.styled";
import { loginAccount } from "../../redux/authOperations";
import { selectorIsLoggedInUser } from "../../redux/selectors";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(loginAccount(userEmail, userPassword));

    if (isLoggedIn) {
      form.reset();
      navigation("/catalog");
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
          onChange={handleChange}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          name="password"
          placeholder="Write password"
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
