"use client"

import { Coins, Vote, Lock, Zap, Copy, ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Token() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0xD652a4C6454ed3d8fdA72E429CB5083692Fdb929"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const utilities = [
    {
      icon: Coins,
      title: "Transaction Fees",
      description: "Settlement of all platform transaction fees",
    },
    {
      icon: Lock,
      title: "Staking",
      description: "Verification and governance privileges",
    },
    {
      icon: Zap,
      title: "Exclusive Access",
      description: "Access to exclusive pools and affiliate rewards",
    },
    {
      icon: Vote,
      title: "Governance",
      description: "Voting rights on platform decisions",
    },
  ]

  const demandMechanisms = [
    "Token burns for deflationary pressure",
    "Staking yields for long-term holders",
    "Deflationary reward structures",
    "Platform access and utility fees",
  ]

  return (
    <section id="token" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-glow">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">$BIDA Token</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            The Native <span className="gradient-text">Utility Token</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
            With a fixed supply of 500 million tokens, $BIDA drives a deflationary, utility-based economy that supports
            sustainable value growth.
          </p>

          <div className="bg-card border border-primary/30 rounded-2xl p-4 sm:p-6 space-y-4 hover-glow max-w-2xl mx-auto mt-6 sm:mt-8">
            <p className="text-xs sm:text-sm text-foreground/60 font-medium">Contract Address</p>
            <div className="flex items-center justify-center">
              <code className="text-xs sm:text-sm md:text-base text-primary font-mono bg-primary/10 px-3 sm:px-4 py-2 rounded-lg break-all text-center">
                {contractAddress}
              </code>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Button
                size="sm"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 bg-transparent gap-2 w-full sm:w-auto"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Address
                  </>
                )}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 bg-transparent gap-2 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://bscscan.com/token/0xd652a4c6454ed3d8fda72e429cb5083692fdb929"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  View on BSCScan
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Utility Functions</h3>
            <div className="grid gap-4">
              {utilities.map((utility, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 bg-card border border-border rounded-xl p-4 sm:p-5 hover-glow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <utility.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold mb-1">{utility.title}</h4>
                    <p className="text-foreground/70 text-sm">{utility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Demand Creation</h3>
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4 hover-glow">
              {demandMechanisms.map((mechanism, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/80">{mechanism}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4 animate-glow">
              <p className="text-white/80 text-xs sm:text-sm font-medium">Total Supply</p>
              <p className="text-4xl sm:text-5xl font-bold text-white">500M</p>
              <p className="text-white/80 text-xs sm:text-sm">$BIDA Tokens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
