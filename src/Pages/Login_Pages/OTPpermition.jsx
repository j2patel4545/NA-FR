import React from "react";
import { FaQrcode, FaKey, FaMobileAlt, FaKeyboard } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import {Link} from 'react-router-dom'

const OTPpermition = () => {
  return (
    <div className="min-h-screen bg-[#e5f4ea] flex items-center justify-center px-4 ">
      <div className="bg-white    rounded-xl shadow-xl p-8 sm:p-8 w-[36%] h-[40%] text-center">
        {/* Logo */}
        <img
          src="https://nau.in/assets/uploads/f4144-d1207-nau-logo.png"
          alt="NAU Logo"
          className="mx-auto h-24  mt-4"
        />

        {/* Title */}

        <h3 className="text-md sm:text-2xl font-medium text-gray-800">
          Single Sign-On (SSO)
        </h3>

        {/* User Info */}
        <p className="text-gray-600 text-sm mt-2">
          Name: <span className="text-sm text-gray-600">Chirag Naik</span>
        </p>
        <p className="text-gray-600 text-sm mb-6">Username: chirag@nau.in</p>

        {/* Login Options Title */}
        <div className="text-left -mt-2 mb-2 font-semibold text-black">
          Select Login Option
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-1 text-white text-sm font-medium ">
         <Link to="/AuthManager/authPinLogin"> <button className="flex w-full cursor-pointer items-center justify-center gap-7  px-4 py-2.5 rounded-md bg-[#7571f9] hover:bg-[#5a4bd8]">
            <span className=" ">Login Via Authenticator PIN</span>
            <FaRegWindowClose className="" />
          </button> </Link>

          <button className="flex cursor-pointer justify-center gap-7 items-center px-4 py-2.5 rounded-md bg-[#9097c4] text-gray-700 hover:text-white hover:bg-[#6d729c]">
            <span className=" ">Login Via OTP</span>
            <FaMobileAlt />  
          </button>

          <button className="flex cursor-pointer justify-center gap-7 items-center px-4 py-2.5 rounded-md bg-[#f29d56] hover:text-white  text-gray-700 hover:bg-orange-400">
            <span className="">Login Via NAU-Authenticator</span>
            <FaKey />
          </button>

          <button
            className="flex  cursor-pointer justify-center gap-7 items-center px-4 py-2.5 rounded-md bg-[#ff5e5e]

 hover:bg-red-500"
          >
            <span className="">Scan QR Code & Login</span>
            <FaQrcode />
          </button>
        </div>

        {/* Use Another Account */}
        <button className="mt-2  cursor-pointer mx-auto flex items-center justify-center gap-1 text-black-500 border border-red-400 hover:bg-red-500 text-sm px-4 py-2  rounded-full">
          <FaUserCircle />
          Use Another Account
        </button>
      </div>
    </div>
  );
};

export default OTPpermition;