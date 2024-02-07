import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({
  children,
  isAuth,
}: {
  children: ReactNode;
  isAuth: boolean;
}) => {
  if (!isAuth) {
    // Redirect to the /login page
    return <Navigate to="/login" />;
  }

  return children;
};
