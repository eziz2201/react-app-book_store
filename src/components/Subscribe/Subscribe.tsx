import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledSubscribe,
  StyledText,
  StyledTitle,
} from "./styles";

interface IData {
  email: string;
}

const Subscribe = () => {
  const { register, handleSubmit, reset } = useForm<IData>();

  const onSubmit = (data: IData) => {
    reset();
  };
  return (
    <StyledSubscribe>
      <StyledTitle>Subscribe to Newsletter</StyledTitle>
      <StyledText>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </StyledText>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          placeholder="Your email"
          type="text"
          {...register("email")}
        />
        <StyledButton>
          <Button text="Subscribe" />
        </StyledButton>
      </StyledForm>
    </StyledSubscribe>
  );
};

export default Subscribe;
