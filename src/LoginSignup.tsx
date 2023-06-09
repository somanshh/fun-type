import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your login logic here...
    axios
      .post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    console.log("Logging in...");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your sign up logic here...
    axios
      .post("http://localhost:3000/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    console.log("Signing up...");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={isLogin ? handleLogin : handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="mb-4 w-full px-3 py-2 text-black placeholder-gray-500 border-2 border-gray-600 rounded-md focus:outline-none focus:border-yellow-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="mb-6 w-full px-3 py-2 text-black placeholder-gray-500 border-2 border-gray-600 rounded-md focus:outline-none focus:border-yellow-500"
            required
          />
          <button
            type="submit"
            className="mb-4 w-full px-3 py-2 bg-yellow-500 text-black rounded-md"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            className="cursor-pointer text-yellow-500"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
