import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavHeader from './components/nav-header.tsx'
import { Demo } from './components/demo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavHeader />
    <App />
    <Demo />
  </StrictMode>,
)
