import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the provider component
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login(data) {
    setLoading(true);
    setError(null);
    try {
      const response = await BaseAPI.post(`/user/login`, data);
      setUser
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      setError(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
