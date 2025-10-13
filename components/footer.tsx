import Image from "next/image"
import { Twitter, Send, BookOpen, MessageCircle, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 md:py-24 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="BIDA Logo" width={40} height={40} />
                <span className="text-xl sm:text-2xl font-bold gradient-text">BIDA</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Bridging real-world assets with blockchain technology for a decentralized future.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://x.com/bidauctiontoken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-glow"
                  aria-label="Twitter"
                >
                  <Twitter size={18} className="text-primary" />
                </a>
                <a
                  href="https://t.me/bidauctiontokenofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-glow"
                  aria-label="Telegram Channel"
                >
                  <Send size={18} className="text-primary" />
                </a>
                <a
                  href="https://medium.com/@bidauctiontoken/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-glow"
                  aria-label="Medium"
                >
                  <BookOpen size={18} className="text-primary" />
                </a>
                <a
                  href="https://discord.com/invite/Sr8D66vV65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-glow"
                  aria-label="Discord"
                >
                  <MessageCircle size={18} className="text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/company/bid-auction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-glow"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-primary" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Platform</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#platform"
                    className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#token"
                    className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors"
                  >
                    Token
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="/BIDA-Whitepaper.pdf"
                    download
                    className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors"
                  >
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Stay Updated</h3>
              <p className="text-foreground/70 mb-4 text-xs sm:text-sm">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 bg-input border border-border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover-glow w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-foreground/60 text-xs sm:text-sm text-center sm:text-left">
                © 2025 BIDA. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <a href="/privacy" className="text-foreground/60 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-foreground/60 hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="/legal" className="text-foreground/60 hover:text-primary transition-colors">
                  Legal
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-glow">
              <p className="text-white font-medium text-xs sm:text-sm md:text-base">
                Total Supply: 500,000,000 $BIDA • Bida.finance
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
