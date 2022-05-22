import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledSign = styled.div`
  width: 544px;
  margin: 0 auto;
  margin-top: 191px;
  margin-bottom: 117px;
  border: 1px solid ${colors.GRAY};
`;

export const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid ${colors.GRAY};
  padding: 0 32px;
`;

export const StyledTab = styled.div`
  padding: 26px 0;
  text-align: center;
  color: ${colors.SECONDARY};
  ${typography.BUTTON}
  cursor: pointer;
  &:last-child {
    border-bottom: 2px solid ${colors.PRIMARY};
    color: ${colors.PRIMARY};
  }
  &:first-child:hover {
    color: ${colors.PRIMARY2};
  }
`;

export const StyledForm = styled.form`
  padding: 32px;
  padding-bottom: 40px;
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
