import { StyledInput } from "./Styles";

interface IInput {
  placeholder: string,
}

const Input = ({placeholder}:IInput) => {
  return <StyledInput placeholder={placeholder} type="text"></StyledInput>;
};

export default Input;
