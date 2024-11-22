import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Landing from './components/Landing.jsx'
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import Concert from './components/Concert.jsx'
import Artist from './components/Artist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Artist />
  </StrictMode>,
)
