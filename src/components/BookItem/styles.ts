import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledBookItem = styled(Link)`
  display: grid;
  grid-template-rows: 330px 13% 6% 15%;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-decoration: none;
`;
export const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
`;

export const StyledTitle = styled.h2`
  ${typography.H3};
  color: ${colors.PRIMARY};
  text-align: center;
`;

export const StyledIsbn = styled.p`
  ${typography.TAB};
  color: ${colors.SECONDARY};
`;

export const StyledSubtitle = styled.p`
  ${typography.S1};
  color: ${colors.PRIMARY};
  margin-bottom: 30px;
`;

export const StyledPrice = styled.p`
  position: absolute;
  bottom: 0;
  right: 20px;
  ${typography.H3};
  color: ${colors.PRIMARY};
  text-align: end;
`;
