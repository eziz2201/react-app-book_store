import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledCartBook = styled.div`
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
  margin: 70px auto;
  ${typography.H3}
  color: ${colors.PRIMARY};
`;

const StyledRemoveCartButton = styled.button`
  display: flex;
  margin-top: 70px;
  background-color: #fff;
  path {
    fill: ${colors.PRIMARY};
    stroke: ${colors.PRIMARY};
    cursor: pointer;
    &:hover {
      fill: ${colors.RED};
      stroke: ${colors.RED};
    }
  }
`;

const StyledQuantity = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 35px;
  ${typography.H3}
  color: ${colors.PRIMARY};
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${colors.WHITE};
`;

export {
  StyledBookInfo,
  StyledCartBook,
  StyledImage,
  StyledPrice,
  StyledText,
  StyledTitle,
  StyledRemoveCartButton,
  StyledQuantity,
  StyledButton,
};
