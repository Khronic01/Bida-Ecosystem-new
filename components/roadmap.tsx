import { Rocket, TrendingUp, Globe } from "lucide-react"

export function Roadmap() {
  const phases = [
    {
      icon: Rocket,
      phase: "Phase 1",
      title: "Short-Term",
      subtitle: "",
      items: ["MVP release", "Smart contract audits", "Initial token launch", "Community building"],
    },
    {
      icon: TrendingUp,
      phase: "Phase 2",
      title: "Mid-Term",
      subtitle: "",
      items: [
        "Expansion of token utility",
        "Partnership integrations",
        "Real estate onboarding",
        "Platform feature expansion",
      ],
    },
    {
      icon: Globe,
      phase: "Phase 3",
      title: "Long-Term",
      subtitle: "Year 2+",
      items: [
        "Cross-border regulatory alignment",
        "Multi-asset scaling",
        "Ecosystem decentralization",
        "Global market expansion",
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-12 sm:py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
            Our strategic plan for building the future of asset tokenization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover-glow relative">
              <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center animate-glow">
                  <phase.icon className="text-white" size={24} />
                </div>
              </div>

              <div className="pt-10 sm:pt-8 space-y-4 sm:space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-primary font-medium mb-1">{phase.phase}</p>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{phase.title}</h3>
                  {phase.subtitle && <p className="text-sm text-foreground/60">{phase.subtitle}</p>}
                </div>

                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
