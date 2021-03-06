import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledSign = styled.div`
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

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid ${colors.GRAY};
  padding: 0 32px;
  ${media.PHONE} {
    padding: 0;
  }
`;

const StyledTab = styled.div`
  padding: 26px 0;
  text-align: center;
  color: ${colors.SECONDARY};
  ${typography.BUTTON}
  cursor: pointer;
  transition: all 0.3s;
  &:last-child {
    border-bottom: 2px solid ${colors.PRIMARY};
    color: ${colors.PRIMARY};
  }
  &:first-child:hover {
    color: ${colors.PRIMARY_SECOND};
  }
`;

const StyledForm = styled.form`
  padding: 32px;
  padding-bottom: 40px;
  ${media.PHONE} {
    padding: 32px 0 0;
  }
`;

const StyledContainer = styled.div`
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

const StyledInput = styled.input`
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
const StyledLabel = styled.label`
  margin-bottom: 4px;
  ${typography.B1};
  font-weight: 700;
  color: ${colors.PRIMARY};
`;

const StyledErrorLabel = styled.label`
  margin-top: 4px;
  ${typography.B1};
  font-weight: 700;
  color: ${colors.RED};
`;

const StyledError = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  background-color: ${colors.RED};
  ${typography.B2};
  text-align: center;
`;

export {
  StyledContainer,
  StyledErrorLabel,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSign,
  StyledTab,
  StyledTabs,
  StyledError,
};
