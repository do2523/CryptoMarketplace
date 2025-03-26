import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Carousel from './components/Carousel.tsx'
import SectionTwo from './components/section-two.tsx'
import { SplineSceneBasic } from './components/InteractiveUI.tsx'
import { SectionThree } from './components/section-three.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <SplineSceneBasic />
    <SectionThree />
    <SectionTwo />
    <Carousel />
    <App />
  </StrictMode>,
)
