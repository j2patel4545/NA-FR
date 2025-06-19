import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {useAuth} from '../../Context/AuthContext'
import URP_Landing_page from '../../Pages/Landingpage'
import LoginPage from '../../Pages/Login_Pages/LoginPage.jsx'

function User() {
  const {isLoggedIn, loading} = useAuth()

  if (loading) {
    return <div>Loading...</div> // You can replace this with a proper loading component
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ? <URP_Landing_page /> : <LoginPage />} 
        />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default User
