import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation onSendMoney={() => window.location.href = '/'} />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl opacity-90">Last Updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using SwiftMonday's money transfer services, you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree to these Terms, you may not use our services. These Terms constitute a legally
              binding agreement between you ("User," "you," or "your") and SwiftMonday ("we," "us," or "our").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-3">To use SwiftMonday's services, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Be at least 18 years of age</li>
              <li>Be a legal resident of the United States</li>
              <li>Have a valid Social Security Number or Tax Identification Number</li>
              <li>Have a valid U.S. bank account or payment method</li>
              <li>Provide accurate and truthful information</li>
              <li>Not be located in a country subject to U.S. sanctions</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to refuse service to anyone at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Account Registration and Security</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed">
              To use our services, you must create an account and provide accurate, complete information. You are responsible
              for maintaining the confidentiality of your account credentials.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">3.2 Identity Verification</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We are required by law to verify your identity. You agree to provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Government-issued photo identification</li>
              <li>Social Security Number (SSN)</li>
              <li>Proof of address</li>
              <li>Additional documentation as required by law</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">3.3 Account Security</h3>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for all activities under your account. Notify us immediately of any unauthorized access
              or security breach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Money Transfer Services</h2>

            <h3 className="text-xl font-semibold mb-3">4.1 Service Description</h3>
            <p className="text-gray-700 leading-relaxed">
              SwiftMonday provides money transfer services from the United States to the Philippines. We utilize digital
              currencies (USDT) and partner networks to facilitate transfers to recipients' bank accounts, e-wallets
              (GCash), or cash pickup locations.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Transfer Limits</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Minimum transfer:</strong> $10 USD per transaction</li>
              <li><strong>Maximum transfer:</strong> $10,000 USD per transaction</li>
              <li><strong>Daily limit:</strong> $10,000 USD</li>
              <li><strong>Monthly limit:</strong> $50,000 USD</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              These limits may vary based on verification level, transaction history, and regulatory requirements.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.3 Exchange Rates</h3>
            <p className="text-gray-700 leading-relaxed">
              Exchange rates are determined at the time of transaction and are subject to market fluctuations. The rate
              displayed before confirmation is the rate you will receive. We update rates regularly but cannot guarantee
              a specific rate until the transaction is confirmed.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.4 Fees</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our fee structure is transparent and disclosed before each transaction:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Transfer fees vary based on transfer amount and payment method</li>
              <li>Payment processing fees may apply (credit card, debit card)</li>
              <li>No hidden fees - all charges disclosed upfront</li>
              <li>Recipient may incur fees from their bank or payment provider</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.5 Processing Time</h3>
            <p className="text-gray-700 leading-relaxed">
              Most transfers are completed within minutes to hours. However, processing times may vary based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Payment method verification time</li>
              <li>Recipient payout method</li>
              <li>Banking hours and holidays</li>
              <li>Compliance and security reviews</li>
              <li>Technical issues or delays</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Compliance and Legal Requirements</h2>

            <h3 className="text-xl font-semibold mb-3">5.1 Anti-Money Laundering (AML)</h3>
            <p className="text-gray-700 leading-relaxed">
              SwiftMonday complies with the Bank Secrecy Act (BSA) and USA PATRIOT Act. We are required to report
              suspicious activities and certain transactions to FinCEN. You agree to provide information necessary
              for compliance with these laws.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">5.2 Know Your Customer (KYC)</h3>
            <p className="text-gray-700 leading-relaxed">
              We must verify customer identities and may request additional documentation at any time. Failure to
              provide requested information may result in service suspension or termination.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">5.3 Prohibited Uses</h3>
            <p className="text-gray-700 leading-relaxed mb-3">You may not use SwiftMonday services to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Engage in illegal activities or money laundering</li>
              <li>Finance terrorism or prohibited organizations</li>
              <li>Send money to sanctioned countries or individuals</li>
              <li>Commit fraud or provide false information</li>
              <li>Violate any laws, regulations, or third-party rights</li>
              <li>Use our services for business purposes without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cancellations and Refunds</h2>

            <h3 className="text-xl font-semibold mb-3">6.1 Cancellation Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              You may cancel a transfer before it is processed for payout. Once funds have been disbursed to the recipient,
              cancellation is not possible. To request cancellation, contact support@swiftmonday.com immediately.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">6.2 Refunds</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Refunds are processed under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Transfer cancelled before payout</li>
              <li>Technical error resulting in duplicate charges</li>
              <li>Transfer could not be completed due to our error</li>
              <li>Recipient information was incorrect and funds not disbursed</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Refunds are typically processed within 5-10 business days. Fees may not be refundable in certain circumstances.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">6.3 Failed Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              If a transfer fails due to incorrect recipient information, the funds will be returned to your account minus
              any non-refundable processing fees. You are responsible for verifying recipient details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Liability and Disclaimers</h2>

            <h3 className="text-xl font-semibold mb-3">7.1 Service "As Is"</h3>
            <p className="text-gray-700 leading-relaxed">
              SwiftMonday services are provided "as is" without warranties of any kind, express or implied. We do not
              guarantee uninterrupted or error-free service.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.2 Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, SwiftMonday shall not be liable for indirect, incidental, special,
              consequential, or punitive damages, including loss of profits or data. Our total liability shall not exceed
              the amount of the specific transaction at issue.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.3 Third-Party Services</h3>
            <p className="text-gray-700 leading-relaxed">
              We partner with third-party payment processors and payout providers. We are not responsible for their
              actions, errors, or delays beyond our reasonable control.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.4 Exchange Rate Risk</h3>
            <p className="text-gray-700 leading-relaxed">
              Exchange rates fluctuate constantly. While we strive to offer competitive rates, we are not liable for
              market movements or rate changes between quote and confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, trademarks, logos, and intellectual property on SwiftMonday's platform are owned by SwiftMonday
              or its licensors. You may not use, reproduce, or distribute our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may suspend or terminate your account at any time for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violation of these Terms</li>
              <li>Suspected fraud or illegal activity</li>
              <li>Failure to provide required verification documents</li>
              <li>Excessive chargebacks or disputes</li>
              <li>Any reason at our sole discretion</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon termination, pending transfers will be completed or refunded. You may not create a new account
              without our permission if your account has been terminated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution and Arbitration</h2>

            <h3 className="text-xl font-semibold mb-3">10.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">10.2 Arbitration Agreement</h3>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms or our services shall be resolved through binding arbitration in
              accordance with the rules of the American Arbitration Association. You waive the right to participate
              in class actions or jury trials.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">10.3 Exceptions</h3>
            <p className="text-gray-700 leading-relaxed">
              Either party may seek injunctive relief in court to protect intellectual property rights or prevent
              unauthorized account access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms at any time. Material changes will be communicated via email or website notice.
              Your continued use of our services after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="text-gray-700">
                <strong>SwiftMonday Legal Department</strong><br />
                Email: legal@swiftmonday.com<br />
                Support: support@swiftmonday.com<br />
                Compliance: compliance@swiftmonday.com<br />
                Website: www.swiftmonday.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Regulatory Information</h2>
            <p className="text-gray-700 leading-relaxed">
              SwiftMonday is registered as a Money Services Business (MSB) with the Financial Crimes Enforcement Network
              (FinCEN) under registration number [Registration Number]. We comply with all applicable federal and state
              money transmitter regulations.
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded">
              <p className="text-sm text-gray-600">
                <strong>Important:</strong> This is a legal agreement. By using SwiftMonday's services, you acknowledge
                that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              For more information about how we handle your data, please review our{' '}
              <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
