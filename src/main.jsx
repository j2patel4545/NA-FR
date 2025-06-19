import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RoutingContextProvider from './ContextAPI/Routing.Context/RoutingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutingContextProvider>
          <App />
    </RoutingContextProvider>
  </StrictMode>,
)
