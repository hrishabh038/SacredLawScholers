import React from 'react';
import {Inputarea} from '../components/components';

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-[400px] border border-neutral-300 rounded p-4">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-4">
            <Inputarea label={"Username"} placeholder={"jhonDoe"} required />
            <Inputarea type={"Password"} label={"password"} placeholder={"*************"} required />
         

          <div className="flex items-center justify-between">
            {/* <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div> */}

            {/* <div className="text-sm">
              <a
                href="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                Forgot your password?
              </a>
            </div> */}
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>

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