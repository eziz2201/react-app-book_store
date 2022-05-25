import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { StyledMainTemplate } from "./styles";

const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <NavBar />
      <Outlet />
      <Footer />
    </StyledMainTemplate>
  );
};

export default MainTemplate;
