import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { RootStore } from "../../store/store";
import { StyledAccount } from "./styles";

const Account = () => {
  const { isAuth, email } = useSelector(({ user }: RootStore) => user);

  if (isAuth) {
    return <StyledAccount>{email}</StyledAccount>;
  }
  return <Navigate to={routes.SIGN_UP} />;
};

export default Account;
