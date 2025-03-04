import React, { useState } from "react";
import { Inputarea, Loading } from "../components/components";
import BaseAPI from "../helpers/BaseAPI";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContextProvider";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { token, loading, login } = useAuth();

  if (token) return <Navigate to={"/"} />;

  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-[400px] border border-gray-300 rounded p-4">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <div className="mt-8 space-y-4">
          <Inputarea
            label={"Username"}
            placeholder={"jhonDoe"}
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            required
          />
          <Inputarea
            type={"Password"}
            label={"password"}
            placeholder={"*************"}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />

          <div>
            <button
              onClick={() => login(data)}
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
             {
              loading ? "Logging in..." : "Login"
            }
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/auth/register"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
