import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa"
import { IoMdContact, IoMdCheckmarkCircle } from "react-icons/io"
import { UserContext } from '../../ContextAPI/User.Context/UserContext'

function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const { setUserEmail } = useContext(UserContext)

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://demo-dploy-1.onrender.com/api/users/check-email',{email}) // or register based on your logic

      if (response.status === 200) {
        setUserEmail(email)
        navigate('/AuthManager/selAuthOptions')
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message)
      alert('Login failed. Please try again.')
    }
  }

  return (
    <div className="h-screen bg-fixed bg-[url('https://sso.nau.in/uploads/front_login/1200x742.jpg')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl h-[550px] w-[590px] px-8 pt-8 pb-4 flex flex-col justify-between">

        <div className="flex flex-col items-center mt-2">
          <img
            src="https://nau.in/assets/uploads/f4144-d1207-nau-logo.png"
            alt="NAU Logo"
            className="h-[90px] w-[190px] mt-2"
          />
          <p className="text-[24px] font-semibold text-black mt-[-4px]">
            Single Sign-On (SSO)
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <label className="text-[16px] font-medium text-black mb-1 block">
              Regular Staff / Student Login
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Nau Email-ID / Enrollment No. Here"
              className="w-full border border-gray-300 rounded-md px-3 py-[12px] text-[14px] focus:outline-none"
            />
          </div>
          <button
            onClick={handleLogin}
            style={{ fontFamily: 'MyFont1' }}
            className="w-full bg-[#7571F9] text-white text-[15px] py-[20px] rounded-sm font-semibold flex items-center justify-center gap-6"
          >
            Continue
            <FaArrowAltCircleRight />
          </button>
        </div>

        <div className="w-full flex gap-1 justify-center">
          <div className="w-[35%]">
            <button className="w-full border border-red-500 text-black text-[14px] rounded-full py-[6px] hover:bg-red-500">
              <div className="flex items-center justify-center gap-1">
                <IoMdContact />
                Adhoc Staff Login
              </div>
            </button>
          </div>
          <div className="w-[28%]">
            <button className="w-full border border-red-500 text-black text-[14px] rounded-full py-[6px] hover:bg-red-500">
              <div className="flex items-center justify-center gap-1">
                <IoMdContact />
                Vendor Login
              </div>
            </button>
          </div>
        </div>

        <div className="bg-[#E2F7E2] -mt-2 text-left text-green-900 text-[13px] px-5 py-3 rounded-sm mb-6">
          <p className="mb-1 flex items-center gap-1">
            <IoMdCheckmarkCircle className="text-green-700 text-[15px]" />
            Your Activity is monitored by NAU IT Cell.
          </p>
          <p className="flex items-center ml-1">
            Your current IP address:
            <span className="text-red-600 text-lg ml-1 font-semibold">
              172.16.31.1
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login
