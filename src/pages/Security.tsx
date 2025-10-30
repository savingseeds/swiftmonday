// Security.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  Server,
  Key,
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
};
type Item = { title: string; description: string };
type Tip = { tip: string; description: string };

const securityFeatures: Feature[] = [
  {
    icon: Lock,
    title: "Encryption by Default",
    description:
      "TLS 1.2+ for data in transit and AES-256 for data at rest help protect your information end-to-end.",
  },
  {
    icon: Shield,
    title: "Licensed/Regulated Partners",
    description:
      "We integrate with licensed and regulated payment providers. Regulated activities (KYC/AML, processing, payout) occur under their licenses.",
  },
  {
    icon: Eye,
    title: "Continuous Fraud Monitoring",
    description:
      "Automated systems evaluate transactions for unusual patterns and risk signals to help prevent fraud.",
  },
  {
    icon: Server,
    title: "Hardened Infrastructure",
    description:
      "Hosted on enterprise-grade cloud with network segmentation, least-privilege access, and regular backups.",
  },
  {
    icon: Key,
    title: "Two-Factor Authentication (2FA)",
    description:
      "Add an extra layer of protection to your account. Support for TOTP-based authenticators.",
  },
  {
    icon: FileCheck,
    title: "Privacy-First",
    description:
      "We do not sell personal information for money. Data is used to operate the service and meet legal requirements.",
  },
];

const complianceItems: Item[] = [
  {
    title: "Bank Secrecy Act (BSA)",
    description:
      "Recordkeeping and reporting obligations are observed by our licensed partners; we support as a platform.",
  },
  {
    title: "USA PATRIOT Act",
    description:
      "Customer identification and verification requirements apply via our Remittance Providers.",
  },
  {
    title: "Anti-Money Laundering (AML)",
    description:
      "Risk-based controls and transaction monitoring in collaboration with our partners.",
  },
  {
    title: "Know Your Customer (KYC)",
    description:
      "Identity verification managed through regulated providers during onboarding.",
  },
  {
    title: "OFAC Screening",
    description:
      "Screening against sanctions lists to help prevent prohibited transactions.",
  },
  {
    title: "Data Protection",
    description:
      "Practices aligned to our Privacy Policy and state privacy laws where applicable.",
  },
];

const safetyTips: Tip[] = [
  {
    tip: "Never share your password",
    description: "SwiftMonday will never request your password via email or phone.",
  },
  {
    tip: "Verify the URL",
    description:
      "Confirm you are on the official SwiftMonday site (https + lock icon) before logging in.",
  },
  {
    tip: "Enable 2FA",
    description: "Turn on two-factor authentication in your account settings.",
  },
  {
    tip: "Beware of phishing",
    description:
      "Be cautious with messages urging urgent action or requesting personal information.",
  },
  {
    tip: "Use strong, unique passwords",
    description:
      "Use at least 12 characters; consider a password manager to avoid reuse.",
  },
  {
    tip: "Check transfer details",
    description:
      "Verify recipient information before confirming a transfer.",
  },
];

const Security: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" aria-labelledby="security-title">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            SwiftMonday
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <section className="text-center mb-16" aria-label="Security overview">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-6 rounded-full">
              <Shield className="text-white" size={64} aria-hidden="true" />
            </div>
          </div>
          <h1 id="security-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Security Is Our Priority
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use industry-standard protections and work exclusively with licensed, regulated
            partners to help keep your information and transfers secure.
          </p>
        </section>

        {/* Security Features */}
        <section className="mb-16" aria-labelledby="how-we-protect">
          <h2 id="how-we-protect" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How We Protect You
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map(({ icon: Icon, title, description }, i) => (
              <li
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-blue-500"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={32} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Compliance */}
        <section
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          aria-labelledby="compliance-title"
        >
          <h2 id="compliance-title" className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Commitment to Compliance
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            SwiftMonday operates as a software platform. Regulated activities—such as identity verification,
            sanctions screening, payment processing, foreign exchange, settlement, and payout—are performed
            by licensed Remittance Providers. Your rights and disclosures for a specific remittance are
            provided by the applicable provider.
          </p>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceItems.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Our Partners:</strong> Payment processing and KYC/AML services are performed by
              licensed third-party providers including Transak (for USD onboarding) and Coins.ph
              (for PHP payouts). These providers operate under their own regulatory licenses and compliance
              frameworks. Regulated disclosures shown at checkout control in the event of any conflict.
            </p>
          </div>
        </section>

        {/* Security Standards & Audits */}
        <section className="mb-16" aria-labelledby="certifications-title">
          <h2 id="certifications-title" className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Security Standards & Audits
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-gray-900">Industry Standards</h3>
                  <p className="text-sm text-gray-600">
                    Infrastructure follows OWASP security best practices and industry-standard
                    security controls.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-gray-900">Partner Compliance</h3>
                  <p className="text-sm text-gray-600">
                    Our Remittance Providers maintain relevant regulatory licenses and compliance
                    certifications for money transmission and payment processing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-gray-900">Regular Updates</h3>
                  <p className="text-sm text-gray-600">
                    Security patches and dependency updates are applied promptly to maintain
                    protection against emerging threats.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Roadmap:</strong> As we scale, we plan to pursue SOC 2 Type II certification
                to provide independent validation of our security controls.
              </p>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="grid md:grid-cols-2 gap-8 mb-16" aria-labelledby="data-protection-title">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h2 id="data-protection-title" className="text-2xl font-bold mb-4">Your Data, Your Control</h2>
            <ul className="space-y-3 text-blue-100 list-disc list-inside">
              <li>We do not sell personal information for money.</li>
              <li>TLS 1.2+ in transit; AES-256 at rest.</li>
              <li>You can request access or deletion (subject to legal requirements).</li>
              <li>We retain data only as long as needed by law and operations.</li>
              <li>Periodic security reviews and access controls.</li>
            </ul>
            <Link
              to="/privacy"
              className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Read Privacy Policy
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Monitor</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Eye className="text-blue-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Unusual Activity</h3>
                  <p className="text-sm text-gray-600">Automated systems flag patterns for review.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="text-blue-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Login Attempts</h3>
                  <p className="text-sm text-gray-600">Brute-force detection and session protections.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <AlertTriangle className="text-blue-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Fraud Patterns</h3>
                  <p className="text-sm text-gray-600">Signals evaluated to limit risky activity.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Lock className="text-blue-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">System Security</h3>
                  <p className="text-sm text-gray-600">Infrastructure and dependency monitoring.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <AlertTriangle className="text-blue-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Incident Response</h3>
                  <p className="text-sm text-gray-600">
                    Documented procedures for detecting, containing, and resolving security incidents.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16" aria-labelledby="tips-title">
          <h2 id="tips-title" className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Stay Safe: Tips for You
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Your security is a partnership—these best practices help protect your account.
          </p>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((item, i) => (
              <li key={i} className="border-2 border-blue-100 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Key className="text-blue-600" size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.tip}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Report Issue */}
        <section className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center mb-12" aria-labelledby="report-title">
          <AlertTriangle className="text-red-600 mx-auto mb-4" size={48} aria-hidden="true" />
          <h2 id="report-title" className="text-2xl font-bold text-gray-900 mb-4">
            Suspect Fraud or Unauthorized Activity?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you notice suspicious activity or believe you've been targeted by a scam, contact us promptly.
            Our team will investigate and assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@swiftmonday.com"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Report Security Issue
            </a>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </section>

        {/* Responsible Disclosure */}
        <section className="bg-white rounded-2xl shadow-xl p-8 text-center mb-12" aria-labelledby="disclosure-title">
          <Lock className="text-blue-600 mx-auto mb-4" size={48} aria-hidden="true" />
          <h2 id="disclosure-title" className="text-2xl font-bold text-gray-900 mb-4">
            Responsible Disclosure
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you discover a security vulnerability, we appreciate responsible disclosure.
            Please report it to <strong>security@swiftmonday.com</strong> rather than publicly disclosing it.
            We'll acknowledge your report promptly and work with you to understand and address the issue.
          </p>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700">
              <strong>What to include:</strong> Description of the vulnerability, steps to reproduce,
              potential impact, and any proof-of-concept code. We ask that you give us reasonable time
              to address the issue before public disclosure.
            </p>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="text-center mb-12" aria-label="Trust indicators">
          <div className="inline-flex items-center gap-8 bg-white rounded-xl shadow-lg px-8 py-6 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">TLS 1.2+</div>
              <div className="text-sm text-gray-600">Encryption in Transit</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">AES-256</div>
              <div className="text-sm text-gray-600">Encryption at Rest</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center" aria-labelledby="transparency-title">
          <h3 id="transparency-title" className="text-xl font-bold text-gray-900 mb-3">
            Our Commitment to Transparency
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            SwiftMonday is building with security and compliance at the core. Regulated financial activities
            are performed by licensed providers; SwiftMonday provides the software platform. Remittance-specific
            rights and disclosures at checkout control for each transfer.
          </p>
        </section>

        {/* Footer Links */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer links">
            <Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link>
            <Link to="/rates" className="text-blue-600 hover:underline">Rates &amp; Fees</Link>
            <Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link>
            <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
          </nav>
          <p className="mt-4 text-xs text-gray-500">Last updated: October 30, 2025</p>
        </footer>
      </div>
    </main>
  );
};

export default Security;
