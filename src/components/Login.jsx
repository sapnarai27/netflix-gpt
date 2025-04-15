import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="absolute w-full">
      <form className="p-12 mx-auto my-36 right-0 left-0 border border-black w-3/12 bg-black opacity-80 text-white rounded-sm">
        <div className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        {!isSignIn && (
          <input
            className="border border-gray-200 p-2 my-2 w-full bg-gray-700 rounded-sm"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="border border-gray-200 p-2 my-2 w-full bg-gray-700 rounded-sm"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-200 p-2 my-2 w-full bg-gray-700 rounded-sm"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-500 w-full p-2 my-2 rounded-sm cursor-pointer">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div
          onClick={() => {
            setIsSignIn(!isSignIn);
          }}
          className="mt-4 cursor-pointer">
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already signed up? Sign in now."}
        </div>
      </form>
    </div>
  );
};

export default Login;
