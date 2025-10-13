import { Building2, Globe, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">BIDA</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
            BIDA is a decentralized blockchain platform bridging real-world assets (RWAs) with digital ownership.
            Through smart contracts and NFT-based representations, especially in real estate, it enables tokenization,
            fractional ownership, and transparent on-chain trading.
          </p>
          <p className="text-lg text-foreground/60 leading-relaxed text-pretty">
            The BIDA ecosystem combines decentralized crowdfunding, live-stream engagement, and an affiliate growth
            model to boost accessibility, liquidity, and trust in asset tokenization. Its native token, $BIDA, powers
            all transactions, fees, staking, and rewards. With a fixed supply of 500 million, it drives a deflationary,
            utility-based economy that supports sustainable value growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8 hover-glow">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real Estate Focus</h3>
            <p className="text-foreground/70 leading-relaxed">
              Specialized in tokenizing real estate assets, making property investment accessible to everyone through
              fractional ownership.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover-glow">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Globe className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Global Access</h3>
            <p className="text-foreground/70 leading-relaxed">
              Borderless platform enabling worldwide participation in asset ownership and investment opportunities.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover-glow">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
            <p className="text-foreground/70 leading-relaxed">
              Built on community empowerment with affiliate rewards, live engagement, and transparent governance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
