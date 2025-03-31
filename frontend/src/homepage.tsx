import Carousel from './components/Carousel.tsx'
import SectionTwo from './components/section-two.tsx'
import { SplineSceneBasic } from './components/InteractiveUI.tsx'
import { SectionThree } from './components/section-three.tsx'

export default function Homepage() {
    return <>
        <SplineSceneBasic />
        <SectionThree />
        <SectionTwo />
        <Carousel />
    </>
}