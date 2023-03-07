import { useState } from "react";
import { Input, BtnRegister, Form } from "./Registration.styled";
import { createAccount } from "../../redux/authOperations";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [registerForm, setRegisterForm] = useState(null);
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    createAccount(registerForm);
    form.reset();
    navigation("/");
  };

  return (
    <div>
      <Form component="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          label="User Name"
          placeholder="write name"
          onChange={(e) => {
            setRegisterForm((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Write email"
          onChange={(e) => {
            setRegisterForm((prevState) => ({
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
            setRegisterForm((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
        />
        <BtnRegister type="submit" variant="contained">
          Registration
        </BtnRegister>
      </Form>
    </div>
  );
};

export default Registration;
