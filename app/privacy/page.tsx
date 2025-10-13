import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, Database, UserCheck, Globe } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 animate-glow">
                <Shield size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
              <p className="text-foreground/70 text-lg">Last Updated: January 2025</p>
            </div>

            <div className="space-y-12">
              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      BIDA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                      how we collect, use, disclose, and safeguard your information when you visit our website and use
                      our blockchain platform services.
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      By accessing or using BIDA services, you acknowledge that you have read, understood, and agree to
                      be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please
                      do not access the platform.
                    </p>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.1 Personal Information</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-6 ml-4">
                      <li>Register for an account</li>
                      <li>Complete KYC/AML verification procedures</li>
                      <li>Participate in token transactions</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Contact our support team</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.2 Blockchain Data</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      As a blockchain-based platform, certain information is publicly available on the blockchain,
                      including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-6 ml-4">
                      <li>Wallet addresses</li>
                      <li>Transaction history</li>
                      <li>Token holdings</li>
                      <li>Smart contract interactions</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-primary">2.3 Automatically Collected Information</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      We automatically collect certain information when you visit our platform:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>Usage patterns and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      We use the collected information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>To provide, operate, and maintain our platform services</li>
                      <li>To comply with KYC/AML and regulatory requirements</li>
                      <li>To process transactions and manage tokenization activities</li>
                      <li>To detect, prevent, and address fraud and security issues</li>
                      <li>To communicate with you about updates, security alerts, and support</li>
                      <li>To improve our platform and develop new features</li>
                      <li>To analyze usage patterns and optimize user experience</li>
                      <li>To comply with legal obligations and enforce our terms</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      We do not sell your personal information. We may share your information in the following
                      circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                      <li>
                        <strong>Regulatory Compliance:</strong> With government authorities, regulators, and law
                        enforcement when required by law
                      </li>
                      <li>
                        <strong>Service Providers:</strong> With trusted third-party service providers who assist in
                        platform operations (KYC providers, hosting services, analytics)
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                      </li>
                      <li>
                        <strong>Legal Protection:</strong> To protect our rights, property, or safety, and that of our
                        users
                      </li>
                      <li>
                        <strong>With Your Consent:</strong> When you explicitly authorize us to share your information
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
                    <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      We implement industry-standard security measures to protect your information, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-4 ml-4">
                      <li>Encryption of sensitive data in transit and at rest</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Multi-factor authentication options</li>
                      <li>Secure smart contract architecture</li>
                      <li>Access controls and monitoring systems</li>
                    </ul>
                    <p className="text-foreground/70 leading-relaxed">
                      However, no method of transmission over the Internet or electronic storage is 100% secure. While
                      we strive to protect your information, we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>
                    <strong>Access:</strong> Request access to your personal information
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your information (subject to legal obligations)
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain processing activities
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request transfer of your data
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable
                  </li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  Note: Blockchain transactions are immutable and cannot be deleted once recorded on-chain.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of
                  residence. These countries may have different data protection laws. By using our platform, you consent
                  to the transfer of your information to these countries. We ensure appropriate safeguards are in place
                  to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal
                  information from children. If you believe we have collected information from a child, please contact
                  us immediately, and we will take steps to delete such information.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-foreground/70 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use
                  of the platform after such modifications constitutes your acknowledgment and acceptance of the
                  modified Privacy Policy.
                </p>
              </section>

              <section className="glass-card p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us at:
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-foreground/70 leading-relaxed">
                    <strong>Email:</strong> privacy@bida.finance
                    <br />
                    <strong>Website:</strong> https://bida.finance
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
