import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ModuleSelect from '../../Pages/ModuleSelect';
import Landingpage from '../../Pages/Landingpage';
import SuperAdmin_Dashboard from '../../Pages/SuperAdmin_Pages/SuperAdmin_Dashboard';
import AcountingEmptyNav from '../../Components/NavBar/AcountingEmptyNav';
import Accounting_Dashboard from '../../Pages/SuperAdmin_Pages/Acounting/Accounting_Dashboard';

function SuperAdminRouting() {
                console.log("abc");

  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path='/a' element={<Landingpage/>}/> */}
                        <Route path='/' element={<ModuleSelect/>}/>
                        {/* <Route path='/' element={<SuperAdmin_Dashboard/>}/> */}
 <Route path='/Acounting/Dashboard' element={<><AcountingEmptyNav/><Landingpage/> </>} />
                {/* <Route path='/admin/dashboard/module_selection' element={<URP_Landing_page />} /> */}
                <Route path='/admin/account/dashboard' element={<><Dashboard_Nav_Acounting/><Accounting_Dashboard /></>} />
                {/* <Route path='/admin/account/trans/source_grant_sanction_master' element={<><Dashboard_Nav_Acounting/><Source_grant_sanction_master/></>} /> */}

        </Routes>
    </BrowserRouter>
  )
}

export default SuperAdminRouting
