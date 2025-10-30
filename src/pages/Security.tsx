// Security.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Security: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-orange-700">
            SwiftMonday
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-6 rounded-full">
              <Shield className="text-white" size={64} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Security & Trust
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your security is our priority. We implement industry-leading safeguards and work exclusively
            with licensed, regulated partners to protect your information and transactions.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: October 30, 2025</p>
        </div>

        {/* Section 1: Platform Security Architecture */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
            Platform Security Architecture
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SwiftMonday operates on enterprise-grade cloud infrastructure with multiple layers of security protection:
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-4">
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Encryption in Transit:</strong> All data transmitted between your device and our servers uses TLS 1.2 or higher encryption protocols, the same security standard used by banks and financial institutions.</div></li>
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Encryption at Rest:</strong> Sensitive data stored in our systems is encrypted using AES-256 encryption, a military-grade encryption standard.</div></li>
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Network Segmentation:</strong> Our infrastructure uses network isolation and access controls to limit exposure between different system components.</div></li>
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Least Privilege Access:</strong> System access follows the principle of least privilege, ensuring personnel and services only access data necessary for their function.</div></li>
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Regular Backups:</strong> Automated backup systems ensure business continuity and disaster recovery capabilities.</div></li>
            </ul>
          </div>
        </div>

        {/* Section 2: Account Security Features */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
            Account Security Features
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We provide multiple security layers to protect your account from unauthorized access:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Two-Factor Authentication (2FA):</strong> Enable an extra layer of security requiring both your password and a time-based one-time password (TOTP) from an authenticator app. We support standard authenticator apps like Google Authenticator, Authy, and Microsoft Authenticator.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Strong Password Requirements:</strong> Account passwords must meet minimum complexity requirements including length, character diversity, and protection against common weak passwords.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Session Management:</strong> Active session monitoring with automatic timeout for inactive sessions and the ability to remotely log out from all devices.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Login Attempt Monitoring:</strong> Automated detection of suspicious login patterns including brute-force attacks, credential stuffing attempts, and access from unusual locations.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Email Notifications:</strong> Receive alerts for important account activities including logins from new devices, password changes, and security setting modifications.</div></li>
          </ul>
        </div>

        {/* Section 3: Transaction Security & Fraud Prevention */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
            Transaction Security & Fraud Prevention
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every transaction is monitored using advanced fraud detection systems:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Real-Time Monitoring:</strong> Automated systems analyze transaction patterns 24/7 to identify unusual or suspicious activity before funds are transferred.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Risk-Based Analysis:</strong> Each transaction is evaluated against multiple risk signals including transaction amount, frequency, recipient details, geographic factors, and historical behavior patterns.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Transaction Limits:</strong> Configurable daily and per-transaction limits help prevent unauthorized large transfers while allowing you to control your account's risk exposure.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Recipient Verification:</strong> Multi-step confirmation process ensures you review all recipient details before finalizing any transfer.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Device Fingerprinting:</strong> Recognition of trusted devices to detect access from unfamiliar or potentially compromised devices.</div></li>
          </ul>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mt-4">
            <p className="text-gray-800"><strong className="text-orange-700">Important:</strong> Always verify recipient information carefully. Remittances are typically irreversible once processed by our payment partners.</p>
          </div>
        </div>

        {/* Section 4: Regulatory Compliance & Licensed Partners */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
            Regulatory Compliance & Licensed Partners
          </h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-4">
            <p className="text-gray-800 mb-2"><strong className="text-orange-700">SwiftMonday's Role:</strong></p>
            <p className="text-gray-800 mb-3">
              SwiftMonday operates as a <strong>software platform only</strong>. We do not hold customer funds,
              process payments, perform currency exchange, or conduct money transmission. All regulated financial
              activities are performed by licensed third-party Remittance Providers.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our platform integrates exclusively with licensed and regulated payment service providers who maintain
            compliance with applicable financial regulations:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <div>
                <strong>Bank Secrecy Act (BSA) Compliance:</strong> Our payment partners maintain required
                recordkeeping and reporting for transactions as mandated by federal anti-money laundering regulations.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <div>
                <strong>USA PATRIOT Act Requirements:</strong> Customer identification programs (CIP) and identity
                verification procedures are implemented by our licensed Remittance Providers.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <div>
                <strong>Anti-Money Laundering (AML) Programs:</strong> Risk-based AML controls, transaction monitoring,
                suspicious activity reporting, and ongoing customer due diligence are performed by regulated partners.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <div>
                <strong>Know Your Customer (KYC):</strong> Identity verification, document collection, and customer
                due diligence are managed by licensed providers during account setup and ongoing monitoring.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <div>
                <strong>OFAC Sanctions Screening:</strong> All transactions are screened against the Office of Foreign
                Assets Control (OFAC) sanctions lists and other watchlists to prevent prohibited transactions.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <div>
                <strong>State Money Transmitter Licenses:</strong> Our Remittance Providers hold required state-level
                money transmitter licenses where applicable for their regulated activities.
              </div>
            </li>
          </ul>
          <div className="bg-gray-50 border border-gray-200 p-4 rounded mt-4">
            <p className="text-sm text-gray-700">
              <strong>Our Payment Partners:</strong> We work with established licensed providers including
              Transak (for USD on-ramp and KYC services) and Coins.ph (for PHP payouts in the Philippines).
              These providers operate under their own regulatory frameworks and compliance obligations.
              Remittance-specific disclosures and consumer rights provided at checkout control for each transaction.
            </p>
          </div>
        </div>

        {/* Section 5: Data Protection & Privacy */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
            Data Protection & Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We handle your personal information with strict privacy safeguards:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>No Sale of Personal Data:</strong> We do not sell your personal information for money. Your data is used solely to provide remittance services and meet legal requirements.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Data Minimization:</strong> We collect only information necessary to provide services, verify identity, and comply with legal obligations.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Retention Policies:</strong> Personal data is retained only as long as necessary for service provision and legal compliance (typically 5-7 years for financial records).</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Access Controls:</strong> Strict internal access controls limit who can view personal information based on job function and business need.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Your Privacy Rights:</strong> Subject to legal requirements for AML/KYC compliance, you may request access to your data, correction of inaccuracies, or deletion of your account.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>California Privacy Rights:</strong> California residents have additional rights under CCPA/CPRA including the right to know, delete, correct, and opt-out of data sharing.</div></li>
          </ul>
          <div className="mt-4">
            <Link to="/privacy" className="text-blue-600 hover:underline font-semibold">
              Read our complete Privacy Policy →
            </Link>
          </div>
        </div>

        {/* Section 6: Third-Party Security */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
            Third-Party Security Standards
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We carefully vet all third-party service providers who process or access customer data:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Due Diligence:</strong> All payment partners and service providers undergo security assessments before integration to ensure they meet our security standards.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Contractual Protections:</strong> Data processing agreements require third parties to implement appropriate security measures and use data only for specified purposes.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Regulatory Compliance:</strong> Payment partners maintain their own regulatory licenses, compliance certifications, and audit requirements.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Ongoing Monitoring:</strong> We monitor service provider performance and security posture on an ongoing basis.</div></li>
          </ul>
        </div>

        {/* Section 7: Security Standards & Audits */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
            Security Standards & Audits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We follow industry-recognized security frameworks and best practices:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>OWASP Standards:</strong> Our development follows Open Web Application Security Project (OWASP) guidelines for secure application design and coding practices.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Security Patches:</strong> Regular updates and security patches are applied promptly to address vulnerabilities in dependencies and infrastructure components.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Vulnerability Management:</strong> Ongoing scanning for security vulnerabilities in code, dependencies, and infrastructure with prioritized remediation.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Penetration Testing:</strong> Periodic security testing by qualified professionals to identify and address potential weaknesses.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Code Reviews:</strong> Security-focused code review processes before deploying changes to production systems.</div></li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
            <p className="text-gray-800"><strong className="text-yellow-700">Roadmap:</strong> As our platform scales, we plan to pursue SOC 2 Type II certification to provide independent third-party validation of our security controls and operational practices.</p>
          </div>
        </div>

        {/* Section 8: Incident Response & Data Breach Procedures */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
            Incident Response & Data Breach Procedures
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We maintain documented incident response procedures to quickly detect, contain, and resolve security incidents:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>24/7 Monitoring:</strong> Continuous monitoring of systems for security events and anomalies with automated alerting for critical incidents.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Incident Classification:</strong> Rapid assessment and classification of security events based on severity and potential impact.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Containment & Recovery:</strong> Immediate containment actions to limit exposure followed by system recovery and security hardening.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Customer Notification:</strong> In the event of a data breach affecting personal information, we will notify affected users without unreasonable delay as required by applicable law.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Regulatory Reporting:</strong> Timely notification to appropriate regulatory authorities and law enforcement as required by law.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Post-Incident Review:</strong> Comprehensive analysis after incidents to identify root causes and implement preventive measures.</div></li>
          </ul>
        </div>

        {/* Section 9: User Security Best Practices */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
            Your Security Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Security is a shared responsibility. Here are important steps you can take to protect your account:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Enable Two-Factor Authentication (2FA)</h3>
              <p className="text-sm text-gray-700">Turn on 2FA in your account settings. This adds a critical second layer of protection even if your password is compromised.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Use a Strong, Unique Password</h3>
              <p className="text-sm text-gray-700">Create a password with at least 12 characters including uppercase, lowercase, numbers, and symbols. Never reuse passwords from other accounts. Consider using a password manager.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Verify the URL Before Logging In</h3>
              <p className="text-sm text-gray-700">Always check that you're on the official SwiftMonday website (look for "https://" and the lock icon). Bookmark our login page to avoid phishing sites.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Beware of Phishing Attempts</h3>
              <p className="text-sm text-gray-700">SwiftMonday will never ask for your password via email or phone. Be suspicious of messages creating urgency or requesting sensitive information. When in doubt, contact us directly through official channels.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Keep Your Devices Secure</h3>
              <p className="text-sm text-gray-700">Use updated operating systems and antivirus software. Avoid accessing your account on public or shared computers. Log out after each session.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Double-Check Recipient Details</h3>
              <p className="text-sm text-gray-700">Always carefully verify recipient information before confirming a transfer. Remittances are typically irreversible once processed.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Monitor Your Account Activity</h3>
              <p className="text-sm text-gray-700">Regularly review your transaction history and account activity. Report any suspicious or unauthorized activity immediately.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Protect Your Recovery Information</h3>
              <p className="text-sm text-gray-700">Keep your email account secure and your contact information up to date for important security notifications and account recovery.</p>
            </div>
          </div>
        </div>

        {/* Section 10: Reporting Security Issues */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
            Reporting Security Concerns
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Suspect Fraud or Unauthorized Activity?</h3>
              <p className="text-gray-700 mb-3">
                If you notice suspicious activity on your account or believe you may have been targeted by a scam or phishing attempt,
                contact us immediately:
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-800 mb-2"><strong className="text-red-700">Immediate Actions:</strong></p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start"><span className="text-red-500 mr-2">1.</span><div>Change your password immediately</div></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">2.</span><div>Enable 2FA if not already active</div></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">3.</span><div>Log out from all devices</div></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">4.</span><div>Contact our security team at <a href="mailto:security@swiftmonday.com" className="text-blue-600 hover:underline">security@swiftmonday.com</a></div></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">5.</span><div>Document details of suspicious activity (timestamps, descriptions, screenshots if applicable)</div></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Responsible Vulnerability Disclosure</h3>
              <p className="text-gray-700 mb-3">
                If you discover a security vulnerability in our platform, we appreciate responsible disclosure.
                Please report it to <a href="mailto:security@swiftmonday.com" className="text-blue-600 hover:underline font-semibold">security@swiftmonday.com</a> rather
                than publicly disclosing it.
              </p>
              <div className="bg-orange-50 border border-blue-200 p-4 rounded">
                <p className="text-sm text-gray-700 mb-2"><strong>What to Include in Your Report:</strong></p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Detailed description of the vulnerability</div></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Steps to reproduce the issue</div></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Potential impact assessment</div></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Any proof-of-concept code or screenshots (if applicable)</div></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Your contact information for follow-up</div></li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Our Commitment:</strong> We will acknowledge your report promptly and work with you to understand
                  and address the issue. We ask that you give us reasonable time to investigate and remediate before
                  any public disclosure.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Security at a Glance</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">TLS 1.2+</div>
              <div className="text-blue-100">Encryption in Transit</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">AES-256</div>
              <div className="text-blue-100">Encryption at Rest</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Security Monitoring</div>
            </div>
          </div>
        </div>

        {/* Transparency Statement */}
        <div className="mb-12 bg-orange-50 border-2 border-blue-200 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to Transparency</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            SwiftMonday is building a remittance platform with security and compliance at its core. We operate as a
            software platform connecting users with licensed payment providers. Regulated financial activities—including
            fund custody, payment processing, currency exchange, and money transmission—are performed exclusively by our
            licensed Remittance Partners under their own regulatory frameworks. Remittance-specific rights and disclosures
            provided at checkout control for each transaction.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center space-y-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link>
              <Link to="/rates" className="text-blue-600 hover:underline">Rates & Fees</Link>
              <Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link>
              <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
              <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
            </nav>
            <p className="text-sm text-gray-600">
              Questions about security? Email us at <a href="mailto:security@swiftmonday.com" className="text-blue-600 hover:underline">security@swiftmonday.com</a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Security;
