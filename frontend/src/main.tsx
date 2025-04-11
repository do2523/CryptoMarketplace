import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Demo } from './components/footerDemo.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <App />
      <section className="flex-grow"></section>
      <Demo />
    </div>
  </StrictMode>
)