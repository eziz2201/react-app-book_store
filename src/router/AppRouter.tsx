import { Route, Routes } from "react-router-dom";
import Account from "../pages/Account/Account";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import MainTemplate from "../pages/MainTemplate/MainTemplate";
import NotFound from "../pages/NotFound/NotFound";
import Search from "../pages/Search/Search";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import { routes } from "../routes/routes";
import DetailsBook from "../pages/DetailsBook/DetailsBook";
import NewBooks from "../pages/NewBooks/NewBooks";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path={routes.NEW_BOOKS} element={<NewBooks />}></Route>
        <Route path={routes.SIGN_IN} element={<SignIn />}></Route>
        <Route path={routes.SIGN_UP} element={<SignUp />}></Route>
        <Route path={routes.SEARCH} element={<Search />}></Route>
        <Route path={routes.BOOK} element={<DetailsBook />}></Route>
        <Route path={routes.FAVORITES} element={<Favorites />}></Route>
        <Route path={routes.CART} element={<Cart />}></Route>
        <Route path={routes.ACCOUNT} element={<Account />}></Route>
        <Route path={routes.NOT_FOUND} element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
