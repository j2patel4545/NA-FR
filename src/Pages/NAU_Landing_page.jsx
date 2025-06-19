import React, { useState } from "react";
import { FaInfoCircle, FaBullhorn } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { GrPowerShutdown } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "URP - Approvals",
    description: "All Your URP Related Approvals Lives Here",
    buttonText: "Click Here To Manage",
    link: "/urp-approvals",
    icon: <FaInfoCircle size={40} className="text-[#ff5e5e]" />,
  },
  {
    title: "NAU-URP",
    description: "Manage Your NAU URP Account",
    buttonText: "Click Here To Login",
    link: "/admin/Dashboard/module_selection",
    icon: <MdComputer size={40} className="text-[#ff5e5e]" />,
  },
  {
    title: "Contact List",
    description: "Contact List of All NAU Staff & Student's",
    buttonText: "View More Details",
    link: "/contact-list",
    icon: <FaInfoCircle size={40} className="text-[#ff5e5e]" />,
  },
];

const NAU_Landing_page = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const filteredCards = cards.filter((card) =>
    (card.title + " " + card.description)
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const handleLogout = () => {
    setIsLoggingOut(true);
    localStorage.removeItem("islogedin");
    localStorage.removeItem("loginuser");

    setTimeout(() => {
      navigate("/");
      setTimeout(() => {
        window.location.reload(); // Refresh after logout
      }, 100);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#e6f2e6] px-4 py-2 font-sans">
      <div className="text-center mb-2">
        <img
          src="https://nau.in/assets/uploads/f4144-d1207-nau-logo.png"
          alt="NAU Logo"
          className="mx-auto h-23 w-48"
        />
        <h2 className="text-2xl font-semibold">Single Sign-On (SSO)</h2>
      </div>

      <div className="flex justify-between mb-5">
        <p className="text-gray-500 pl-16 font-bold text-sm">
          Last Login Time: 09-06-2025 03:49:52pm
        </p>
        <p className="text-[#ff5e5e] text-center pr-32 font-bold text-sm">
          Total Devices LoggedIn Curr.: 1
        </p>
        <p className="text-gray-500 font-bold text-sm pr-12">
          Welcome, Chirag Naik
        </p>
      </div>

      <div className="flex justify-center w-full mb-6">
        <input
          type="text"
          placeholder="Search Application"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-[90%] h-11 bg-white px-4 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-l-3 border-[#7571F9] shadow-2xl w-[250px] h-[260px] p-6 text-center flex flex-col items-center hover:animate-[blink-shadow_3s_ease-in-out_infinite] transition-shadow duration-300"
            >
              <div className="justify-center mt-4">{card.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{card.description}</p>
              <a
                href={card.link}
                className="bg-[#6a5eff] text-white text-sm px-4 py-2 rounded-md hover:bg-[#4a3fff] transition"
              >
                {card.buttonText}
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-sm">No matching results found.</p>
        )}
      </div>

      {/* Logout Button with Loader */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="bg-[#6a5eff] text-white text-sm w-[90%] mb-4 py-2 rounded-md hover:bg-[#4a3fff] transition flex items-center justify-center gap-2"
        >
          <GrPowerShutdown className="text-white" /> LOGOUT
          {isLoggingOut && (
            <span className="loader w-4 h-4 border-2 border-t-white border-white/30 rounded-full animate-spin"></span>
          )}
        </button>
      </div>

      <div className="fixed bottom-1 right-4 border-l-3 border-[#6a5eff] bg-black text-red-400 h-8 w-52 rounded-t-xl shadow-lg text-md font-semibold hover:bg-white hover:text-[#6a5eff] transition flex items-center justify-center gap-x-2">
        <span>Announcement Desk</span>
        <FaBullhorn className="text-inherit animate-blink" />
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
          .loader {
            border-top-color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default NAU_Landing_page;
