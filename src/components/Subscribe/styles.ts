import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledSubscribe = styled.div`
  background-color: ${colors.PURPLE};
  padding: 56px 64px;
`;

const StyledTitle = styled.h2`
  ${typography.H2};
  color: ${colors.PRIMARY};
`;

const StyledText = styled.p`
  margin-bottom: 30px;
  ${typography.S1};
  color: ${colors.SECONDARY};
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  justify-self: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
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

const StyledButton = styled.div`
  max-width: 150px;
  width: 100%;
  button {
    padding: 15px;
  }
`;

export {
  StyledSubscribe,
  StyledTitle,
  StyledText,
  StyledForm,
  StyledInput,
  StyledButton,
};
