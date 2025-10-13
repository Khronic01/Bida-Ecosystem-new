import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Scale, ShieldAlert, AlertCircle, CheckCircle, XCircle, Globe } from "lucide-react"

export default function LegalDisclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 animate-glow">
                <Scale size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Legal Disclaimer</h1>
              <p className="text-foreground/70 text-lg">Last Updated: January 2025</p>
            </div>

            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-lg p-8 mb-12">
              <div className="flex items-start gap-4">
                <ShieldAlert size={32} className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-red-500 mb-4">CRITICAL LEGAL NOTICE</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    THIS LEGAL DISCLAIMER CONTAINS IMPORTANT INFORMATION REGARDING THE BIDA PLATFORM, $BIDA TOKEN, AND
                    ASSOCIATED SERVICES. PLEASE READ THIS DOCUMENT CAREFULLY AND IN ITS ENTIRETY BEFORE ACCESSING OR
                    USING ANY BIDA SERVICES.
                  </p>
                  <p className="text-foreground/70 leading-relaxed font-bold">
                    BY ACCESSING OR USING THE BIDA PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE
                    TO BE BOUND BY THIS LEGAL DISCLAIMER.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <XCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Not a Security - Utility Token Only</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">1.1 Token Classification</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      The $BIDA token is a <strong>utility token</strong> designed exclusively for functional use within
                      the BIDA ecosystem. $BIDA is <strong>NOT</strong>:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>
                        A security as defined by the U.S. Securities Act of 1933, the Securities Exchange Act of 1934,
                        or any other securities laws
                      </li>
                      <li>An investment contract, investment vehicle, or financial instrument</li>
                      <li>A share, equity interest, or ownership stake in BIDA or any affiliated entity</li>
                      <li>A debt instrument, bond, note, or evidence of indebtedness</li>
                      <li>A derivative, commodity, or regulated financial product</li>
                      <li>
                        Subject to registration requirements under the Securities Act or any other securities laws
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">1.2 No Securities Law Protections</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      Because $BIDA is not a security, holders do NOT receive the protections afforded by securities
                      laws, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>SEC registration and disclosure requirements</li>
                      <li>Periodic financial reporting obligations</li>
                      <li>Anti-fraud protections under securities laws</li>
                      <li>Rights to sue under securities regulations</li>
                      <li>Investor protection mechanisms</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">1.3 Howey Test Analysis</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      $BIDA does not meet the criteria of the Howey Test for determining securities:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>
                        <strong>No Investment of Money:</strong> Token acquisition is for utility access, not investment
                      </li>
                      <li>
                        <strong>No Common Enterprise:</strong> Token holders do not share in a pooled investment
                      </li>
                      <li>
                        <strong>No Expectation of Profits:</strong> Tokens provide utility functions, not profit rights
                      </li>
                      <li>
                        <strong>No Efforts of Others:</strong> Token value derives from ecosystem utility, not
                        managerial efforts
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">2. No Investment Advice or Recommendations</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.1 Not Financial Advice</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4 uppercase font-bold">
                      NOTHING ON THE BIDA PLATFORM, WEBSITE, WHITEPAPER, OR ANY RELATED MATERIALS CONSTITUTES FINANCIAL,
                      INVESTMENT, LEGAL, TAX, OR PROFESSIONAL ADVICE OF ANY KIND.
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      All information provided is for general informational purposes only and should not be relied upon
                      for making financial decisions. You should:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>Conduct your own independent research and due diligence</li>
                      <li>Consult with qualified financial, legal, and tax advisors</li>
                      <li>Understand the risks before acquiring or using $BIDA tokens</li>
                      <li>Make decisions based on your own judgment and risk tolerance</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.2 No Recommendations</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      BIDA does not recommend, endorse, or suggest that you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>Purchase, acquire, hold, or sell $BIDA tokens</li>
                      <li>Participate in any tokenized asset offerings</li>
                      <li>Engage in any specific investment strategy</li>
                      <li>Allocate any particular amount of capital to cryptocurrency</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.3 No Guarantees or Promises</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      We make <strong>NO representations, warranties, or guarantees</strong> regarding:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>Future token value, price appreciation, or returns</li>
                      <li>Liquidity, market demand, or trading volume</li>
                      <li>Platform success, adoption, or longevity</li>
                      <li>Regulatory approval or compliance outcomes</li>
                      <li>Technical functionality or absence of defects</li>
                      <li>Achievement of roadmap milestones or objectives</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldAlert size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">3. Comprehensive Risk Disclosures</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.1 Risk of Total Loss</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4 uppercase font-bold">
                      YOU MAY LOSE YOUR ENTIRE INVESTMENT. ONLY PARTICIPATE WITH FUNDS YOU CAN AFFORD TO LOSE
                      COMPLETELY.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.2 Cryptocurrency Risks</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>
                        <strong>Extreme Volatility:</strong> Token prices can fluctuate wildly and unpredictably
                      </li>
                      <li>
                        <strong>Lack of Regulation:</strong> Cryptocurrency markets are largely unregulated
                      </li>
                      <li>
                        <strong>No Investor Protections:</strong> No FDIC insurance, SIPC protection, or similar
                        safeguards
                      </li>
                      <li>
                        <strong>Irreversible Transactions:</strong> Blockchain transactions cannot be reversed or
                        refunded
                      </li>
                      <li>
                        <strong>Lost Private Keys:</strong> Lost keys result in permanent, irretrievable loss of tokens
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.3 Technical Risks</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>
                        <strong>Smart Contract Vulnerabilities:</strong> Bugs, exploits, or hacks may result in loss of
                        funds
                      </li>
                      <li>
                        <strong>Network Failures:</strong> Blockchain congestion, forks, or failures may disrupt
                        services
                      </li>
                      <li>
                        <strong>Technology Obsolescence:</strong> Newer technologies may render BIDA obsolete
                      </li>
                      <li>
                        <strong>Cybersecurity Threats:</strong> Hacking, phishing, and malware attacks
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.4 Regulatory Risks</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>
                        <strong>Regulatory Uncertainty:</strong> Cryptocurrency regulations are evolving and unclear
                      </li>
                      <li>
                        <strong>Adverse Regulatory Actions:</strong> Governments may ban, restrict, or heavily regulate
                        cryptocurrencies
                      </li>
                      <li>
                        <strong>Compliance Costs:</strong> Future regulations may impose significant compliance burdens
                      </li>
                      <li>
                        <strong>Jurisdictional Restrictions:</strong> Services may become unavailable in certain
                        jurisdictions
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.5 Market Risks</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>
                        <strong>Lack of Liquidity:</strong> You may be unable to sell tokens when desired
                      </li>
                      <li>
                        <strong>Market Manipulation:</strong> Cryptocurrency markets are susceptible to manipulation
                      </li>
                      <li>
                        <strong>Exchange Risks:</strong> Exchanges may fail, be hacked, or delist tokens
                      </li>
                      <li>
                        <strong>No Market Makers:</strong> No obligation to maintain liquidity or market prices
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">3.6 Project-Specific Risks</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>
                        <strong>Development Risks:</strong> Platform may not be completed or may fail to achieve
                        objectives
                      </li>
                      <li>
                        <strong>Competition:</strong> Other projects may offer superior solutions
                      </li>
                      <li>
                        <strong>Team Risks:</strong> Key team members may leave or underperform
                      </li>
                      <li>
                        <strong>Adoption Risks:</strong> Platform may fail to achieve user adoption
                      </li>
                      <li>
                        <strong>Funding Risks:</strong> Insufficient funding may prevent project completion
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">4. Regulatory Compliance Framework</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      4.1 Compliant Crowdfunding - Not Gambling
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      BIDA's raffle-style crowdfunding mechanism is a{" "}
                      <strong>compliant, asset-backed crowdfunding system</strong> that:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>Is backed by verified real-world assets with proof of ownership</li>
                      <li>Operates under applicable crowdfunding regulations and exemptions</li>
                      <li>Is NOT gambling, lottery, sweepstakes, or games of chance</li>
                      <li>Requires participant eligibility verification and compliance</li>
                      <li>Maintains transparency through blockchain-based verification</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">4.2 KYC/AML Compliance</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      BIDA implements robust Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures in
                      accordance with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>Financial Action Task Force (FATF) recommendations</li>
                      <li>Bank Secrecy Act (BSA) requirements</li>
                      <li>FinCEN guidance on virtual currencies</li>
                      <li>International AML/CTF standards</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">4.3 Regulatory Alignment</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      BIDA strives to align with global regulatory frameworks, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>
                        <strong>SEC (United States):</strong> Compliance with applicable exemptions and regulations
                      </li>
                      <li>
                        <strong>ESMA (European Union):</strong> Alignment with MiCA and other EU regulations
                      </li>
                      <li>
                        <strong>FINMA (Switzerland):</strong> Adherence to Swiss financial market regulations
                      </li>
                      <li>
                        <strong>FCA (United Kingdom):</strong> Compliance with UK crypto asset regulations
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">5. Jurisdictional Restrictions</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">5.1 Restricted Jurisdictions</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      BIDA services are NOT available to residents or citizens of the following jurisdictions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>Countries subject to comprehensive U.S. sanctions (e.g., North Korea, Iran, Syria, Cuba)</li>
                      <li>Jurisdictions where cryptocurrency activities are prohibited</li>
                      <li>Regions where BIDA services would violate local laws</li>
                      <li>Any jurisdiction added to our restricted list from time to time</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">5.2 User Responsibility</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">You are solely responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>Determining whether your use of BIDA services is legal in your jurisdiction</li>
                      <li>Complying with all applicable local, state, national, and international laws</li>
                      <li>Obtaining any required licenses, permits, or approvals</li>
                      <li>Paying all applicable taxes on token transactions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">6. No Liability - Complete Exoneration</h2>

                <p className="text-foreground/70 leading-relaxed mb-4 uppercase font-bold">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY AND ITS DIRECTORS, OFFICERS, EMPLOYEES,
                  AFFILIATES, AGENTS, CONTRACTORS, AND PARTNERS (COLLECTIVELY, "BIDA PARTIES") SHALL HAVE NO LIABILITY
                  WHATSOEVER FOR ANY:
                </p>

                <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                  <li>Direct, indirect, incidental, special, consequential, exemplary, or punitive damages</li>
                  <li>Loss of profits, revenue, business, data, or business opportunities</li>
                  <li>Token price fluctuations, depreciation, or total loss of value</li>
                  <li>Failed transactions, network congestion, or blockchain issues</li>
                  <li>Smart contract vulnerabilities, bugs, or exploits</li>
                  <li>Hacks, security breaches, or unauthorized access</li>
                  <li>Regulatory actions, investigations, or enforcement proceedings</li>
                  <li>Changes in law or regulatory interpretation</li>
                  <li>Third-party actions, including exchange failures or delistings</li>
                  <li>User errors, including lost private keys or incorrect transfers</li>
                  <li>Platform downtime, interruptions, or discontinuation</li>
                  <li>Inaccurate, incomplete, or misleading information</li>
                  <li>Failure to achieve roadmap objectives or milestones</li>
                  <li>Any other losses or damages of any kind</li>
                </ul>

                <p className="text-foreground/70 leading-relaxed mb-4 uppercase font-bold">
                  THE BIDA PARTIES SHALL NOT BE LIABLE UNDER ANY THEORY OF LIABILITY, WHETHER CONTRACT, TORT (INCLUDING
                  NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>

                <p className="text-foreground/70 leading-relaxed uppercase font-bold">
                  IN JURISDICTIONS THAT DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY, THE BIDA PARTIES'
                  LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">7. User Acknowledgments and Representations</h2>

                <p className="text-foreground/70 leading-relaxed mb-4">
                  By using BIDA services, you acknowledge, represent, and warrant that:
                </p>

                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>You have read and understood this Legal Disclaimer in its entirety</li>
                  <li>You understand that $BIDA is a utility token, not a security or investment</li>
                  <li>You are not relying on any statements, promises, or representations from BIDA</li>
                  <li>You have conducted your own independent research and due diligence</li>
                  <li>You understand and accept all risks associated with cryptocurrency</li>
                  <li>You can afford to lose your entire investment without financial hardship</li>
                  <li>You are not located in a restricted jurisdiction</li>
                  <li>You are in compliance with all applicable laws and regulations</li>
                  <li>You have consulted with qualified advisors as necessary</li>
                  <li>You are using BIDA services at your own risk and responsibility</li>
                  <li>You waive any and all claims against the BIDA Parties</li>
                  <li>You agree to indemnify and hold harmless the BIDA Parties</li>
                </ul>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">8. Forward-Looking Statements</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Certain statements in the whitepaper, website, and other materials may constitute "forward-looking
                  statements" regarding future plans, objectives, and expectations. These statements are subject to
                  risks, uncertainties, and assumptions and should not be relied upon as predictions of actual results.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Forward-looking statements include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                  <li>Roadmap milestones and timelines</li>
                  <li>Platform features and functionality</li>
                  <li>Partnership and integration plans</li>
                  <li>Token utility and ecosystem development</li>
                  <li>Market adoption and growth projections</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed uppercase font-bold">
                  ACTUAL RESULTS MAY DIFFER MATERIALLY FROM FORWARD-LOOKING STATEMENTS. WE UNDERTAKE NO OBLIGATION TO
                  UPDATE OR REVISE ANY FORWARD-LOOKING STATEMENTS.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">9. No Fiduciary Duty</h2>
                <p className="text-foreground/70 leading-relaxed">
                  BIDA and its team members owe NO fiduciary duties to token holders or platform users. We do not act as
                  your agent, advisor, or fiduciary. You are solely responsible for your own decisions and actions. We
                  have no obligation to act in your best interests or to prioritize your interests over our own or those
                  of other users.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">10. Severability and Survival</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  If any provision of this Legal Disclaimer is found to be invalid, illegal, or unenforceable, the
                  remaining provisions shall remain in full force and effect. The invalid provision shall be modified to
                  the minimum extent necessary to make it valid and enforceable while preserving its intent.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  The disclaimers, limitations of liability, and indemnification provisions shall survive any
                  termination or expiration of your use of BIDA services.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">For legal inquiries, please contact:</p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-foreground/70 leading-relaxed">
                    <strong>Email:</strong> legal@bida.finance
                    <br />
                    <strong>Website:</strong> https://bida.finance
                  </p>
                </div>
              </section>

              <div className="bg-red-500/10 border-2 border-red-500/30 rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <ShieldAlert size={32} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-500 mb-4">FINAL ACKNOWLEDGMENT</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4 uppercase font-bold">
                      BY ACCESSING OR USING THE BIDA PLATFORM, YOU ACKNOWLEDGE THAT:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>YOU HAVE READ AND UNDERSTOOD THIS ENTIRE LEGAL DISCLAIMER</li>
                      <li>YOU ACCEPT ALL RISKS ASSOCIATED WITH CRYPTOCURRENCY AND BLOCKCHAIN TECHNOLOGY</li>
                      <li>YOU UNDERSTAND THAT $BIDA IS A UTILITY TOKEN, NOT A SECURITY OR INVESTMENT</li>
                      <li>YOU ARE NOT RELYING ON ANY REPRESENTATIONS OR PROMISES FROM BIDA</li>
                      <li>YOU WAIVE ALL CLAIMS AGAINST THE BIDA PARTIES</li>
                      <li>YOU AGREE TO INDEMNIFY AND HOLD HARMLESS THE BIDA PARTIES</li>
                      <li>YOU ARE USING THE SERVICES AT YOUR OWN RISK AND RESPONSIBILITY</li>
                      <li>YOU MAY LOSE YOUR ENTIRE INVESTMENT</li>
                    </ul>
                    <p className="text-foreground/70 leading-relaxed uppercase font-bold">
                      IF YOU DO NOT AGREE WITH THIS LEGAL DISCLAIMER, DO NOT USE THE BIDA PLATFORM OR ACQUIRE $BIDA
                      TOKENS.
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
