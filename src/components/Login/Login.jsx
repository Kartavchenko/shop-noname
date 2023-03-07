import { useState } from "react";
import { loginInAccount } from "../../redux/authOperations";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input, BtnLogin, Form, BoxForm } from "./Login.styled";

const Login = () => {
  const [loginForm, setLoginForm] = useState(null);
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(loginInAccount(loginForm));
    form.reset();
    navigation("/");
  };

  return (
    <BoxForm>
      <Form component="form" onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Write email"
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
