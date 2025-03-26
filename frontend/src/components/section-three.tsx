import { HeroSection } from "./hero-section-dark"

function SectionThree() {
  return (
    <HeroSection
      title="Login"
      subtitle={{
        regular: "All of your Crytptocurrencies ",
        gradient: "In a single and secure place",
      }}
      description="Effortlessly track all your cryptocurrency assets in one place with our intuitive and AI-powered marketplace."
      ctaText="Get Started"
      ctaHref="/signup"
      bottomImage={{
          dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        darkLineColor: "#2a2a2a",
      }}
    />
  )
}
export { SectionThree }
