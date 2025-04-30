import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import HowItWorks from "@/components/HowItWorks"
import CTAButton from "@/components/CTAButton"

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      
      <HeroSection />
      <HowItWorks />
      <CTAButton />
      <footer />
    </main>
  )
}