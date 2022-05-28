import IconSelector from "../IconSelector/IconSelector";
import { StyledButton } from "./styles";

const FavoritesButton = () => {
  return (
    <StyledButton>
      <IconSelector id="favorites" />
    </StyledButton>
  );
};

export default FavoritesButton;
