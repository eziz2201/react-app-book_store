import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Container, StyledMainTemplate } from "./styles";

const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Container>
        <NavBar />
        <Outlet />
        <Footer />
      </Container>
    </StyledMainTemplate>
  );
};

export default MainTemplate;
