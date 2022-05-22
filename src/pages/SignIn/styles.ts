import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledSign = styled.div`
  max-width: 544px;
  width: 100%;
  margin: 0 auto;
  margin-top: 194px;
  margin-bottom: 205px;
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

export const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid ${colors.GRAY};
  padding: 0 32px;
  ${media.PHONE} {
    padding: 0;
  }
`;

export const StyledTab = styled.div`
  padding: 26px 0;
  text-align: center;
  color: ${colors.SECONDARY};
  ${typography.BUTTON}
  cursor: pointer;
  &:first-child {
    border-bottom: 2px solid ${colors.PRIMARY};
    color: ${colors.PRIMARY};
  }
  &:last-child:hover {
    color: ${colors.PRIMARY2};
  }
`;

export const StyledForm = styled.form`
  padding: 32px;
  padding-bottom: 40px;
  ${media.PHONE} {
    padding: 32px 0 0;
  }
`;

export const StyledContainer = styled.div`
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border: 1px solid ${colors.GRAY};
  ${typography.B1};
  &::placeholder {
    color: ${colors.SECONDARY};
  }
  &:focus {
    outline: none;
    border: 2px solid ${colors.GRAY};
  }
  &:active {
    border: 1px solid ${colors.GRAY};
  }
  &:disabled {
    background-color: ${colors.GRAY};
  }
`;
export const StyledLabel = styled.label`
  margin-bottom: 4px;
  ${typography.B1};
  font-weight: 700;
  color: ${colors.PRIMARY};
`;
