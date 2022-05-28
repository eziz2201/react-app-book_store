import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
import { setUser } from "../../store/slices/userSlice";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";

interface ISign {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const { register, handleSubmit } = useForm<ISign>();
  const onSubmit = (data: ISign) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        navigate(`/${routes.ACCOUNT}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          setErrorEmail("Sorry, that email address is incorrect!");
        } else {
          setErrorPassword("Sorry, that password is incorrect!");
          setErrorEmail("");
        }
      });
  };
  return (
    <StyledSign>
      <StyledTabs>
        <StyledTab>SIGN IN</StyledTab>
        <StyledTab onClick={() => navigate(`/${routes.SIGN_UP}`)}>SIGN UP</StyledTab>
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
          {errorPassword !== "" ? (
            <StyledErrorLabel htmlFor="password">
              {errorPassword}
            </StyledErrorLabel>
          ) : (
            <></>
          )}
        </StyledContainer>
        <Button text="SIGN IN" />
      </StyledForm>
    </StyledSign>
  );
};

export default SignIn;
