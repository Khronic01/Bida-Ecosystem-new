import { Coins, Users, Video, Award, TrendingUp, FileCheck } from "lucide-react"

export function Platform() {
  const modules = [
    {
      icon: Coins,
      title: "Tokenization Engine",
      description: "Converts real-world assets into verified blockchain tokens, supported by proof of ownership.",
    },
    {
      icon: Users,
      title: "Fractional Ownership & Crowdfunding",
      description: "Enables co-ownership and efficient capital raising for asset investments.",
    },
    {
      icon: FileCheck,
      title: "Compliant Raffle-Style Crowdfunding",
      description: "Allows asset-backed raffles for fundraising in a compliant, non-gambling manner.",
    },
    {
      icon: Video,
      title: "Live-Stream Integration",
      description: "Facilitates live sessions for asset promotion and transparency.",
    },
    {
      icon: TrendingUp,
      title: "Affiliate & Referral System",
      description: "Rewards users who promote active listings and drive platform growth.",
    },
    {
      icon: Award,
      title: "Leaderboard & Reputation System",
      description: "Showcases top contributors, investors, and organizers.",
    },
  ]

  return (
    <section id="platform" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Platform <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
            The BIDA ecosystem is composed of several interconnected modules designed to provide a comprehensive asset
            tokenization experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {modules.map((module, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-5 sm:p-6 hover-glow group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                <module.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{module.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
