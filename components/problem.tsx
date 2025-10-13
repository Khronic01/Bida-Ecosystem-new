import { AlertCircle, Lock, TrendingDown, Users, DollarSign } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: DollarSign,
      title: "High Capital Barriers",
      description: "Traditional asset acquisition requires substantial upfront capital, excluding most investors.",
    },
    {
      icon: TrendingDown,
      title: "Limited Liquidity",
      description: "Asset owners face challenges in quickly converting their holdings to cash.",
    },
    {
      icon: Lock,
      title: "Centralized Intermediaries",
      description: "Opaque transactions controlled by middlemen reduce trust and increase costs.",
    },
    {
      icon: AlertCircle,
      title: "Lack of Transparency",
      description: "Unclear ownership records and valuation processes create uncertainty.",
    },
    {
      icon: Users,
      title: "Global Exclusion",
      description: "Cross-border investment barriers prevent worldwide participation in asset opportunities.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            The <span className="gradient-text">Problem</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
            Despite global asset expansion, ownership and access remain heavily centralized. The main pain points
            include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-5 sm:p-6 hover-glow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{problem.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
