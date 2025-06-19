import React, { useContext } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { RoutingContext } from '../ContextAPI/Routing.Context/RoutingContext';
import OTPpermition from '../Pages/Login_Pages/OTPpermition';
import PasswordPage from '../Pages/Login_Pages/PasswordPage';
import ModuleSelect from '../Pages/ModuleSelect';
import URP_Landing_page from '../Pages/Landingpage';
import Accounting_Dashboard from '../Pages/SuperAdmin_Pages/Acounting/Accounting_Dashboard';
import Grant_Section_Voucher from '../Pages/SuperAdmin_Pages/Acounting/Grant_Section_Voucher';
import SuperAdmin_Nav from '../Components/NavBar/SuperAdmin_Nav';
import Acounting_Nav from '../Components/NavBar/Acounting_Nav';
import NAU_Landing_page from '../Pages/NAU_Landing_page';


function MainRouting() {
   const {selectedRoutingModel}= useContext(RoutingContext);
    const defaultPage = selectedRoutingModel
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={defaultPage}/>
        <Route  path='/AuthManager/selAuthOptions' element={<OTPpermition/>}/>
        <Route  path='/AuthManager/authPinLogin' element={<PasswordPage/>}/>
        <Route  path='/AuthManager/dashBord' element={defaultPage}/> //URP Selec Page
        <Route  path='/admin/dashboard/dashboard' element={<ModuleSelect/>}/> // admin Select page
        <Route  path='/admin/Dashboard/module_selection' element={<><SuperAdmin_Nav/><URP_Landing_page/></>}/> 
        <Route  path='/admin/account/dashboard/Dashboard' element={<><Acounting_Nav/><Accounting_Dashboard/></>}/>
        <Route  path='/admin/account/trans/Source_grant_sanction_master' element={<><Acounting_Nav/><Grant_Section_Voucher/></>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default MainRouting
