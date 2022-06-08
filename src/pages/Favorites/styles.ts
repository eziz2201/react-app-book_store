import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledFavorites = styled.div`
  padding: 77px 0 150px;
`;
const StyledBackButton = styled.div`
  cursor: pointer;
  path {
    fill: ${colors.PRIMARY};
  }
`;

const StyledTitle = styled.h1`
  margin-top: 37px;
  margin-bottom: 50px;
  ${typography.H1}
  color: ${colors.PRIMARY};
`;

const StyledText = styled.p`
  text-align: center;
  margin-bottom: 50px;
  ${typography.H3}
  color: ${colors.PRIMARY};
`;

const StyledSliderTitle = styled.h2`
  ${typography.H2};
  color: ${colors.PRIMARY};
  margin-bottom: 30px;
`;

export {
  StyledBackButton,
  StyledFavorites,
  StyledText,
  StyledTitle,
  StyledSliderTitle,
};
