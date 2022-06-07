import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledAccount = styled.div`
  max-width: 544px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  border: 1px solid ${colors.GRAY};
  ${media.TABLET} {
    margin-top: 170px;
    margin-bottom: 169px;
  }
  ${media.PHONE} {
    border: none;
    margin: 56px 0;
  }
`;

const StyledTitle = styled.h2`
  padding: 15px 0;
  border-bottom: 1px solid ${colors.GRAY};
  ${typography.H2}
  color: ${colors.PRIMARY};
  text-align: center;
`;
const StyledSubtitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 200px;
  ${typography.S1}
  color: ${colors.PRIMARY};
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  span {
    text-transform: lowercase;
    color: ${colors.SECONDARY};
  }
`;
const StyledButton = styled.div`
  width: 100%;
  background-color: ${colors.WHITE};
`;

export { StyledAccount, StyledTitle, StyledSubtitle, StyledButton };
