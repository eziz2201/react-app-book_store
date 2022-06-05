import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledBookItem = styled(Link)`
  display: grid;
  grid-template-rows: 250px 60px 25px 50px 30px;
  grid-gap: 5px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-decoration: none;
  transition: all .3s;
  &:hover{
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;
const StyledImg = styled.img`
  height: 100%;
  display: block;
  margin: 0 auto;
`;

const StyledTitle = styled.h2`
  overflow: hidden;
  ${typography.H3};
  color: ${colors.PRIMARY};
  text-align: center;
`;

const StyledIsbn = styled.p`
  overflow: hidden;
  ${typography.TAB};
  color: ${colors.SECONDARY};
`;

const StyledSubtitle = styled.p`
  overflow: hidden;
  ${typography.S1};
  color: ${colors.PRIMARY};
`;

const StyledPrice = styled.p`
  ${typography.H3};
  color: ${colors.PRIMARY};
  text-align: end;
`;

export {
  StyledBookItem,
  StyledImg,
  StyledIsbn,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
};
