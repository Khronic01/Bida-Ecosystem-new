import { Target, Heart, Shield } from "lucide-react"

export function Vision() {
  return (
    <section id="vision" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-2xl text-foreground/80 leading-relaxed text-balance font-medium">
            BIDA envisions a world where ownership is decentralized, transparent, and inclusive.
          </p>
          <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
            The mission is to democratize access to high-value real-world assets, driving financial inclusion while
            maintaining regulatory compliance and security. BIDA empowers individuals and institutions to seamlessly
            participate in tokenized asset ecosystems that combine accessibility with trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto animate-glow">
              <Target className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold">Decentralized</h3>
            <p className="text-foreground/70 leading-relaxed">
              Removing centralized control and empowering community-driven ownership.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto animate-glow">
              <Heart className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold">Inclusive</h3>
            <p className="text-foreground/70 leading-relaxed">
              Making high-value asset investment accessible to everyone, everywhere.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto animate-glow">
              <Shield className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold">Compliant</h3>
            <p className="text-foreground/70 leading-relaxed">
              Maintaining regulatory alignment and security at every level.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
