


import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function URP_Landing_page() {
  const [financialYear, setFinancialYear] = useState('2024-25');
 
  const Modules = [
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/User_Management-2.png",
    name: "User Management",
    path: "/user-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/HRMS.png",
    name: "Human resource management",
    path: "/human-resource-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Payroll-22.png",
    name: "Payroll Management",
    path: "/payroll-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Pension.png",
    name: "Pension Management",
    path: "/pension-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/visitoricon.png",
    name: "Employee ID card",
    path: "/employee-id-card"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Leave.png",
    name: "Employee Attendance Management",
    path: "/employee-attendance-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Quater.png",
    name: "Quater Management",
    path: "/quater-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Finincial_Accounting.png",
    name: "Financial Accounting",
    path: "/admin/account/dashboard/Dashboard"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Finincial_Budgeting.png",
    name: "Financial Budgeting",
    path: "/financial-budgeting"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/GPF.png",
    name: "General Provident fund",
    path: "/general-provident-fund"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Deposits_Management.png",
    name: "Deposits Management",
    path: "/deposits-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Students_Fees_Collection2.png",
    name: "Students Fees Collection",
    path: "/students-fees-collection"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/audit.png",
    name: "Audit Management",
    path: "/audit-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/FAMS5.png",
    name: "Financial Approval",
    path: "/financial-approval"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Planning_Cell1.png",
    name: "Planning Cell ",
    path: "/planning-cell"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/asset4.png",
    name: "Asset Management",
    path: "/asset-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Resolution.png",
    name: "Resolutions and Publication Portal ",
    path: "/resolutions-publication-portal"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/cashbook_mgmt.png",
    name: "Cashbook Management",
    path: "/cashbook-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/Jobs.png",
    name: "NAU JOBS",
    path: "/nau-jobs"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/vendor.png",
    name: "Vendor Management",
    path: "/vendor-management"
  },
  {
    img: "https://urp.nau.in/public/app_assets/images/application_modules/audit.png",
    name: "Kiosk 2.0 Portal",
    path: "/kiosk-portal"
  }
];

  return (
    <div className='px-10 py-4'>
      {/* Navigation Bar */}
      <nav className="grid my-2 sm:grid-cols-4 grid-cols-1 w-full gap-[2px] sm:gap-0 sm:h-10 h-16">
        <div className="sm:col-span-3 pl-8 shadow-2xl sm:w-[98%] text-[11px] w-full rounded-sm bg-zinc-50 flex items-center sm:h-full">
          Path
        </div>
        <div className="sm:col-span-1 shadow-2xl sm:w-[98%] w-full rounded-sm bg-zinc-50 flex items-center justify-center sm:h-full">
          <span className='text-red-400 text-[11px]'>Current Financial Year: </span>
          <span className='text-green-400 text-[11px] ml-1'>[{financialYear}]</span>
        </div>
      </nav>

      {/* Module Selection */}
      <div className="grid grid-cols-1 px-3 items-center justify-center py-8 rounded-md text-gray-500 text-[18px] bg-[#FFFFFF] sm:grid-cols-2 md:grid-cols-6 gap-2">
   {Modules.map((module, index) => (
  <Link
    to={module.path}
    key={index}
    className={`${
      index === 15 || index === 16 ? 'bg-[#FBF8F8]' : 'bg-[#FBF8F8]'
    } hover:shadow-2xl hover:shadow-zinc-600 border-[1px] border-b-4 border-b-[#34AD2D] border-gray-200 p-4 h-[200px] rounded`}
  >
    <div className='h-[50%] justify-center flex'>
      <div
        className={`h-full object-cover -mt-2 rounded-full ${
          index === 15 || index === 16 ? 'bg-[#FBF8F8]' : 'bg-gray-400'
        }`}
      >
        <img className='h-full w-full' src={module.img} alt={module.name} />
      </div>
    </div>
    <p className='flex pt-1 justify-center w-full text-center'>{module.name}</p>
  </Link>
))}


        {/* Placeholder Modules */}
      
      </div>
    </div>
  );
}

export default URP_Landing_page;
