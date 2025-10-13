import { Scale, Shield, FileCheck, Globe } from "lucide-react"

export function Legal() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Legal & <span className="gradient-text">Compliance</span>
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8 hover-glow">
            <p className="text-xl text-foreground/80 leading-relaxed text-pretty">
              BIDA functions as a compliant, asset-backed, decentralized crowdfunding ecosystem—completely distinct from
              any gambling operations. It aligns with global regulatory frameworks including SEC, ESMA, and FINMA
              standards for tokenized assets.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
              Built-in KYC/AML mechanisms and transparent user protection ensure regulatory trust and institutional
              integrity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Regulatory Alignment</h3>
                  <p className="text-foreground/70 text-sm">Compliant with SEC, ESMA, and FINMA standards</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">KYC/AML Integration</h3>
                  <p className="text-foreground/70 text-sm">Built-in identity verification and anti-money laundering</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">User Protection</h3>
                  <p className="text-foreground/70 text-sm">Transparent mechanisms ensuring investor safety</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Global Standards</h3>
                  <p className="text-foreground/70 text-sm">Adherence to international compliance frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
