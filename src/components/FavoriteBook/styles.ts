import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledFavoriteBook = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 1px solid ${colors.GRAY};
  margin-bottom: 48px;
  ${media.PHONE} {
    position: relative;
    display: block;
    margin: 0 auto;
  }
`;

const StyledImage = styled(Link)`
  margin-bottom: 49px;
  width: 256px;
  height: 192px;
  background-color: ${colors.BLUE};
  img {
    display: block;
    margin: 0 auto;
    width: 164px;
    height: 191px;
  }
  ${media.TABLET} {
    margin-bottom: 60px;
    width: 208px;
    height: 156px;
    img {
      width: 133px;
      height: 155px;
    }
  }
  ${media.PHONE} {
    margin-top: 36px;
    margin-bottom: 20px;
    width: 100%;
    height: 204px;
    img {
      width: 174px;
      height: 203px;
    }
  }
`;

const StyledBookInfo = styled.div`
  max-width: 446px;
  width: 100%;
`;

const StyledTitle = styled.h3`
  margin-top: 36px;
  margin-bottom: 10px;
  ${typography.H3}
  color: ${colors.PRIMARY};
  ${media.TABLET} {
    margin-top: 16px;
    margin-bottom: 10px;
  }
  ${media.PHONE} {
    margin-top: 0;
  }
`;

const StyledText = styled.p`
  ${typography.TAB}
  color: ${colors.SECONDARY};
`;

const StyledPrice = styled.h2`
  display: flex;
  gap: 187px;
  margin-top: 24px;
  ${typography.H3}
  color: ${colors.PRIMARY};
  ${media.TABLET} {
    gap: 0;
    margin-bottom: 32px;
  }
`;

const StyledRaiting = styled.div`
  ${media.TABLET} {
    position: absolute;
    right: 40px;
  }
  ${media.PHONE} {
    right: 0;
  }
`;

const StyledRemoveButton = styled.button`
  margin: 88px 20px auto auto;
  background-color: ${colors.WHITE};
  transition: background 0.5s;
  path {
    transition: all 0.5s;
    fill: ${colors.RED};
    stroke: ${colors.RED};
    cursor: pointer;
  }
  &:hover path {
    fill: ${colors.SECONDARY};
    stroke: ${colors.SECONDARY};
  }
  ${media.TABLET} {
    margin-top: 0;
  }
  ${media.PHONE} {
    position: absolute;
    right: 0;
    top: 0;
    padding: 16px;
    margin: 0;
    background-color: ${colors.PRIMARY};
    &:hover {
      background-color: ${colors.PRIMARY_SECOND};
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
  StyledRemoveButton,
};
