import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { StyledContainer, StyledMainTemplate } from "./styles";

const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <StyledContainer>
        <NavBar />
        <Outlet />
        <Footer />
      </StyledContainer>
    </StyledMainTemplate>
  );
};

export default MainTemplate;
