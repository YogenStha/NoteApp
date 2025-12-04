import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Email:", email, "Password:", password);
  //   navigate("/notes");

  // };
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://noteapp-backend-kbzk.onrender.com/api/v1/login",
         { email, password },
      );

      if (res.status === 200) {
        console.log("Login successful:", res.data);

        localStorage.setItem("token", res.data.token);

        navigate("/notes");
      }
    } catch (err) {
      console.error("Login failed:",err.message);
      alert("Invalid email or password");
    }
  };


  const handleClick = () => {
    navigate("/register"); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex-1 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-96 text-center"
        >
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
          <a
            href="/"
            className="block mt-4 text-blue-600 hover:underline"
          >
            Forgotten password?
          </a>
          <hr className="my-6" />
          <button
            type="button"
            onClick={handleClick} 
            className="bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 transition"
          >
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;