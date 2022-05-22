import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Account from "../pages/Account/Account";
import Auth from "../pages/Auth/Auth";
import Book from "../pages/Book/Book";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Search from "../pages/Search/Search";
import { routes } from "../routes/routes";
import { StyledApp } from "./styles";

const AppRouter = () => {
  return (
    <StyledApp>
      <NavBar />
      <Routes>
        <Route path={routes.HOME} element={<Home />}></Route>
        <Route path={routes.SIGN_IN} element={<Auth />}></Route>
        <Route path={routes.SIGN_UP} element={<Auth />}></Route>
        <Route path={routes.SEARCH} element={<Search />}></Route>
        <Route path={routes.BOOK} element={<Book />}></Route>
        <Route path={routes.FAVORITES} element={<Favorites />}></Route>
        <Route path={routes.CART} element={<Cart />}></Route>
        <Route path={routes.ACCOUNT} element={<Account />}></Route>
        <Route path={routes.NOT_FOUND} element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </StyledApp>
  );
};

export default AppRouter;
