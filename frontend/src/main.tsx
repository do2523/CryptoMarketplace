import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Carousel from './components/Carousel.tsx'
import HeroSection  from './components/hero.tsx'
import { SplineSceneBasic } from './components/InteractiveUI.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <SplineSceneBasic />
    <HeroSection />
    <Carousel />
    <App />
  </StrictMode>,
)
