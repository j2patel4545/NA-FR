import React from 'react'


import MainRouting from './Routers/MainRouting'
import { UserProvider } from './ContextAPI/User.Context/UserContext'

function App() {
  return (
    <UserProvider>    <div className=' bg-gradient-to-b from-[#88AFB6] to-[#5F959B] backdrop-blur-2xl'>
      <MainRouting/>
    </div>
    </UserProvider>

  )
}

export default App
