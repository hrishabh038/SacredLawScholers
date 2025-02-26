import React from 'react';
import { Inputarea, Textarea } from '../components/components';

const Register = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-[400px] border border-neutral-300 rounded p-4">
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
          <Inputarea label={"Username"} placeholder={"jhonDoe"} required />
          <Inputarea type={"email"} label={"Email"} placeholder={"johndoe@example.com"} required />
          <Textarea label={"Bio"} placeholder={"Write your bio here..."} required />
          <Inputarea type={"password"} label={"Password"} placeholder={"*************"} required />
          <Inputarea type={"password"} label={"Confirm Password"} placeholder={"*************"} required />

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
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