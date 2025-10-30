import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation onSendMoney={() => window.location.href = '/'} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy & E-SIGN Disclosure</h1>
          <p className="text-xl text-gray-600">Last Updated: October 30, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="mb-12 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 border-2 border-orange-200">
            <p className="text-gray-800 leading-relaxed mb-4">
              This document contains (1) SwiftMonday's Privacy Policy and (2) our E-SIGN Disclosure and Consent.
              While they are often linked separately, we've combined them here for convenience.
            </p>
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-orange-700">Who we are.</strong> "SwiftMonday, Inc." ("SwiftMonday," "we," "us," "our") provides a software
              platform that connects you to remittance services offered by licensed third-party Remittance Providers.
              Our <Link to="/terms" className="text-orange-600 hover:text-orange-700 font-semibold underline">Terms of Service</Link> explain our role and the role of Remittance Providers.
            </p>
          </div>

          {/* Part I Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Part I — Privacy Policy</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded"></div>
          </div>

          {/* Section 1 */}
          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Scope & Audience
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy describes how we collect, use, disclose, and protect information related to your
              use of our websites, apps, and related services (the "Services"). It applies to U.S. users. The Services
              are intended for individuals 18+ located in the United States.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Categories of Information We Collect
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">We collect information in connection with your use of the Services, including:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <div><strong>Identifiers & contact info</strong> (e.g., name, email address, phone number, mailing address, device IDs).</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <div><strong>Government ID data</strong> (e.g., ID numbers, images), where required by a Remittance Provider.</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <div><strong>Financial & transactional info</strong> (e.g., payment method tokens, transfer amounts, currency, status, timestamps).</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <div><strong>Recipient info</strong> (e.g., recipient name, phone, payout method, bank details as required by a Remittance Provider).</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <div><strong>Risk & compliance signals</strong> (e.g., IP address, device attributes, geolocation approximations, fraud signals, sanctions screening outputs).</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <div><strong>Usage data</strong> (e.g., pages viewed, features used, referral URLs, cookies/SDK data, log files).</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <div><strong>Communications</strong> (e.g., support requests, feedback, recordings or transcripts where permitted by law).</div>
              </li>
            </ul>
          </div>

          {/* Sections 3-14 in similar style */}
          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Sources of Information
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><strong>You</strong> (forms, uploads, chats, support).</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><strong>Automatically</strong> (cookies, SDKs, analytics).</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><strong>Partners</strong> (Remittance Providers, payment processors, banks, KYC/AML vendors).</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><strong>Public/third-party sources</strong> (sanctions lists, fraud databases, data verification services).</li>
            </ul>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              How We Use Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">We use information to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>Provide, operate, secure, and improve the Services;</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>Facilitate onboarding, KYC/AML checks, sanctions screening, fraud monitoring, and transaction processing via Remittance Providers;</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>Display rates and status, send receipts, and deliver customer support;</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>Detect, prevent, and remediate fraud, abuse, and prohibited activities;</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>Comply with laws, enforce our Terms, and protect our rights and users;</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>Communicate about updates, security alerts, and transactional notices;</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>With consent or as permitted by law, send marketing or run referral programs (opt-out available).</li>
            </ul>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              Sharing of Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">We may share information with:</p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><strong>Remittance Providers & payment processors</strong> to provide remittance and payment services;</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><strong>Compliance vendors</strong> (identity verification, sanctions screening, fraud detection);</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><strong>Cloud/IT service providers</strong> (hosting, analytics, support tooling) under appropriate safeguards;</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><strong>Professional advisors and auditors</strong>; and</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><strong>Authorities</strong> when required by law or to protect rights, safety, and security.</li>
            </ul>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <p className="text-gray-800">
                <strong className="text-orange-700">Important:</strong> We do not sell your personal information for money. We do not share for cross-context behavioral
                advertising without offering applicable opt-outs. We do not permit third parties to use your data
                for their own independent marketing without your consent.
              </p>
            </div>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
              International Data Transfers
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our partners and vendors may process data in multiple countries, including the Philippines and other
              jurisdictions with different data-protection laws. We implement safeguards appropriate to the transfer
              (e.g., contractual protections). By using the Services, you understand that your info may be transferred
              to and processed in countries outside your state or country of residence.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
              Retention
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We retain personal information as long as necessary to provide the Services, meet legal, tax, audit,
              and compliance obligations (which may require multi-year retention for financial records), resolve
              disputes, and enforce agreements.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
              Your Choices & Rights
            </h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <strong className="text-gray-900">Access/Deletion/Correction.</strong> You may request access, deletion, or correction of your information by contacting privacy@swiftmonday.com. We will honor requests as required by law, subject to exemptions (e.g., records we must keep for AML).
              </div>
              <div>
                <strong className="text-gray-900">Opt-Out of Marketing.</strong> You may opt out of marketing emails by using unsubscribe links or emailing us.
              </div>
              <div>
                <strong className="text-gray-900">Cookies/Tracking.</strong> Manage cookies through your browser or device settings; some features may not function if disabled.
              </div>
              <div>
                <strong className="text-gray-900">Do Not Track.</strong> We do not respond to Do Not Track signals. We honor legally required opt-outs where applicable.
              </div>
            </div>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
              Children's Privacy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The Services are not intended for or directed to children under 13. We do not knowingly collect
              personal information from children under 13. If you believe a child has provided information,
              contact privacy@swiftmonday.com.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
              Security
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We employ administrative, technical, and physical safeguards designed to protect information. However,
              no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
              Third-Party Sites & Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The Services may link to third-party websites or integrations (including Remittance Providers).
              We are not responsible for third-party practices. Review their privacy notices for details.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
              State-Specific Disclosures
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Depending on your state (e.g., CA, CO, CT, UT, VA), you may have additional rights, such as access,
              deletion, and portability. Certain financial information processed for AML/KYC, fraud prevention,
              or to comply with law may be exempt. If applicable, you may exercise rights via privacy@swiftmonday.com.
              We do not sell personal information or share it for cross-context behavioral advertising as those terms
              are defined by California law; if that changes, we will update this policy and offer required opt-outs.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">13</span>
              Changes to this Privacy Policy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We may update this policy periodically. We will post the updated date at the top and, if changes are
              material, provide additional notice (e.g., email or in-product notice). Your continued use after the
              update constitutes acceptance.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">14</span>
              Contact Us
            </h3>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-gray-800">
                <strong>Privacy Questions/Requests:</strong> privacy@swiftmonday.com<br />
                <strong>Security Reports:</strong> security@swiftmonday.com<br />
                <strong>Mailing Address:</strong> [Insert Company Mailing Address]
              </p>
            </div>
          </div>

          {/* Part II Header */}
          <div className="mb-8 mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Part II — E-SIGN Disclosure and Consent</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded"></div>
          </div>

          {/* E-SIGN Sections */}
          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Scope of Consent
            </h3>
            <p className="text-gray-700 leading-relaxed">
              By using the Services, you agree to receive electronic records, including legally required disclosures,
              pre-payment and receipt disclosures from Remittance Providers, receipts, notices, statements, updates,
              and other communications related to the Services (collectively, "Electronic Communications").
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Hardware and Software Requirements
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To receive, access, and retain Electronic Communications, you must have: (a) a device with internet access;
              (b) a current web browser; (c) a valid email address; and (d) sufficient storage to save documents or a
              printer to print them. If these requirements change materially, we will notify you where required by law.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Delivery of Electronic Communications
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We (or a Remittance Provider) may deliver Electronic Communications via: email, in-product messages,
              file downloads, links to PDFs, SMS/MMS (where permitted), or posting within your account or the Services.
              You agree that Electronic Communications have the same legal effect as paper copies.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Updating Your Contact Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You agree to keep your email address and contact details current. Update your information in your
              account settings or by contacting support@swiftmonday.com.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              Requesting Paper Copies
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You may request a paper copy of an Electronic Communication by contacting support@swiftmonday.com.
              We may charge a reasonable fee unless prohibited by law. Paper copies will not be provided for items
              that are not required to be in writing.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
              Withdrawing Consent
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You may withdraw your consent to receive Electronic Communications by contacting support@swiftmonday.com.
              Withdrawal may delay, limit, or prevent your use of the Services (for example, you may be unable to
              complete transfers). Your withdrawal does not apply to records previously provided.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
              Consent for Remittance Provider Disclosures
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Where a Remittance Provider is the "remittance transfer provider," you acknowledge and agree that its
              pre-payment disclosures, receipts, cancellation and error-resolution notices may be provided electronically
              and are governed by the Remittance Provider's terms. The Remittance Provider may require separate consent
              in its own flow.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
              How to Contact Us
            </h3>
            <p className="text-gray-700 leading-relaxed">
              For E-SIGN questions, paper requests, or to withdraw consent, contact: support@swiftmonday.com.
            </p>
          </div>

          {/* Final Acknowledgment */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 text-center border-2 border-orange-200">
            <p className="text-gray-800 text-lg font-medium">
              By continuing to use the Services, you acknowledge that you have read and agree to this combined
              Privacy Policy and E-SIGN Disclosure and Consent.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">💸 SwiftMonday</h3>
              <p className="text-gray-400">
                The fastest way to send money to the Philippines.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link to="/rates" className="hover:text-white">Rates & Fees</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/security" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li>support@swiftmonday.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SwiftMonday. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
