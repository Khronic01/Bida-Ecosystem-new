"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Platform", href: "#platform" },
    { label: "Token", href: "#token" },
    { label: "Roadmap", href: "#roadmap" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="BIDA Logo" width={50} height={50} className="animate-float" />
            <span className="text-2xl font-bold gradient-text">BIDA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-foreground/80 hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-primary to-secondary hover-glow" asChild>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0xD652a4C6454ed3d8fdA72E429CB5083692Fdb929"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy $BIDA
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover-glow" asChild>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0xD652a4C6454ed3d8fdA72E429CB5083692Fdb929"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy $BIDA
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
