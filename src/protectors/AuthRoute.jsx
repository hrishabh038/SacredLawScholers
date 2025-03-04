import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const AuthRoute = ({ children }) => {
  const { token } = useAuth();
  const { pathname } = useLocation();

  // Redirect to login if no token is found
  if (!token) {
    console.log("No token found, redirecting to login...");
    return <Navigate to="/auth/login" />;
  }

  // Render the children components if authenticated
  return children;
};

export default AuthRoute;