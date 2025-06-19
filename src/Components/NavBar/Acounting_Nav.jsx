


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight, FaBarcode } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsTranslate } from "react-icons/bs";

function Acounting_Nav
() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [nestedHovered, setNestedHovered] = useState(null);
  const [thirdHovered, setThirdHovered] = useState(null); // for "jetal abc"

  const handleMouseEnter = (id) => setOpenDropdown(id);
  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setHoveredOption(null);
    setNestedHovered(null);
    setThirdHovered(null);
  };

  const subOptionsMap = {
    "[01] hrms": ["Source B.H Transaction", "Department Setup", "Role Management", "Shift Timings"],
    "[02] Transaction": ["Source B.H Transaction", "Payment Cycle"],
    "[03] Report": ["Post New Job", "Manage Applications"],
    "Source B.H Transaction": ["Grant Voucher", "Department Setup"],
    "Grant Voucher": ["Grant Section Voucher", "two"],
    "Grant Section Voucher": ["abc", "pqr"],
    "Post New Job": ["jetal abc", "Patel"],
    "jetal abc": ["Fora", "Patel"], // 4th level
  };

  const routeMap = {
    "Department Setup": "/department",
    "Role Management": "/roles",
    "Shift Timings": "/shifts",
    "Payment Cycle": "/payment-cycle",
    "Post New Job": "/post-job",
    "Manage Applications": "/applications",
    "Grant Voucher": "/admin/account/trans/source_grant_sanction_master",
    "Grant Section Voucher": "/admin/account/trans/source_grant_sanction_master",
    "Fora": "/jetal/fora",
    "Patel": "/jetal/patel",
  };

  return (
    <div className="flex">
      <div className="flex h-16 w-full bg-[#0b5656] justify-between text-[15px] items-center sm:px-8">
        <div className="logodiv flex h-full w-36 sm:w-20 items-center object-contain">
          <img
            className="h-[60%] pl-6 sm:pl-0"
            src="https://urp.nau.in/public/admin/assets/voicex/images/45b34-nau-logo(1).png"
            alt="logo"
          />
        </div>

        <div className="menudiv sm:flex hidden w-[70%]">
          <div className="text-white w-full h-full px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-none">
                {[
                  {
                    id: "hrms",
                    label: "FAMS Settings",
                    options: Object.keys(subOptionsMap).filter((key) => key.startsWith("[01]")),
                  },
                  {
                    id: "transaction",
                    label: "Transaction",
                    options: Object.keys(subOptionsMap).filter((key) => key.startsWith("[02]")),
                  },
                  {
                    id: "report",
                    label: "Reports",
                    options: Object.keys(subOptionsMap).filter((key) => key.startsWith("[03]")),
                  },
                ].map((menu) => (
                  <div
                    key={menu.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(menu.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="hover:bg-[#004d4d] flex items-center gap-3 px-3 py-2 rounded">
                      {menu.label} <FaCaretRight className="rotate-90" />
                    </button>

                    {openDropdown === menu.id && (
                      <div className="absolute top-full left-0 bg-white text-black shadow-md rounded z-10 w-60">
                        {menu.options.map((opt, i) => (
                          <div
                            key={i}
                            className="group relative px-4 py-2 hover:bg-gray-100 border-b mx-2 border-dotted border-gray-300 last:border-none"
                            onMouseEnter={() => setHoveredOption(opt)}
                            onMouseLeave={() => setHoveredOption(null)}
                          >
                            <Link
                              to={routeMap[opt] || "#"}
                              className="w-full flex justify-between items-center"
                            >
                              <span>{opt}</span>
                              {subOptionsMap[opt] && (
                                <span
                                  className={`ml-2 text-gray-500 group-hover:text-black transition-transform duration-300 ${
                                    hoveredOption === opt ? "rotate-90" : ""
                                  }`}
                                >
                                  <FaCaretRight />
                                </span>
                              )}
                            </Link>

                            {subOptionsMap[opt] && hoveredOption === opt && (
                              <div className="absolute left-full top-0 bg-white text-black shadow-md rounded w-56 z-20">
                                {subOptionsMap[opt].map((subOpt, idx) => (
                                  <div
                                    key={idx}
                                    className="group relative px-4 py-2 hover:bg-gray-100 border-b border-dotted last:border-none"
                                    onMouseEnter={() => setNestedHovered(subOpt)}
                                    onMouseLeave={() => setNestedHovered(null)}
                                  >
                                    <Link
                                      to={routeMap[subOpt] || "#"}
                                      className="flex justify-between items-center"
                                    >
                                      <span>{subOpt}</span>
                                      {subOptionsMap[subOpt] && (
                                        <span className="ml-2 text-gray-500 group-hover:text-black">
                                          <FaCaretRight />
                                        </span>
                                      )}
                                    </Link>

                                    {/* Third level */}
                                    {subOptionsMap[subOpt] &&
                                      nestedHovered === subOpt && (
                                        <div className="absolute left-full top-0 bg-white text-black shadow-md rounded w-56 z-30">
                                          {subOptionsMap[subOpt].map((thirdOpt, thirdIdx) => (
                                            <div
                                              key={thirdIdx}
                                              className="group relative px-4 py-2 hover:bg-gray-100 border-b border-dotted last:border-none"
                                              onMouseEnter={() => setThirdHovered(thirdOpt)}
                                              onMouseLeave={() => setThirdHovered(null)}
                                            >
                                              <Link
                                                to={routeMap[thirdOpt] || "#"}
                                                className="flex justify-between items-center"
                                              >
                                                <span>{thirdOpt}</span>
                                                {subOptionsMap[thirdOpt] && (
                                                  <span className="ml-2 text-gray-500 group-hover:text-black">
                                                    <FaCaretRight />
                                                  </span>
                                                )}
                                              </Link>

                                              {/* Fourth level (e.g. jetal abc) */}
                                              {subOptionsMap[thirdOpt] &&
                                                thirdHovered === thirdOpt && (
                                                  <div className="absolute left-full top-0 bg-white text-black shadow-md rounded w-56 z-40">
                                                    {subOptionsMap[thirdOpt].map((finalOpt, fIdx) => (
                                                      <Link
                                                        key={fIdx}
                                                        to={routeMap[finalOpt] || "#"}
                                                        className="block px-4 py-2 hover:bg-gray-100 border-b last:border-none"
                                                      >
                                                        {finalOpt}
                                                      </Link>
                                                    ))}
                                                  </div>
                                                )}
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-[35%]">
          <div className="sm:flex hidden h-full w-40 -ml-10 justify-center items-center">
            <input
              className="bg-white h-7 p-2 text-gray-400 w-40 rounded-md"
              type="text"
              placeholder="Search Menu"
            />
          </div>
          <div className="h-full sm:flex hidden w-[68%] gap-7 pl-3 items-center">
            <FaBarcode className="text-zinc-50 h-15 w-6" />
            <MdNotifications className="text-zinc-50 h-15 w-6" />
            <FaRegCalendarDays className="text-zinc-50 h-15 w-6" />
            <BsTranslate className="text-zinc-50 h-15 w-6" />
            <img
              className="h-7"
              src="https://urp.nau.in/public/admin/assets/images/user.png"
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acounting_Nav
;
