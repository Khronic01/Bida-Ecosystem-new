import { Users, TrendingUp, Gamepad2, Coins } from "lucide-react"

export function Ecosystem() {
  const strategies = [
    {
      icon: Users,
      title: "Community-Driven Listings",
      description: "Encourages decentralized asset onboarding through community participation.",
    },
    {
      icon: TrendingUp,
      title: "Affiliate Growth",
      description: "Incentivizes referral-driven participation with reward mechanisms.",
    },
    {
      icon: Gamepad2,
      title: "Gamified Rewards",
      description: "Builds engagement through ranking and reward systems.",
    },
    {
      icon: Coins,
      title: "DeFi Integration",
      description: "Enables tokenized assets to serve as collateral, yield sources, or swap assets.",
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ecosystem <span className="gradient-text">Growth Model</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
            BIDA's growth strategy is built on community empowerment and sustainable incentives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover-glow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 animate-glow">
                  <strategy.icon className="text-white" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{strategy.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{strategy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
