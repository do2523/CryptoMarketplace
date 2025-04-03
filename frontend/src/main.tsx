import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Demo } from './components/demo.tsx'
import Navbar from './components/Navbar.tsx'
import EtheriumDisplay from './components/etherButton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <App />
    <Demo />
  </StrictMode>
)
