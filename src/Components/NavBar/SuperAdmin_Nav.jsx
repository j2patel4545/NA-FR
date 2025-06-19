


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight, FaBarcode } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsTranslate } from "react-icons/bs";

function SuperAdmin_Nav() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [nestedHovered, setNestedHovered] = useState(null);

  const handleMouseEnter = (id) => setOpenDropdown(id);
  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setHoveredOption(null);
    setNestedHovered(null);
  };

  const subOptionsMap = {
    "[01] hrms": ["Source B.H Transaction", "Department Setup", "Role Management", "Shift Timings"],
    "[02] Transaction": ["Source B.H Transaction", "Payment Cycle"],
    "[03] Report": ["Post New Job", "Manage Applications"],
    "Source B.H Transaction": ["Grant Voucher", "Department Setup"],
    "Grant Voucher": ["Grant Section Voucher"],
  };

 const routeMap = {
  "Department Setup": "/department",
  "Role Management": "/roles",
  "Shift Timings": "/shifts",
  "Payment Cycle": "/payment-cycle",
  "Post New Job": "/post-job",
  "Manage Applications": "/applications",
  "Grant Voucher": "/admin/account/trans/source_grant_sanction_master", // ✅ Updated here
  "Grant Section Voucher": "/admin/account/trans/source_grant_sanction_master",
};

  return (
    <div className="flex justify-between">
      <div className="flex h-16 w-full bg-[#0b5656] justify-between text-[15px] items-center sm:px-8">
        <div className="logodiv flex h-full w-36 sm:w-20 items-center object-contain">
          <img className="h-[60%] pl-6 sm:pl-0" src="https://urp.nau.in/public/admin/assets/voicex/images/45b34-nau-logo(1).png" alt="logo" />
        </div>

        <div className="flex h-full w-[30%] -mr-10">
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
            <img className="h-7" src="https://urp.nau.in/public/admin/assets/images/user.png" alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin_Nav;
