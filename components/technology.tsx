import { Cpu, FileCode, Shield, Zap } from "lucide-react"

export function Technology() {
  const techFeatures = [
    {
      icon: Cpu,
      title: "Blockchain Layer",
      description:
        "Employs a hybrid Proof of Stake (PoS) and Proof of Activity (PoA) consensus for speed and decentralization.",
    },
    {
      icon: FileCode,
      title: "Smart Contracts",
      description: "Govern tokenization, fractional ownership, and crowdfunding operations with automated execution.",
    },
    {
      icon: Shield,
      title: "Security Protocols",
      description: "Include third-party audits, KYC/AML integrations, and fraud prevention measures.",
    },
    {
      icon: Zap,
      title: "Scalability Solutions",
      description:
        "Utilize Layer 2 and sidechain technology to manage transaction throughput and diverse asset support.",
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technology <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
            The BIDA architecture operates on a multi-layered blockchain infrastructure ensuring scalability, security,
            and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {techFeatures.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover-glow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 animate-glow">
                  <feature.icon className="text-white" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
