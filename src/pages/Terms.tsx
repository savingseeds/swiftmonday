import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Terms: React.FC = () => {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last Updated: October 20, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Section 1 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to SwiftMonday. By accessing or using our website and services, you agree to be bound
                by these Terms of Service and all applicable laws and regulations. If you do not agree with
                any of these terms, you are prohibited from using our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                About SwiftMonday
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                SwiftMonday is an early-stage remittance platform that facilitates money transfers from the
                United States to the Philippines. We work with licensed payment processors and financial
                service providers to process your transactions securely and in compliance with applicable regulations.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-gray-800">
                  <strong className="text-orange-700">Our Partners:</strong> We utilize licensed third-party payment processors, including
                  Transak (for payment processing) and other regulated financial service providers, to facilitate
                  transfers. All payment processing is conducted through these licensed partners.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Service Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                SwiftMonday provides a platform to facilitate remittance transfers. Our services include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Facilitating money transfers from USD to PHP
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Providing exchange rate information
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Coordinating with licensed payment processors
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Tracking transfer status
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Customer support
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                User Eligibility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">To use our services, you must:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Be at least 18 years of age
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Be a legal resident of the United States
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Provide accurate and complete information
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Comply with all applicable laws and regulations
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Not be on any sanctions list or prohibited from using financial services
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Identity Verification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In compliance with federal regulations, including the Bank Secrecy Act and USA PATRIOT Act,
                we may require you to verify your identity before processing transfers. This may include
                providing government-issued identification and other documentation. We reserve the right to
                refuse service if we cannot adequately verify your identity.
              </p>
            </div>

            {/* Sections 6-18 with consistent styling */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Fees and Exchange Rates
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All fees and exchange rates are displayed transparently before you confirm any transfer.
                Fees may include:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Transfer fees (flat fee per transaction)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Exchange rate markup
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Third-party payment processor fees (if applicable)
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Exchange rates fluctuate and are locked in at the time of your transfer confirmation.
                We reserve the right to modify our fee structure with notice to users.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Transfer Limits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transfer limits may vary based on your verification level and applicable regulations:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Unverified users: Lower transaction and monthly limits
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Verified users: Higher transaction and monthly limits
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these limits at any time for security or compliance purposes.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Prohibited Activities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree not to use SwiftMonday for:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Illegal activities or transactions
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Money laundering or terrorist financing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Fraud or misrepresentation
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Violating any applicable laws or regulations
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Sending money to sanctioned countries or individuals
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Circumventing our security measures
                </li>
              </ul>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                Cancellations and Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may cancel a transfer within 30 minutes of initiation if the funds have not yet been
                delivered to the recipient. After this period, cancellations may not be possible. Refunds
                will be processed to the original payment method within 5-10 business days.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If a transfer fails due to incorrect recipient information you provided, standard fees
                may still apply. If a transfer fails due to an error on our part, we will provide a full refund.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                Liability and Disclaimers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                SwiftMonday acts as a facilitator working with licensed payment processors. We make reasonable
                efforts to ensure accurate and timely service, but we are not liable for:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Delays caused by third-party payment processors or banks
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Exchange rate fluctuations
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Errors in information you provide
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Service interruptions beyond our control
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Actions taken by regulatory authorities
                </li>
              </ul>
              <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded">
                <p className="text-gray-800 font-semibold">
                  OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM OR RELATED TO THESE TERMS OR OUR
                  SERVICES SHALL NOT EXCEED THE AMOUNT OF FEES YOU PAID FOR THE SPECIFIC TRANSACTION IN QUESTION.
                </p>
              </div>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our{' '}
                <Link to="/privacy" className="text-orange-600 hover:text-orange-700 font-semibold underline">Privacy Policy</Link>{' '}
                to understand how we collect, use, and protect your personal information.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                Compliance with Laws
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to operating in compliance with all applicable federal and state laws, including:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Bank Secrecy Act (BSA)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  USA PATRIOT Act
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Anti-Money Laundering (AML) regulations
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Office of Foreign Assets Control (OFAC) sanctions
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  State money transmission regulations where applicable
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to report suspicious activities to relevant authorities as required by law.
              </p>
            </div>

            {/* Sections 13-18 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">13</span>
                Account Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your access to our services at any time for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Violation of these Terms of Service
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Suspicious or fraudulent activity
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Failure to provide required verification
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Legal or regulatory requirements
                </li>
              </ul>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">14</span>
                Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service from time to time. We will notify users of significant
                changes via email or prominent notice on our website. Your continued use of our services after
                such changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">15</span>
                Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these terms or our services shall be resolved through binding
                arbitration in accordance with the rules of the American Arbitration Association. You agree
                to waive any right to a jury trial or to participate in a class action lawsuit.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">16</span>
                Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the
                United States and the state in which SwiftMonday is registered, without regard to conflict
                of law principles.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">17</span>
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-800">
                  <strong>Email:</strong> support@swiftmonday.com<br />
                  <strong>Website:</strong> <Link to="/contact" className="text-orange-600 hover:text-orange-700 font-semibold underline">Contact Page</Link>
                </p>
              </div>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">18</span>
                Severability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision
                shall be limited or eliminated to the minimum extent necessary so that these Terms shall
                otherwise remain in full force and effect.
              </p>
            </div>

            {/* Final Acknowledgment */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 text-center border-2 border-orange-200">
              <p className="text-gray-800 text-lg">
                By using SwiftMonday, you acknowledge that you have read, understood, and agree to be bound
                by these Terms of Service.
              </p>
            </div>
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

export default Terms;
