import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BaseAPI from "../helpers/BaseAPI";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the provider component
const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      const expiryTime = jwtDecode(token).exp * 1000;
      const timeout = expiryTime - Date.now();

      const timer = setTimeout(() => {
        logout();
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [token]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedToken = localStorage.getItem("token");
    if (storedUsername) setUsername(storedUsername);
    if (storedToken) setToken(storedToken);
  }, []);

  async function login(data) {
    setLoading(true);
    try {
      const response = await BaseAPI.post(`/user/login`, data);
      const decodedToken = jwtDecode(response.data.data);
      setUsername(decodedToken.username);
      setToken(response.data.data);
      localStorage.setItem("username", decodedToken.username);
      localStorage.setItem("token", response.data.data);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    setUsername(null);
    setToken(null);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ username, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
