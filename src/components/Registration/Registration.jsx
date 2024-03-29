import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useDispatch } from "react-redux";
import { registerAccount } from "../../redux/authOperations";
import { Input, BtnRegister, Form } from "./Registration.styled";
import { schema } from "../../schemas/AuthSchema";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: joiResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(registerAccount(email, password));
  };

  return (
    <div>
      <Form component="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          color="warning"
          type="email"
          id="email"
          label="Email"
          name="email"
          placeholder="Write email"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <Input
          color="warning"
          type="password"
          id="password"
          label="Password"
          name="password"
          placeholder="Write password"
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          {...register("password")}
        />
        <BtnRegister type="submit" variant="contained">
          Registration
        </BtnRegister>
      </Form>
    </div>
  );
}

export default Registration;
