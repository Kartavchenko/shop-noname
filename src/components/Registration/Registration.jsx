import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectorIsLoggedInUser } from "../../redux/selectors";
import { userIsLoggedIn } from "../../redux/userSlice";
import { registerAccount } from "../../redux/authOperations";
import { Input, BtnRegister, Form } from "./Registration.styled";

const Registration = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userData = await registerAccount(userEmail, userPassword);

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
    <div>
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
        <BtnRegister type="submit" variant="contained">
          Registration
        </BtnRegister>
      </Form>
    </div>
  );
};

export default Registration;
