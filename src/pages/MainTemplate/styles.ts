import styled from "styled-components";
import { media } from "../../ui/media";

const StyledMainTemplate = styled.div`
  max-width: 1920px;
  width: 100%;

  margin: 0 auto;
`;

const StyledContainer = styled.div`
  position: relative;
  display: block;
  max-width: 1160px;
  padding: 0 40px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  ${media.PHONE} {
    padding: 24px;
  }
`;

export { StyledMainTemplate, StyledContainer };
