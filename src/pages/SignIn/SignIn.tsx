import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSign,
  StyledTab,
  StyledTabs,
} from "./styles";

interface ISign {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<ISign>();
  const onSubmit = (data: ISign) => console.log(data);
  return (
    <StyledSign>
      <StyledTabs>
        <StyledTab>SIGN IN</StyledTab>
        <StyledTab onClick={() => navigate(routes.SIGN_UP)}>SIGN UP</StyledTab>
      </StyledTabs>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledContainer>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            {...register("email")}
            placeholder="Your email"
            id="email"
            type="email"
          />
        </StyledContainer>
        <StyledContainer>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            {...register("password", {
              minLength: 6,
            })}
            placeholder="Your password"
            id="password"
            type="password"
          />
        </StyledContainer>
        <Button text="SIGN IN" />
      </StyledForm>
    </StyledSign>
  );
};

export default SignIn;
