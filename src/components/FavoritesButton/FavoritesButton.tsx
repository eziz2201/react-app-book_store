import SvgSelectors from "../../assets/SvgSelectors";
import { StyledButton } from "./styles";

const FavoritesButton = () => {
  return (
    <StyledButton>
      <SvgSelectors id="favorites" />
    </StyledButton>
  );
};

export default FavoritesButton;
