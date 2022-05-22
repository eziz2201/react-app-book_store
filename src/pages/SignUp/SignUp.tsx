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
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<ISign>();
  const onSubmit = (data: ISign) => console.log(data);
  return (
    <StyledSign>
      <StyledTabs>
        <StyledTab onClick={() => navigate(routes.SIGN_IN)}>SIGN IN</StyledTab>
        <StyledTab>SIGN UP</StyledTab>
      </StyledTabs>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledContainer>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            {...register("name")}
            placeholder="Your name"
            id="name"
            type="text"
          />
        </StyledContainer>
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
        <StyledContainer>
          <StyledLabel htmlFor="confirmPassword">Confirm password</StyledLabel>
          <StyledInput
            {...register("confirmPassword", {
              minLength: 6,
            })}
            placeholder="Confirm your password"
            id="confirmPassword"
            type="password"
          />
        </StyledContainer>
        <Button text="SIGN UP" />
      </StyledForm>
    </StyledSign>
  );
};

export default SignUp;
