import { StyledTab, StyledTabList } from "./styles";

const Tabs = () => {
  return (
    <StyledTabList>
      <StyledTab>Description</StyledTab>
      <StyledTab>Authors</StyledTab>
      <StyledTab>Reviews</StyledTab>
    </StyledTabList>
  );
};

export default Tabs;
