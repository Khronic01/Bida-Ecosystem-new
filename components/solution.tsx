import { CheckCircle2, Sparkles } from "lucide-react"

export function Solution() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Sparkles className="text-primary" size={20} />
              <span className="text-sm text-primary font-medium">Our Solution</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Blockchain-Powered <span className="gradient-text">Asset Tokenization</span>
            </h2>

            <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
              BIDA leverages blockchain tokenization to fractionalize and decentralize ownership of real-world assets.
              By enabling fractional asset representation on-chain, users can co-own, invest, or crowdfund verified
              projects seamlessly.
            </p>

            <p className="text-lg text-foreground/60 leading-relaxed text-pretty">
              Through compliant and transparent mechanisms, including equity-based raffles and verifiable crowdfunding,
              BIDA eliminates traditional entry barriers, promotes liquidity, and ensures equitable participation
              globally.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Fractional ownership of high-value assets",
              "Transparent on-chain transactions",
              "Compliant crowdfunding mechanisms",
              "Global accessibility and participation",
              "Enhanced liquidity for asset owners",
              "Elimination of centralized intermediaries",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover-glow"
              >
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-primary" size={16} />
                </div>
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
