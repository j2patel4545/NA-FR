import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [email, setUserEmail] = useState(null)

  return (
    <UserContext.Provider value={{ email, setUserEmail }}>
      {children}
    </UserContext.Provider>
  )
}
