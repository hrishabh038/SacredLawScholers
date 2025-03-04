import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { useGetUser } from "../hooks/hooks";
import {PageLoading} from "../components/components";

const AdminRoute = ({ children }) => {
  const { token, username } = useAuth();
  const [user, loading, error] = useGetUser({ username: username });
  const isAdmin = user?.role === "admin";

  if (!token || !isAdmin) {
    return loading ? <PageLoading /> : <Navigate to="/not-authorized" />;
  }

  return children;
};

export default AdminRoute;
