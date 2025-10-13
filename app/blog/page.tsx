import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Coins, Users, TrendingUp, Shield, Zap, Globe, Award, CheckCircle2 } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary animate-glow">
                Deep Dive into BIDA Ecosystem
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Understanding <span className="gradient-text">Raffle-Style Crowdfunding</span> & The BIDA Ecosystem
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Discover how BIDA revolutionizes real-world asset tokenization through compliant, transparent, and
              accessible crowdfunding mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">What is Raffle-Style Crowdfunding?</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                BIDA's raffle-style crowdfunding is a revolutionary approach to democratizing access to high-value
                real-world assets. Unlike traditional gambling, our system is a compliant, asset-backed crowdfunding
                mechanism that allows participants to co-invest in verified real estate and other tangible assets
                through blockchain technology.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Each raffle represents a real asset with verified ownership, transparent valuation, and regulatory
                compliance. Participants purchase entries using $BIDA tokens, and the system ensures fair distribution
                through smart contracts and verifiable randomness.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold gradient-text">Core Features of the BIDA Ecosystem</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card border border-border rounded-xl hover-glow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Coins className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tokenization Engine</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Converts real-world assets into verified blockchain tokens with proof of ownership. Each token
                    represents a fractional share of the underlying asset, enabling divisible ownership and enhanced
                    liquidity.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl hover-glow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fractional Ownership</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Break down high-value assets into affordable shares. Investors can own portions of premium real
                    estate without needing millions in capital, democratizing access to wealth-building opportunities.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl hover-glow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compliant & Transparent</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Built-in KYC/AML mechanisms ensure regulatory compliance. All transactions are recorded on-chain,
                    providing complete transparency and audit trails for investors and regulators.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl hover-glow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Live-Stream Integration</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Real-time asset showcases and community engagement through live streaming. Property tours, Q&A
                    sessions, and transparent raffle draws build trust and excitement.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl hover-glow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Affiliate & Referral System</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Earn rewards by promoting active listings. The affiliate program incentivizes community growth and
                    creates a sustainable ecosystem where everyone benefits from network expansion.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl hover-glow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Leaderboard & Reputation</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Gamified ranking system showcases top contributors, investors, and organizers. Build your reputation
                    and unlock exclusive benefits as you participate in the ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold gradient-text">How the Ecosystem Functions</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Asset Verification & Tokenization</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Real-world assets undergo rigorous verification including legal ownership checks, professional
                      valuations, and compliance audits. Once verified, the asset is tokenized on the blockchain with
                      immutable proof of ownership.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Crowdfunding Campaign Launch</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Asset owners create crowdfunding campaigns with transparent terms, funding goals, and timelines.
                      Participants can review all documentation, valuations, and legal structures before investing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Participation</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Investors purchase raffle entries using $BIDA tokens. Each entry represents a chance to win
                      ownership or fractional shares. Live streams showcase the asset and build community engagement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Contract Execution</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      When the campaign reaches its goal, smart contracts automatically execute the raffle using
                      verifiable randomness. Winners receive their ownership tokens, and all transactions are recorded
                      on-chain for transparency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Secondary Market Trading</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Token holders can trade their fractional ownership on secondary markets, providing liquidity and
                      price discovery. DeFi integrations allow tokens to be used as collateral or yield-generating
                      assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Utilities & UVPs */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold gradient-text">Unique Value Propositions</h2>

              <div className="grid gap-6">
                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Democratized Access</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Break down barriers to high-value asset ownership. Anyone, anywhere can participate in premium
                        real estate investments with minimal capital requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Enhanced Liquidity</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Traditional real estate is illiquid and takes months to sell. BIDA tokens can be traded 24/7 on
                        secondary markets, providing instant liquidity for asset owners and investors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Transparent & Trustless</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        All transactions, ownership records, and asset valuations are recorded on-chain. Smart contracts
                        eliminate the need for intermediaries, reducing costs and increasing trust.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Global Participation</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Blockchain technology enables borderless transactions. Investors from any country can
                        participate in asset opportunities worldwide, subject to local regulations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Deflationary Token Economics</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        $BIDA has a fixed supply of 500 million tokens. Token burns, staking rewards, and utility fees
                        create deflationary pressure, supporting long-term value appreciation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* $BIDA Token Utilities */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold gradient-text">$BIDA Token Utilities</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-3 text-primary">Transaction Fees</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    All platform transactions require $BIDA tokens for fee settlement, creating constant demand for the
                    token.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-3 text-primary">Staking & Governance</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Stake $BIDA to earn rewards and gain voting rights on platform decisions, asset listings, and
                    protocol upgrades.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-3 text-primary">Exclusive Access</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Hold $BIDA to access premium asset pools, early investment opportunities, and VIP features within
                    the ecosystem.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-3 text-primary">Affiliate Rewards</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Earn $BIDA tokens by referring new users and promoting active listings through the affiliate
                    program.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance & Security */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">Compliance & Security</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                BIDA operates as a fully compliant, asset-backed crowdfunding ecosystem, completely distinct from
                gambling operations. The platform aligns with global regulatory frameworks including SEC, ESMA, and
                FINMA standards for tokenized assets.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-card border border-border rounded-xl text-center">
                  <Shield className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-bold mb-2">KYC/AML Integration</h3>
                  <p className="text-sm text-foreground/70">
                    Built-in identity verification and anti-money laundering checks
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl text-center">
                  <Globe className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-bold mb-2">Global Compliance</h3>
                  <p className="text-sm text-foreground/70">Adherence to international regulatory standards</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl text-center">
                  <Zap className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-bold mb-2">Smart Contract Audits</h3>
                  <p className="text-sm text-foreground/70">Third-party security audits and continuous monitoring</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative p-12 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-bold">Ready to Join the Revolution?</h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  Start your journey into decentralized real-world asset ownership with BIDA. Buy $BIDA tokens and
                  participate in the future of asset tokenization.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover-glow text-lg px-8"
                    asChild
                  >
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=0xD652a4C6454ed3d8fdA72E429CB5083692Fdb929"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy $BIDA Now
                      <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 text-lg px-8 bg-transparent"
                    asChild
                  >
                    <a href="/BIDA-Whitepaper.pdf" download>
                      Download Whitepaper
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
