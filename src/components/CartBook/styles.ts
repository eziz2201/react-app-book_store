import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledCartBook = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  border-bottom: 1px solid ${colors.GRAY};
  margin-bottom: 50px;
  ${media.PHONE} {
    display: block;
    margin-bottom: 53px;
  }
`;

const StyledImage = styled(Link)`
  margin-bottom: 49px;
  width: 256px;
  height: 192px;
  background-color: ${colors.BLUE};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    display: block;
    margin: 0 auto;
    width: 163px;
    height: 191px;
  }
  ${media.TABLET} {
    width: 208px;
    height: 156px;
    img {
      width: 133px;
      height: 155px;
    }
  }
  ${media.PHONE} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 204px;
    img {
      width: 200px;
      height: 203px;
    }
  }
`;

const StyledBookInfo = styled.div`
  max-width: 446px;
  width: 100%;
  ${media.PHONE} {
    width: 100%;
  }
`;

const StyledTitle = styled.h3`
  margin-top: 26px;
  margin-bottom: 10px;
  ${typography.H3}
  color: ${colors.PRIMARY};
`;

const StyledText = styled.p`
  ${typography.TAB}
  color: ${colors.SECONDARY};
  ${media.TABLET} {
    &:last-of-type {
      margin-bottom: 70px;
    }
  }
`;

const StyledPrice = styled.h2`
  margin: auto 50px auto auto;
  ${typography.H3}
  color: ${colors.PRIMARY};
  ${media.TABLET} {
    margin: auto;
    margin-bottom: 20px;
  }
  ${media.PHONE} {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const StyledRemoveCartButton = styled.button`
  margin: auto 17px auto auto;
  background-color: #fff;

  ${media.TABLET} {
    margin: 17px 17px auto auto;
  }
  ${media.PHONE} {
    margin: 0;
    padding: 17px;
    background-color: ${colors.PRIMARY};
    position: absolute;
    top: 0;
    right: 0;
    svg {
      background-color: ${colors.PRIMARY};
    }
    path {
      fill: ${colors.WHITE};
      stroke: ${colors.WHITE};
      cursor: pointer;
      transition: all 0.3s;
    }
    &:hover {
      background-color: ${colors.PRIMARYSECOND};
    }
    &:hover svg {
      background-color: ${colors.PRIMARYSECOND};
    }
    &:hover path {
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
  ${media.TABLET} {
    margin-top: 0;
    position: absolute;
    bottom: 20px;
  }
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
