import { StyledButton } from "./styles";

interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  return <StyledButton type="submit">{text}</StyledButton>;
};

export default Button;
