import SvgSelectors from "../../assets/SvgSelectors";
import { StyledButton } from "./styles";

const CancelButton = () => {
  return (
    <StyledButton>
      <SvgSelectors id="cancel" />
    </StyledButton>
  );
};

export default CancelButton;
