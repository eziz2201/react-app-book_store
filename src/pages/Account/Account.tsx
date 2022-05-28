import { Navigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks/hooks";
import { getUser } from "../../store/selectors/userSelectors";
import { StyledAccount } from "./styles";

const Account = () => {
  const { isAuth, email } = useAppSelector(getUser);

  if (isAuth) {
    return <StyledAccount>{email}</StyledAccount>;
  }
  return <Navigate to={`/${routes.SIGN_UP}`} />;
};

export default Account;
