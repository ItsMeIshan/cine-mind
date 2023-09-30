"use client";
import React from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);
  const email = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <h2 className="text-2xl">{isSignUp ? "Sign Up" : "Login"}</h2>
      <form className="my-2 flex flex-col justify-between min-h-[30vh]">
        {isSignUp && (
          <div>
            <input className="input-boxes" type="text" placeholder="Name" />
          </div>
        )}
        <div>
          <input
            className="input-boxes"
            type="text"
            placeholder="Email"
            ref={email}
          />
        </div>
        <div>
          <input
            className="input-boxes"
            type="text"
            placeholder="Password"
            ref={password}
          />
        </div>
        <div>
          <button className="bg-[#ff2a00] px-3 py-1 rounded-lg">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </div>
        <span>
          {isSignUp ? "Already a user?" : "New to Cinemind?"}{" "}
          <a
            onClick={() => setIsSignUp(!isSignUp)}
            className="cursor-pointer underline"
          >
            {isSignUp ? "Sign in now" : "Sign up now"}
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
