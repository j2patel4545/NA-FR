import React, { createContext, useState, useEffect } from 'react';
import SuperAdmin_Nav from '../../Components/NavBar/SuperAdmin_Nav';
import NAU_Landing_page from '../../Pages/NAU_Landing_page';
import LoginPage from '../../Pages/Login_Pages/LoginPage';

// 1. Create the context
export const RoutingContext = createContext();

// 2. Create the context provider component
function RoutingContextProvider({ children }) {
  const [selectedRoutingModel, setSelectedRoutingModel] = useState(null);
  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('islogedin');

    if (isLoggedIn === 'true') {
      setSelectedRoutingModel(
        <>
          <SuperAdmin_Nav />
          <NAU_Landing_page />
        </>
      );
    } else {
      setSelectedRoutingModel(<LoginPage />);
    }
  }, []);

  return (
    <RoutingContext.Provider value={{ selectedRoutingModel, setSelectedRoutingModel  }}>
      {children}
    </RoutingContext.Provider>
  );
}

export default RoutingContextProvider;
