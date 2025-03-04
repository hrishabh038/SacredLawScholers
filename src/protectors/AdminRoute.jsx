import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { useGetUser } from "../hooks/hooks";
import { PageLoading } from "../components/components";

const AdminRoute = ({ children }) => {
  const { username } = useAuth();
  const [user, loading, error] = useGetUser({ username });
  const isAdmin = user?.role === "admin";

  if (loading) return <PageLoading />;

  if (error) {
    console.error("Error fetching user:", error);
    return <Navigate to="/error" />;
  }

  if (!isAdmin) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default AdminRoute;
