import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useDispatch } from "react-redux";
import { Input, BtnLogin, Form, BoxForm } from "./Login.styled";
import { loginAccount } from "../../redux/authOperations";
import { schema } from "../../schemas/AuthSchema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: joiResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (value) => {
    dispatch(loginAccount(value.email, value.password));
  };

  return (
    <BoxForm>
      <Form component="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Write email"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Write password"
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          {...register("password")}
        />
        <BtnLogin type="submit" variant="contained">
          Login In
        </BtnLogin>
      </Form>
    </BoxForm>
  );
};

export default Login;
