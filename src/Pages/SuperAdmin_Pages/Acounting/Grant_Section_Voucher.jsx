




import React, { useState } from 'react';
import { FaChevronUp, FaArrowUp, FaRegSave } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { RiResetLeftFill } from "react-icons/ri";
import Select from 'react-select';
import Grant_Sanction_pqgrid from './Grant_Sanction_pqgrid';

function Grant_Section_Voucher() {
    const [financialYear] = useState('2025-2026');
  const [showForm, setShowForm] = useState(true);
  const [showForm2, setShowForm2] = useState(true);

  const [formData, setFormData] = useState({
    sanctionDate: '',
    demandNumber: '',
    childSchemeType: '',
    fundSourceHead: '',
    sanctionNo: '',
    whitebookPageNo: '',
    sanctionAmount: '',
    remarks: '',
  });

  const childSchemeOptions = [
    { value: 'Education', label: 'Education' },
    { value: 'Health', label: 'Health' },
    { value: 'Agriculture', label: 'Agriculture' },
    { value: 'Infrastructure', label: 'Infrastructure' }
  ];

  const fundSourceOptions = [
    { value: 'Central', label: 'Central Government' },
    { value: 'State', label: 'State Government' },
    { value: 'Private', label: 'Private Funding' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData(prev => ({ ...prev, [actionMeta.name]: selectedOption.value }));
  };
  return (
    <div className='bg-gradient-to-b from-[#88AFB6] to-[#5F959B]'>
       <div className="flex flex-col min-h-screen pt-4 pb-10  px-4 sm:px-8">
      {/* Top Nav */}
      <nav className="grid sm:grid-cols-4 grid-cols-1 w-full gap-[2px] sm:gap-0 sm:h-10 h-16">
        <div className="sm:col-span-3 pl-8 shadow-2xl sm:w-[98%] text-[11px] w-full rounded-sm bg-zinc-50 flex items-center sm:h-full">
          Path
        </div>
        <div className="sm:col-span-1 shadow-2xl sm:w-[98%] w-full rounded-sm bg-zinc-50 flex items-center justify-center sm:h-full">
          <span className=' text-red-400 text-[11px]'>Current Financial Year: </span>
          <span className='text-green-400 text-[11px] ml-1'>[{financialYear}]</span>
        </div>
      </nav>

      {/* Section: Add Source Grant Sanction */}
      <div className='flex flex-col w-full bg-white mt-3 rounded-sm'>
           <div className='flex w-full h-12 rounded-t-sm border-b border-black bg-gray-200 items-center justify-between'>
          <div className='h-full flex flex-col -ml-4 -mb-3 justify-center'>
            <span className='bg-[#007db8] text-[14px] items-center p-2 flex h-[28px] rounded-r-md text-white'>Add Source Grant Sanction</span>
            <div className="w-4 h-3 bg-gray-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
          </div>
          <div className='flex mr-4 sm:mr-10 cursor-pointer' onClick={() => setShowForm(prev => !prev)}>
            <FaChevronUp className={`text-xl text-red-400 transition-transform duration-300 ${!showForm ? 'rotate-180' : ''}`} />
          </div>
        </div>
        {/* Form and Footer */}
        {showForm && (
          <>
            <form className='flex text-[12.6px] bg-white border-b-[1px] border-gray-400 text-[#0334a0] flex-col sm:flex-row gap-4 sm:gap-2 p-4'>
              {/* Left Column */}
              <div className='flex flex-col sm:items-end sm:pr-10 gap-3 w-full sm:w-1/2 shadow-xl border border-gray-200 p-3 rounded-md'>
                <div className='flex justify-end flex-col sm:flex-row sm:items-center gap-1 w-full'>
                  <label>
                    Sanction Date<span className='text-red-500 px-1'>*</span>
                  </label>

                  <div className="relative text-black w-full sm:w-80">
                    <input
                      type="date"
                      name="sanctionDate"
                      value={formData.sanctionDate}
                      onChange={handleChange}
                      className='h-[25px] w-full rounded-sm custom-date-input border border-black/25 px-2 pr-8 appearance-none'
                    />
                    {/* ✅ Replaced Calendar Icon with FaChevronUp */}
                    <FaChevronUp className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm pointer-events-none" />
                  </div>

                  <HiOutlineQuestionMarkCircle className='text-lg text-black' />
                </div>

                <div className='flex justify-end flex-col sm:flex-row sm:items-center gap-1 w-full'>
                  <label>Demand Number<span className='text-red-500 px-1'>*</span></label>
                  <input type="text" name="demandNumber" value={formData.demandNumber} onChange={handleChange}
                    className='h-[25px] w-full sm:w-80 rounded-sm border border-black/25 px-2' />
                  <HiOutlineQuestionMarkCircle className='text-lg text-black' />
                </div>

                <div className='flex flex-col justify-end sm:flex-row sm:items-center gap-1 w-full'>
                  <label>Child Scheme Type<span className='text-red-500 px-1'>*</span></label>
                  <Select
                    name="childSchemeType"
                    options={childSchemeOptions}
                    onChange={handleSelectChange}
                    className="w-full  sm:w-80 text-black"
                    isSearchable
                    placeholder="Select Scheme Type"
                  />
                  <HiOutlineQuestionMarkCircle className='text-lg text-black' />
                </div>

                <div className='flex flex-col justify-end sm:flex-row sm:items-center gap-1 w-full'>
                  <label>Fund Source Head<span className='text-red-500 px-1'>*</span></label>
                  <Select
                    name="fundSourceHead"
                    options={fundSourceOptions}
                    onChange={handleSelectChange}
                    className="w-full bg-[#EAECEF] sm:w-80 text-black"
                    isSearchable
                    placeholder="Select Fund Source"
                  />
                  <HiOutlineQuestionMarkCircle className='text-lg text-black' />
                </div>

                <div className='flex justify-end flex-col sm:flex-row sm:items-center gap-1 w-full'>
                  <label>Sanction No<span className='text-red-500 px-1'>*</span></label>
                  <input type="text" name="sanctionNo" value={formData.sanctionNo} onChange={handleChange}
                    className='h-[25px] bg-[#EAECEF] w-full sm:w-80 rounded-sm border border-black/25 px-2' />
                  <HiOutlineQuestionMarkCircle className='text-lg text-black' />
                </div>
              </div>

              {/* Right Column */}
              <div className='flex flex-col sm:items-end sm:pr-10 gap-3 w-full sm:w-1/2 shadow-xl border border-gray-200 p-3 rounded-md'>
                <div className='flex justify-end flex-col sm:flex-row sm:items-center gap-1 w-full'>
                  <label>Whitebook Page No<span className='text-red-500 px-1'>*</span></label>
                  <input type="text" name="whitebookPageNo" value={formData.whitebookPageNo} onChange={handleChange}
                    className='h-[25px] bg-[#EAECEF] w-full sm:w-80 rounded-sm border border-black/25 px-2' />
                  <HiOutlineQuestionMarkCircle className='text-lg text-black' />
                </div>

                <div className='flex justify-end flex-col sm:flex-row sm:items-center gap-1 w-full'>
                  <label>Sanction Amount<span className='text-red-500 px-1'>*</span></label>
                  <input type="text" name="sanctionAmount" value={formData.sanctionAmount} onChange={handleChange}
                    className='h-[25px] bg-[#EAECEF] w-full sm:w-80 rounded-sm border border-black/25 px-2' />
                  <HiOutlineQuestionMarkCircle className='text-lg text-black' />
                </div>

                <div className='flex flex-col justify-end sm:flex-row sm:items-start gap-1 w-full'>
                  <label>Remarks<span className='text-red-500 px-1'>*</span></label>
                  <textarea name="remarks" value={formData.remarks} onChange={handleChange}
                    className='h-16 bg-[#EAECEF] w-full sm:w-80 rounded-2xl border border-black/25 px-2 resize-none' />
                  <HiOutlineQuestionMarkCircle className='text-lg text-black' />
                </div>
              </div>
            </form>
          </>
        )}

        {/* Footer */}
        <div className='flex gap-3 w-full h-22 bg-[#F5F5F5] rounded-b-md items-center justify-end px-8'>
          <button className='flex items-center gap-1 bg-[#C7BE41] px-3 py-1 text-sm rounded-sm text-white'><RiResetLeftFill />Reset</button>
          <button onClick={() => setShowForm2(false)} className='flex py-1 items-center gap-1 bg-[#C7BE41] px-3 text-sm rounded-sm text-white'><FaArrowUp />Collapse</button>
          <button className='flex items-center gap-1 bg-[#5C7A89] py-1 px-3 text-sm rounded-sm text-white'><FaRegSave />Save</button>
        </div>
      </div>

      {/* Source Grant Sanction Master */}

         <div className='flex flex-col w-full bg-white mt-3 rounded-sm'>
           <div className='flex w-full h-12 rounded-t-sm border-b border-black bg-gray-200 items-center justify-between'>
          <div className='h-full flex flex-col -ml-4 -mb-3 justify-center'>
            <span className='bg-[#007db8] text-[14px] items-center p-2 flex h-1/2 texr-white'>Add Source Grant Sanction</span>
            <div className="w-4 h-3 bg-gray-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
          </div>
          <div className='flex mr-4 sm:mr-10 cursor-pointer' onClick={() => setShowForm(prev => !prev)}>
            <FaChevronUp className={`text-xl text-red-400 transition-transform duration-300 ${!showForm ? 'rotate-180' : ''}`} />
          </div>
        </div>
        {/* Form and Footer */}
        {showForm && (
         <div className='flex h-full w-full object-contain'>
           <Grant_Sanction_pqgrid/>
          </div>
        )}

        {/* Footer */}
       
      </div>



   
    </div>
    </div>
  )
}

export default Grant_Section_Voucher