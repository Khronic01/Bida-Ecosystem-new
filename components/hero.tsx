"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Coins, Shield, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4 sm:pt-20 sm:px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/30 rounded-full text-xs sm:text-sm text-primary animate-glow">
                Total Supply: 500,000,000 $BIDA
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Bridging Real-World Assets to <span className="gradient-text">Blockchain</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
              BIDA is a decentralized blockchain platform enabling tokenization, fractional ownership, and transparent
              on-chain trading of real-world assets, especially in real estate.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover-glow text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0xD652a4C6454ed3d8fdA72E429CB5083692Fdb929"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy $BIDA
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 bg-transparent w-full sm:w-auto"
                asChild
              >
                <a href="/BIDA-Whitepaper.pdf" download>
                  Read Whitepaper
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8">
              <div className="space-y-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Coins className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm text-foreground/60">Fractional Ownership</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm text-foreground/60">Secure & Compliant</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm text-foreground/60">Enhanced Liquidity</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl sm:rounded-3xl animate-glow" />
              <div className="absolute inset-1 sm:inset-2 bg-card rounded-2xl sm:rounded-3xl flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="BIDA Logo"
                  width={400}
                  height={400}
                  className="animate-float w-3/4 sm:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
