'use client'

import { SplineScene } from "./ui/splite"
import { Card } from "./card"
import { Spotlight } from "./spotlight"
interface SpotlightProps {
    fill?: string; // or any appropriate type
    className?: string;
    // other props
  }
  
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[900px] bg-black/[0.96] relative overflow-hidden fill-amber-300">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Crypto Market Place
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg text-2xl ">
          Transform your cryptocurrency experience with AI, making it easier, smarter, and more personalized for you.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}