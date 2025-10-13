import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, AlertTriangle, Scale, ShieldCheck, Ban, Users } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 animate-glow">
                <FileText size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Terms of Service</h1>
              <p className="text-foreground/70 text-lg">Last Updated: January 2025</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-500 mb-2">Important Notice</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Please read these Terms of Service carefully before using the BIDA platform. By accessing or using
                    our services, you agree to be bound by these terms. If you do not agree with any part of these
                    terms, you must not use our platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or
                  "your") and BIDA ("Company," "we," "us," or "our") governing your access to and use of the BIDA
                  platform, website, and related services (collectively, the "Services").
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  By accessing or using the Services, you represent and warrant that you have the legal capacity to
                  enter into these Terms and that you are at least 18 years of age or the age of majority in your
                  jurisdiction.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">2. Nature of Services and Token Utility</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.1 Platform Description</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      BIDA is a blockchain-based platform that facilitates the tokenization of real-world assets (RWAs)
                      and provides compliant crowdfunding mechanisms. The platform enables fractional ownership,
                      transparent on-chain trading, and community-driven asset participation.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.2 $BIDA Token - Utility Only</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      The $BIDA token is a <strong>utility token</strong> designed exclusively for use within the BIDA
                      ecosystem. It is NOT:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>A security, investment contract, or financial instrument</li>
                      <li>A share, equity, or ownership interest in the Company</li>
                      <li>A promise or guarantee of profits, returns, or appreciation</li>
                      <li>Subject to securities laws or regulations</li>
                      <li>An investment opportunity or speculative asset</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.3 Token Utility Functions</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      $BIDA tokens serve the following utility purposes only:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>Payment of transaction fees on the platform</li>
                      <li>Access to platform features and services</li>
                      <li>Participation in governance voting mechanisms</li>
                      <li>Staking for platform verification privileges</li>
                      <li>Rewards for affiliate and referral activities</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">3. Risk Disclosures and Disclaimers</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.1 No Investment Advice</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      <strong>NOTHING ON THIS PLATFORM CONSTITUTES INVESTMENT, FINANCIAL, LEGAL, OR TAX ADVICE.</strong>{" "}
                      We do not provide recommendations regarding the purchase, sale, or holding of $BIDA tokens or any
                      tokenized assets. You are solely responsible for conducting your own research and making your own
                      decisions.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.2 No Guarantees or Warranties</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      We make NO representations, warranties, or guarantees regarding:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>The value, price, or liquidity of $BIDA tokens</li>
                      <li>The success or profitability of any tokenized asset</li>
                      <li>The availability or functionality of the platform</li>
                      <li>The accuracy or completeness of any information provided</li>
                      <li>Future developments, upgrades, or features</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.3 Cryptocurrency Risks</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      You acknowledge and accept the following risks associated with blockchain technology and
                      cryptocurrencies:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>
                        <strong>Volatility:</strong> Token prices can fluctuate dramatically and unpredictably
                      </li>
                      <li>
                        <strong>Loss of Access:</strong> Lost private keys result in permanent loss of tokens
                      </li>
                      <li>
                        <strong>Regulatory Changes:</strong> Laws and regulations may change unfavorably
                      </li>
                      <li>
                        <strong>Technical Risks:</strong> Smart contract bugs, hacks, or network failures
                      </li>
                      <li>
                        <strong>Market Risks:</strong> Lack of liquidity, market manipulation, or exchange failures
                      </li>
                      <li>
                        <strong>Total Loss:</strong> You may lose your entire investment
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      3.4 Compliant Crowdfunding - Not Gambling
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      BIDA's raffle-style crowdfunding mechanism is a{" "}
                      <strong>compliant, asset-backed crowdfunding system</strong> and is NOT gambling, lottery, or
                      games of chance. All raffles are backed by verified real-world assets and comply with applicable
                      crowdfunding regulations. Participation is voluntary and subject to eligibility requirements.
                    </p>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">4. User Responsibilities and Obligations</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">4.1 Eligibility</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      By using the Services, you represent and warrant that:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>You are at least 18 years old or the age of majority in your jurisdiction</li>
                      <li>You have the legal capacity to enter into binding contracts</li>
                      <li>You are not located in a restricted jurisdiction</li>
                      <li>You are not subject to economic sanctions or prohibited parties lists</li>
                      <li>Your use of the Services complies with all applicable laws</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">4.2 KYC/AML Compliance</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      You agree to complete all required Know Your Customer (KYC) and Anti-Money Laundering (AML)
                      verification procedures. We reserve the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>Request additional documentation or information</li>
                      <li>Suspend or terminate accounts that fail verification</li>
                      <li>Report suspicious activities to relevant authorities</li>
                      <li>Refuse service to any user at our discretion</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">4.3 Prohibited Activities</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">You agree NOT to:</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>Use the Services for illegal activities or money laundering</li>
                      <li>Manipulate markets, prices, or trading volumes</li>
                      <li>Create multiple accounts or use false identities</li>
                      <li>Attempt to hack, disrupt, or compromise platform security</li>
                      <li>Violate intellectual property rights</li>
                      <li>Engage in fraudulent or deceptive practices</li>
                      <li>Use automated systems (bots) without authorization</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Ban size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>

                    <p className="text-foreground/70 leading-relaxed mb-4 uppercase font-bold">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-primary">5.1 No Liability for Losses</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      THE COMPANY, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AND AGENTS SHALL NOT BE LIABLE FOR
                      ANY:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>Direct, indirect, incidental, special, consequential, or punitive damages</li>
                      <li>Loss of profits, revenue, data, or business opportunities</li>
                      <li>Token price fluctuations or loss of token value</li>
                      <li>Failed transactions or network congestion</li>
                      <li>Smart contract vulnerabilities or exploits</li>
                      <li>Third-party actions, including exchange failures or hacks</li>
                      <li>Regulatory actions or changes in law</li>
                      <li>User errors, including lost private keys or incorrect transfers</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">5.2 Services Provided "AS IS"</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                      IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                      PURPOSE, OR NON-INFRINGEMENT.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-primary">5.3 Maximum Liability Cap</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      IN NO EVENT SHALL THE COMPANY'S TOTAL LIABILITY TO YOU EXCEED THE AMOUNT OF FEES YOU PAID TO US IN
                      THE SIX (6) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ONE HUNDRED US DOLLARS ($100),
                      WHICHEVER IS LESS.
                    </p>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">6. Indemnification</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  You agree to indemnify, defend, and hold harmless the Company and its directors, officers, employees,
                  affiliates, agents, and partners from and against any and all claims, liabilities, damages, losses,
                  costs, expenses, or fees (including reasonable attorneys' fees) arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Your use or misuse of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content or information you submit to the platform</li>
                </ul>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">7. Dispute Resolution and Governing Law</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">7.1 Governing Law</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction],
                      without regard to its conflict of law provisions.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-primary">7.2 Arbitration Agreement</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      Any dispute, controversy, or claim arising out of or relating to these Terms or the Services shall
                      be resolved through binding arbitration in accordance with the rules of [Arbitration Body]. The
                      arbitration shall be conducted in English, and the arbitrator's decision shall be final and
                      binding.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-primary">7.3 Class Action Waiver</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS
                      AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU WAIVE YOUR RIGHT TO PARTICIPATE IN
                      A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
                    </p>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  All content, features, and functionality of the Services, including but not limited to text, graphics,
                  logos, icons, images, audio clips, video clips, data compilations, software, and the compilation
                  thereof (collectively, "Content"), are the exclusive property of the Company or its licensors and are
                  protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                  perform, republish, download, store, or transmit any Content without our prior written consent.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your access to the Services at any time, with or without
                  cause, with or without notice, and without liability. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Your right to use the Services immediately ceases</li>
                  <li>You remain liable for all obligations incurred prior to termination</li>
                  <li>Sections of these Terms that by their nature should survive termination shall survive</li>
                  <li>We are not obligated to return any fees or tokens</li>
                </ul>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
                <p className="text-foreground/70 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will provide notice of material changes by
                  posting the updated Terms on the platform and updating the "Last Updated" date. Your continued use of
                  the Services after such modifications constitutes your acceptance of the modified Terms. If you do not
                  agree to the modified Terms, you must discontinue use of the Services.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">11. Severability</h2>
                <p className="text-foreground/70 leading-relaxed">
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining
                  provisions shall continue in full force and effect. The invalid provision shall be modified to the
                  minimum extent necessary to make it valid and enforceable.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">12. Entire Agreement</h2>
                <p className="text-foreground/70 leading-relaxed">
                  These Terms, together with our Privacy Policy and any other legal notices published on the platform,
                  constitute the entire agreement between you and the Company regarding the Services and supersede all
                  prior agreements, understandings, and communications, whether written or oral.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-foreground/70 leading-relaxed">
                    <strong>Email:</strong> legal@bida.finance
                    <br />
                    <strong>Website:</strong> https://bida.finance
                  </p>
                </div>
              </section>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle size={24} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-500 mb-2">Final Acknowledgment</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      BY USING THE BIDA PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND
                      BY THESE TERMS OF SERVICE. YOU FURTHER ACKNOWLEDGE THAT YOU ARE USING THE SERVICES AT YOUR OWN
                      RISK AND THAT THE COMPANY SHALL NOT BE LIABLE FOR ANY LOSSES YOU MAY INCUR.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
