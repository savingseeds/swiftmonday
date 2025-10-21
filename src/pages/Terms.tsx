import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            SwiftMonday
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: October 20, 2025</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                Welcome to SwiftMonday. By accessing or using our website and services, you agree to be bound
                by these Terms of Service and all applicable laws and regulations. If you do not agree with
                any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. About SwiftMonday</h2>
              <p>
                SwiftMonday is an early-stage remittance platform that facilitates money transfers from the
                United States to the Philippines. We work with licensed payment processors and financial
                service providers to process your transactions securely and in compliance with applicable regulations.
              </p>
              <p className="mt-3">
                <strong>Our Partners:</strong> We utilize licensed third-party payment processors, including
                Transak (for payment processing) and other regulated financial service providers, to facilitate
                transfers. All payment processing is conducted through these licensed partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Service Description</h2>
              <p>
                SwiftMonday provides a platform to facilitate remittance transfers. Our services include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Facilitating money transfers from USD to PHP</li>
                <li>Providing exchange rate information</li>
                <li>Coordinating with licensed payment processors</li>
                <li>Tracking transfer status</li>
                <li>Customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. User Eligibility</h2>
              <p>To use our services, you must:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Be at least 18 years of age</li>
                <li>Be a legal resident of the United States</li>
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not be on any sanctions list or prohibited from using financial services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Identity Verification</h2>
              <p>
                In compliance with federal regulations, including the Bank Secrecy Act and USA PATRIOT Act,
                we may require you to verify your identity before processing transfers. This may include
                providing government-issued identification and other documentation. We reserve the right to
                refuse service if we cannot adequately verify your identity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Fees and Exchange Rates</h2>
              <p>
                All fees and exchange rates are displayed transparently before you confirm any transfer.
                Fees may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Transfer fees (flat fee per transaction)</li>
                <li>Exchange rate markup</li>
                <li>Third-party payment processor fees (if applicable)</li>
              </ul>
              <p className="mt-3">
                Exchange rates fluctuate and are locked in at the time of your transfer confirmation.
                We reserve the right to modify our fee structure with notice to users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Transfer Limits</h2>
              <p>
                Transfer limits may vary based on your verification level and applicable regulations:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Unverified users: Lower transaction and monthly limits</li>
                <li>Verified users: Higher transaction and monthly limits</li>
              </ul>
              <p className="mt-3">
                We reserve the right to modify these limits at any time for security or compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Prohibited Activities</h2>
              <p>You agree not to use SwiftMonday for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Illegal activities or transactions</li>
                <li>Money laundering or terrorist financing</li>
                <li>Fraud or misrepresentation</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Sending money to sanctioned countries or individuals</li>
                <li>Circumventing our security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Cancellations and Refunds</h2>
              <p>
                You may cancel a transfer within 30 minutes of initiation if the funds have not yet been
                delivered to the recipient. After this period, cancellations may not be possible. Refunds
                will be processed to the original payment method within 5-10 business days.
              </p>
              <p className="mt-3">
                If a transfer fails due to incorrect recipient information you provided, standard fees
                may still apply. If a transfer fails due to an error on our part, we will provide a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Liability and Disclaimers</h2>
              <p>
                SwiftMonday acts as a facilitator working with licensed payment processors. We make reasonable
                efforts to ensure accurate and timely service, but we are not liable for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Delays caused by third-party payment processors or banks</li>
                <li>Exchange rate fluctuations</li>
                <li>Errors in information you provide</li>
                <li>Service interruptions beyond our control</li>
                <li>Actions taken by regulatory authorities</li>
              </ul>
              <p className="mt-3">
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM OR RELATED TO THESE TERMS OR OUR
                SERVICES SHALL NOT EXCEED THE AMOUNT OF FEES YOU PAID FOR THE SPECIFIC TRANSACTION IN QUESTION.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Please review our{' '}
                <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>{' '}
                to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Compliance with Laws</h2>
              <p>
                We are committed to operating in compliance with all applicable federal and state laws, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Bank Secrecy Act (BSA)</li>
                <li>USA PATRIOT Act</li>
                <li>Anti-Money Laundering (AML) regulations</li>
                <li>Office of Foreign Assets Control (OFAC) sanctions</li>
                <li>State money transmission regulations where applicable</li>
              </ul>
              <p className="mt-3">
                We reserve the right to report suspicious activities to relevant authorities as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Account Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to our services at any time for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Violation of these Terms of Service</li>
                <li>Suspicious or fraudulent activity</li>
                <li>Failure to provide required verification</li>
                <li>Legal or regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">14. Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will notify users of significant
                changes via email or prominent notice on our website. Your continued use of our services after
                such changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or our services shall be resolved through binding
                arbitration in accordance with the rules of the American Arbitration Association. You agree
                to waive any right to a jury trial or to participate in a class action lawsuit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">16. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the
                United States and the state in which SwiftMonday is registered, without regard to conflict
                of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">17. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> support@swiftmonday.com<br />
                <strong>Website:</strong> <Link to="/contact" className="text-blue-600 hover:underline">Contact Page</Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">18. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision
                shall be limited or eliminated to the minimum extent necessary so that these Terms shall
                otherwise remain in full force and effect.
              </p>
            </section>

            <section className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                By using SwiftMonday, you acknowledge that you have read, understood, and agree to be bound
                by these Terms of Service.
              </p>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
              <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
              <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
