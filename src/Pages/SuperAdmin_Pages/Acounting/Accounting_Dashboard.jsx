import React, { useState } from "react";
import { IoMdWallet } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "PLAN SCH.", value: 170000000, fill: "#2196f3" },
  { name: "NON PLAN SCH.", value: 240000000, fill: "#00c49f" },
  { name: "NSS SCHEME", value: 0, fill: "#8884d8" },
  { name: "PLAN (T&V)", value: 0, fill: "#8884d8" },
  { name: "NON PLAN (T&V)", value: 500000, fill: "#8884d8" },
  { name: "RKVY SCH.", value: 1000000, fill: "#8884d8" },
  { name: "ICAR SCH.", value: 30000000, fill: "#00c49f" },
  { name: "OTHER AGEN.", value: 20000000, fill: "#ffb347" },
];
const chartData = [
  {
    year: "2026-2027",
    Grant: 0,
    OtherIncome: 0,
    Expenditure: 0,
  },
  {
    year: "2025-2026",
    Grant: 47647013,
    OtherIncome: 26113055,
    Expenditure: 500000000,
  },
  {
    year: "2024-2025",
    Grant: 2100000000,
    OtherIncome: 350000000,
    Expenditure: 2500000000,
  },
  {
    year: "2023-2024",
    Grant: 2150000000,
    OtherIncome: 370000000,
    Expenditure: 2600000000,
  },
  {
    year: "2022-2023",
    Grant: 2200000000,
    OtherIncome: 400000000,
    Expenditure: 2400000000,
  },
];

const activities = [
  { name: "RESEARCH", color: "text-blue-500" },
  { name: "EDUCATION", color: "text-green-400" },
  { name: "EXTENSION EDUCATION", color: "text-yellow-400" },
  { name: "WORKS", color: "text-red-400" },
  { name: "ADMINISTRATIVE", color: "text-purple-400" },
];

export default function Accounting_Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 bg-gradient-to-r from-slate-200 to-slate-300 min-h-screen">
      <nav className="grid my-2 sm:grid-cols-4 grid-cols-1 w-full gap-[2px] sm:gap-0 sm:h-10 h-20 pl-8">
        <div className="sm:col-span-3 pl-8 shadow-2xl sm:w-[99%] text-[11px] w-full rounded-sm bg-zinc-50 flex items-center sm:h-full">
          Path
        </div>
        <div className="sm:col-span-1  shadow-2xl sm:w-[96%] w-full rounded-sm bg-zinc-50 flex items-center justify-start px-5 sm:h-full ">
          <span className="text-red-700 text-[13px] cursor-pointer">
            Current Financial Year:{" "}
          </span>
          <span className="text-green-600 text-[13px] ml-1 cursor-pointer">
            2025-2026
          </span>
        </div>
      </nav>

      <div className="bg-white ml-8 mx-4  rounded">
        <div className="flex flex-col md:flex-row flex-wrap gap-4 px-4 p-2">
          <div className="bg-orange-400 relative  w-full md:w-[48%] lg:w-[23%] rounded-lg shadow p-4 text-white">
            <div className="text-xl font-bold">Rs. 4,53,07,013</div>
            <div className="text-sm">Total Grant Received</div>
            {/* SVG Wave Line */}

            <svg
              className="absolute bottom-5 left-0 w-full"
              viewBox="0 0 512 60"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="
      M0,30 
      C30,0 60,60 90,30 
      C120,0 150,60 180,30 
      C210,0 240,60 270,30 
      C300,0 330,60 360,30 
      C390,0 420,60 450,30 
      C480,0 510,60 512,30"
                stroke="white"
                fill="transparent"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="bg-[#38649f] w-full md:w-[48%] lg:w-[23%] rounded-lg shadow p-4 text-white">
            <IoMdWallet className="text-2xl mb-1" />
            <div className="text-xl">Total expenditure (Rs.)</div>
            <div className="text-xs">Fin Year: 2025-2026</div>
            <div className="text-xl font-bold mt-2">48,26,49,559.81</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2.5 mb-6 px-4">
        {/* Grant vs Expenditure Chart */}
        <div className="md:col-span-3 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold -mt-2 mb-2 border-b border-gray-200">
            Grant vs Expenditure
          </h2>

          {/* Chart Menu */}
          <div className="relative w-full flex justify-end p-4 -mt-5">
            <button onClick={() => setOpen(!open)}>
              <IoMenu className="text-2xl text-gray-700 hover:text-black" />
            </button>

            {open && (
              <div className="absolute top-10 right-4 bg-white border shadow-md rounded-md w-40 z-10">
                <ul className="text-sm text-gray-700">
                  <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                    Download SVG
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                    Download PNG
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Bar Chart */}
          <ResponsiveContainer width="100%" height={350} className="ml-3">
            <BarChart data={chartData}>
              <CartesianGrid
                stroke="#ccc"
                strokeDasharray="0"
                vertical={false}
              />
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#333" }}
              />
              <YAxis
                tick={{ fontSize: 10.7, fill: "#333" }}
                axisLine={false}
                tickLine={false}
                tickCount={6}
                formatter={(val) => new Intl.NumberFormat().format(val)}
                label={{ value: "INR", angle: -90, position: "Left" }}
              />
              <Tooltip
                formatter={(val) => new Intl.NumberFormat().format(val)}
              />
              <Legend />
              <Bar
                dataKey="Grant"
                fill="#1e90ff"
                barSize={29}
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="OtherIncome"
                fill="#2ECC71"
                barSize={29}
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="Expenditure"
                fill="#f39c12"
                barSize={29}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Wise Expenses */}
        <div className="bg-white rounded-md shadow p-4 -mr-4 md:col-span-1">
          <h2 className="text-lg font-semibold mb-2 border-b border-gray-500 pb-2">
            Activity Wise Expenses
          </h2>
          <ul className="space-y-1.5 md:pl-17 mt-9">
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              <span>RESEARCH - 0</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span>EDUCATION - 0</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="h-3 w-3 rounded-full bg-orange-400" />
              <span>EXTENSION EDUCATION - 0</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="h-3 w-3 rounded-full bg-pink-500" />
              <span>WORKS - 0</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="h-3 w-3 rounded-full bg-purple-500" />
              <span>ADMINISTRATIVE - 0</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow -mt-3 p-4 mx-4 md:ml-4 w-full md:w-1/2">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
          Parent Scheme Wise Expenses Chart
        </h2>

        <ResponsiveContainer width="100%" height={400} className="ml-3">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 50 }}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="0" vertical={false} />

            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={80}
              tick={{ fontSize: 10.7, fill: "#333" }}
            />

            <YAxis
              tickCount={6}
              tick={{ fontSize: 10.7, fill: "#333" }}
              tickFormatter={(value) => new Intl.NumberFormat().format(value)}
              axisLine={false}
              tickLine={false}
              label={{ value: "INR", angle: -90, position: "Left" }}
            />

            <Tooltip
              formatter={(value) => new Intl.NumberFormat().format(value)}
            />

            <Bar dataKey="value" barSize={29} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
