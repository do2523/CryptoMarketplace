import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavHeader from './components/nav-header.tsx'
// import Navbar from './components/Navbar.tsx'
import Carousel from './components/Carousel.tsx'
import SectionTwo from './components/section-two.tsx'
import { SplineSceneBasic } from './components/InteractiveUI.tsx'
import { SectionThree } from './components/section-three.tsx'
import { Demo } from './components/demo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavHeader />
    {/* <Navbar /> */}
    <SplineSceneBasic />
    <SectionThree />
    <SectionTwo />
    <Carousel />
    <App />
    <Demo />
  </StrictMode>,
)
