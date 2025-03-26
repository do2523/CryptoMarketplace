import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/navbar.tsx'
import Carousel from './components/Carousel.tsx'
import HeroSection  from './components/hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <HeroSection />
    <Carousel />
    <App />
  </StrictMode>,
)
