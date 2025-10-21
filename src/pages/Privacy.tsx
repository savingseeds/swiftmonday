import React from 'react';
import Navigation from '../components/Navigation';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation onSendMoney={() => window.location.href = '/'} />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">Last Updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              SwiftMonday ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our money transfer services from the United States to the Philippines.
              By using our services, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.1 Personal Information</h3>
            <p className="text-gray-700 mb-3">We collect information that identifies you personally, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Full name and aliases</li>
              <li>Date of birth</li>
              <li>Social Security Number (SSN) or Tax Identification Number (TIN)</li>
              <li>Physical address and mailing address</li>
              <li>Email address and phone number</li>
              <li>Government-issued identification (driver's license, passport)</li>
              <li>Proof of address documents</li>
              <li>Employment information and source of funds</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Financial Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Bank account details</li>
              <li>Credit/debit card information</li>
              <li>Transaction history</li>
              <li>Transfer amounts and frequency</li>
              <li>Recipient information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.3 Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Cookies and usage data</li>
              <li>Location data (if permitted)</li>
              <li>Log files and analytics data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.4 Recipient Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Recipient name and contact information</li>
              <li>Recipient bank account or wallet details</li>
              <li>Recipient identification (where required)</li>
              <li>Relationship to sender</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Process and complete money transfer transactions</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Perform anti-money laundering (AML) and sanctions screening</li>
              <li>Communicate with you about your transactions</li>
              <li>Provide customer support</li>
              <li>Improve our services and develop new features</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Detect and prevent security incidents</li>
              <li>Maintain records as required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We process your information based on:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Contract Performance:</strong> To provide our money transfer services</li>
              <li><strong>Legal Obligations:</strong> To comply with AML, KYC, and other regulatory requirements</li>
              <li><strong>Legitimate Interests:</strong> To prevent fraud and ensure security</li>
              <li><strong>Consent:</strong> For marketing communications and optional services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We may share your information with:
            </p>

            <h3 className="text-xl font-semibold mb-3">4.1 Service Providers</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Payment processors (Transak, banking partners)</li>
              <li>Payout partners (Coins.ph, local banks)</li>
              <li>Identity verification services</li>
              <li>Cloud storage and hosting providers</li>
              <li>Customer support platforms</li>
              <li>Analytics and monitoring services</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.2 Legal and Regulatory</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Law enforcement agencies (when required by law)</li>
              <li>Regulatory authorities (FinCEN, state regulators)</li>
              <li>Courts and legal proceedings</li>
              <li>Government agencies for compliance purposes</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.3 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than the United States, including the Philippines.
              We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure Socket Layer (SSL) technology</li>
              <li>Two-factor authentication options</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and employee training</li>
              <li>PCI DSS compliance for payment card data</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations.
              Typically, we retain:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Transaction records: 7 years (as required by law)</li>
              <li>Identity verification documents: 5 years after account closure</li>
              <li>Customer support records: 3 years</li>
              <li>Marketing preferences: Until you opt-out</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restriction:</strong> Limit how we use your information</li>
              <li><strong>Object:</strong> Object to certain processing activities</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at privacy@swiftmonday.com. Note that we may need to verify your identity
              and some rights may be limited by legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. California Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Right to know what personal information we collect, use, and disclose</li>
              <li>Right to delete personal information (with exceptions)</li>
              <li>Right to opt-out of the sale of personal information (we do not sell your information)</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Remember your preferences and settings</li>
              <li>Authenticate your identity</li>
              <li>Analyze usage patterns and improve our services</li>
              <li>Prevent fraud and enhance security</li>
              <li>Deliver targeted advertisements (with consent)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings, but disabling cookies may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal
              information from children. If we learn we have collected information from a child, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services may contain links to third-party websites. We are not responsible for the privacy practices of these sites.
              We encourage you to read their privacy policies before providing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy
              and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="text-gray-700">
                <strong>SwiftMonday Privacy Team</strong><br />
                Email: privacy@swiftmonday.com<br />
                Data Protection Officer: dpo@swiftmonday.com<br />
                General Support: support@swiftmonday.com<br />
                Website: www.swiftmonday.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">15. Complaints</h2>
            <p className="text-gray-700 leading-relaxed">
              If you believe we have not addressed your privacy concerns adequately, you have the right to file a complaint with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Your state's Attorney General</li>
              <li>The Federal Trade Commission (FTC)</li>
              <li>The Consumer Financial Protection Bureau (CFPB)</li>
            </ul>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              Your privacy is important to us. We are committed to protecting your personal information and being transparent about our data practices.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
