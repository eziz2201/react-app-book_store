import { Spinner } from "react-bootstrap";
import { StyledLoading } from "./styles";

const Loading = () => {
  return (
    <StyledLoading>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </StyledLoading>
  );
};

export default Loading;
