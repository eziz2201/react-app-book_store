import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledFavoriteBook = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  border-bottom: 1px solid ${colors.GRAY};
  margin-bottom: 50px;
`;

const StyledImage = styled.div`
  margin-bottom: 49px;
  width: 256px;
  height: 192px;
  background-color: greenyellow;
  img {
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 100%;
  }
`;

const StyledBookInfo = styled.div``;

const StyledTitle = styled.h3`
  margin-top: 26px;
  margin-bottom: 10px;
  ${typography.H3}
  color: ${colors.PRIMARY};
`;

const StyledText = styled.p`
  ${typography.TAB}
  color: ${colors.SECONDARY};
`;

const StyledPrice = styled.h2`
  display: flex;
  gap: 188px;
  margin-top: 24px;
  ${typography.H3}
  color: ${colors.PRIMARY};
`;

const StyledRaiting = styled.div``;

const StyledRemoveFavoriteButton = styled.button`
  position: absolute;
  right: 0;
  top: 30%;
  background-color: #fff;

  path {
    fill: ${colors.RED};
    stroke: ${colors.RED};
    cursor: pointer;
    &:hover {
      fill: ${colors.SECONDARY};
      stroke: ${colors.SECONDARY};
    }
  }
`;

export {
  StyledBookInfo,
  StyledFavoriteBook,
  StyledImage,
  StyledPrice,
  StyledRaiting,
  StyledText,
  StyledTitle,
  StyledRemoveFavoriteButton,
};
