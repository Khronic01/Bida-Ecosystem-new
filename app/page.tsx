import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Vision } from "@/components/vision"
import { Platform } from "@/components/platform"
import { Technology } from "@/components/technology"
import { Token } from "@/components/token"
import { Tokenomics } from "@/components/tokenomics"
import { FundsAllocation } from "@/components/funds-allocation"
import { Legal } from "@/components/legal"
import { Ecosystem } from "@/components/ecosystem"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Vision />
      <Platform />
      <Technology />
      <Token />
      <Tokenomics />
      <FundsAllocation />
      <Legal />
      <Ecosystem />
      <Roadmap />
      <Footer />
    </main>
  )
}
