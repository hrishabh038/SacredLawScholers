import React, { useState } from "react";
import { Inputarea, Loading, Textarea } from "../components/components";
import { usePostUser } from "../hooks/hooks";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const Register = () => {
  const [data, setData] = useState({
    full_name: "",
    username: "",
    email_address: "",
    bio: "",
    password: "",
  });

  const [user, loading, error, postUser] = usePostUser();

  const { token, loading, login } = useAuth();

  if (token) return <Navigate to={"/"} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(data);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-[400px] border border-gray-300 rounded p-4">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Sign up to get started
          </p>
        </div>

        {/* Register Form */}
        <form className="mt-8 space-y-4">
          <Inputarea
            label={"Fullname"}
            placeholder={"Jhon Doe"}
            value={data.full_name}
            onChange={(e) => setData({ ...data, full_name: e.target.value })}
            required
          />
          <Inputarea
            label={"Username"}
            placeholder={"jhonDoe"}
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            required
          />
          <Inputarea
            type={"email"}
            label={"Email"}
            placeholder={"johndoe@example.com"}
            value={data.email_address}
            onChange={(e) =>
              setData({ ...data, email_address: e.target.value })
            }
            required
          />
          <Textarea
            label={"Bio"}
            placeholder={"Write your bio here..."}
            value={data.bio}
            onChange={(e) => setData({ ...data, bio: e.target.value })}
            required
          />
          <Inputarea
            type={"password"}
            label={"Password"}
            placeholder={"*************"}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
          <Inputarea
            label={"Confirm Password"}
            placeholder={"*************"}
            required
          />

          <div>
            {loading ? (
              <Loading />
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              >
                Sign Up
              </button>
            )}
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
