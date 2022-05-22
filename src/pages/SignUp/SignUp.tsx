import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  StyledContainer,
  StyledErrorLabel,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSign,
  StyledTab,
  StyledTabs,
} from "./styles";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userReducer";
import { useState } from "react";

interface ISign {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = useState("");
  const { register, handleSubmit } = useForm<ISign>();
  const onSubmit = (data: ISign) => {
    if (data.password === data.confirmPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          dispatch(setUser(userCredential.user.email));
          navigate(routes.ACCOUNT);
        })
        .catch((error) => {
          setErrorEmail("Sorry, that email address is already used!");
        });
    } else {
      alert("Password and confirm password does not match!");
    }
  };
  return (
    <StyledSign>
      <StyledTabs>
        <StyledTab onClick={() => navigate(routes.SIGN_IN)}>SIGN IN</StyledTab>
        <StyledTab>SIGN UP</StyledTab>
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
          {errorEmail !== "" ? (
            <StyledErrorLabel htmlFor="email">{errorEmail}</StyledErrorLabel>
          ) : (
            <></>
          )}
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
