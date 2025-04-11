import { Hexagon, Github, Twitter } from "lucide-react"
import { Footer } from "@/components/ui/footer"

function Demo() {
  return (
    <div className="w-full">
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="Crypto Marketplace"
        socialLinks={[
          // {
          //   icon: <Twitter className="h-5 w-5" />,
          //   href: "https://twitter.com",
          //   label: "Twitter",
          // },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com/do2523/CryptoMarketplace",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/signup", label: "Sign In" },
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2024 Awesome Corp",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { Demo }