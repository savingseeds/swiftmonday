import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy & E-SIGN Disclosure</h1>
          <p className="text-gray-600 mb-8">Last Updated: October 30, 2025</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              This document contains (1) SwiftMonday's Privacy Policy and (2) our E-SIGN Disclosure and Consent.
              While they are often linked separately, we've combined them here for convenience.
            </p>

            <p>
              <strong>Who we are.</strong> "SwiftMonday, Inc." ("SwiftMonday," "we," "us," "our") provides a software
              platform that connects you to remittance services offered by licensed third-party Remittance Providers.
              Our Terms of Service explain our role and the role of Remittance Providers.
            </p>

            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Part I — Privacy Policy</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">1) Scope & Audience</h3>
                  <p>
                    This Privacy Policy describes how we collect, use, disclose, and protect information related to your
                    use of our websites, apps, and related services (the "Services"). It applies to U.S. users. The Services
                    are intended for individuals 18+ located in the United States.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">2) Categories of Information We Collect</h3>
                  <p className="mb-3">We collect information in connection with your use of the Services, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identifiers & contact info</strong> (e.g., name, email address, phone number, mailing address, device IDs).</li>
                    <li><strong>Government ID data</strong> (e.g., ID numbers, images), where required by a Remittance Provider.</li>
                    <li><strong>Financial & transactional info</strong> (e.g., payment method tokens, transfer amounts, currency, status, timestamps).</li>
                    <li><strong>Recipient info</strong> (e.g., recipient name, phone, payout method, bank details as required by a Remittance Provider).</li>
                    <li><strong>Risk & compliance signals</strong> (e.g., IP address, device attributes, geolocation approximations, fraud signals, sanctions screening outputs).</li>
                    <li><strong>Usage data</strong> (e.g., pages viewed, features used, referral URLs, cookies/SDK data, log files).</li>
                    <li><strong>Communications</strong> (e.g., support requests, feedback, recordings or transcripts where permitted by law).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">3) Sources of Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>You</strong> (forms, uploads, chats, support).</li>
                    <li><strong>Automatically</strong> (cookies, SDKs, analytics).</li>
                    <li><strong>Partners</strong> (Remittance Providers, payment processors, banks, KYC/AML vendors).</li>
                    <li><strong>Public/third-party sources</strong> (sanctions lists, fraud databases, data verification services).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">4) How We Use Information</h3>
                  <p className="mb-3">We use information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, operate, secure, and improve the Services;</li>
                    <li>Facilitate onboarding, KYC/AML checks, sanctions screening, fraud monitoring, and transaction processing via Remittance Providers;</li>
                    <li>Display rates and status, send receipts, and deliver customer support;</li>
                    <li>Detect, prevent, and remediate fraud, abuse, and prohibited activities;</li>
                    <li>Comply with laws, enforce our Terms, and protect our rights and users;</li>
                    <li>Communicate about updates, security alerts, and transactional notices;</li>
                    <li>With consent or as permitted by law, send marketing or run referral programs (opt-out available).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">5) Sharing of Information</h3>
                  <p className="mb-3">We may share information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Remittance Providers & payment processors</strong> to provide remittance and payment services;</li>
                    <li><strong>Compliance vendors</strong> (identity verification, sanctions screening, fraud detection);</li>
                    <li><strong>Cloud/IT service providers</strong> (hosting, analytics, support tooling) under appropriate safeguards;</li>
                    <li><strong>Professional advisors and auditors</strong>; and</li>
                    <li><strong>Authorities</strong> when required by law or to protect rights, safety, and security.</li>
                  </ul>
                  <p className="mt-3">
                    We do not sell your personal information for money. We do not share for cross-context behavioral
                    advertising without offering applicable opt-outs. We do not permit third parties to use your data
                    for their own independent marketing without your consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">6) International Data Transfers</h3>
                  <p>
                    Our partners and vendors may process data in multiple countries, including the Philippines and other
                    jurisdictions with different data-protection laws. We implement safeguards appropriate to the transfer
                    (e.g., contractual protections). By using the Services, you understand that your info may be transferred
                    to and processed in countries outside your state or country of residence.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">7) Retention</h3>
                  <p>
                    We retain personal information as long as necessary to provide the Services, meet legal, tax, audit,
                    and compliance obligations (which may require multi-year retention for financial records), resolve
                    disputes, and enforce agreements.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">8) Your Choices & Rights</h3>
                  <p className="mb-3"><strong>Access/Deletion/Correction.</strong> You may request access, deletion, or correction of your information by contacting privacy@swiftmonday.com. We will honor requests as required by law, subject to exemptions (e.g., records we must keep for AML).</p>
                  <p className="mb-3"><strong>Opt-Out of Marketing.</strong> You may opt out of marketing emails by using unsubscribe links or emailing us.</p>
                  <p className="mb-3"><strong>Cookies/Tracking.</strong> Manage cookies through your browser or device settings; some features may not function if disabled.</p>
                  <p><strong>Do Not Track.</strong> We do not respond to Do Not Track signals. We honor legally required opt-outs where applicable.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">9) Children's Privacy</h3>
                  <p>
                    The Services are not intended for or directed to children under 13. We do not knowingly collect
                    personal information from children under 13. If you believe a child has provided information,
                    contact privacy@swiftmonday.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">10) Security</h3>
                  <p>
                    We employ administrative, technical, and physical safeguards designed to protect information. However,
                    no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">11) Third-Party Sites & Services</h3>
                  <p>
                    The Services may link to third-party websites or integrations (including Remittance Providers).
                    We are not responsible for third-party practices. Review their privacy notices for details.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">12) State-Specific Disclosures</h3>
                  <p>
                    Depending on your state (e.g., CA, CO, CT, UT, VA), you may have additional rights, such as access,
                    deletion, and portability. Certain financial information processed for AML/KYC, fraud prevention,
                    or to comply with law may be exempt. If applicable, you may exercise rights via privacy@swiftmonday.com.
                    We do not sell personal information or share it for cross-context behavioral advertising as those terms
                    are defined by California law; if that changes, we will update this policy and offer required opt-outs.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">13) Changes to this Privacy Policy</h3>
                  <p>
                    We may update this policy periodically. We will post the updated date at the top and, if changes are
                    material, provide additional notice (e.g., email or in-product notice). Your continued use after the
                    update constitutes acceptance.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">14) Contact Us</h3>
                  <p>
                    <strong>Privacy Questions/Requests:</strong> privacy@swiftmonday.com<br />
                    <strong>Security Reports:</strong> security@swiftmonday.com<br />
                    <strong>Mailing Address:</strong> [Insert Company Mailing Address]
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Part II — E-SIGN Disclosure and Consent</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">1) Scope of Consent</h3>
                  <p>
                    By using the Services, you agree to receive electronic records, including legally required disclosures,
                    pre-payment and receipt disclosures from Remittance Providers, receipts, notices, statements, updates,
                    and other communications related to the Services (collectively, "Electronic Communications").
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">2) Hardware and Software Requirements</h3>
                  <p>
                    To receive, access, and retain Electronic Communications, you must have: (a) a device with internet access;
                    (b) a current web browser; (c) a valid email address; and (d) sufficient storage to save documents or a
                    printer to print them. If these requirements change materially, we will notify you where required by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">3) Delivery of Electronic Communications</h3>
                  <p>
                    We (or a Remittance Provider) may deliver Electronic Communications via: email, in-product messages,
                    file downloads, links to PDFs, SMS/MMS (where permitted), or posting within your account or the Services.
                    You agree that Electronic Communications have the same legal effect as paper copies.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">4) Updating Your Contact Information</h3>
                  <p>
                    You agree to keep your email address and contact details current. Update your information in your
                    account settings or by contacting support@swiftmonday.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">5) Requesting Paper Copies</h3>
                  <p>
                    You may request a paper copy of an Electronic Communication by contacting support@swiftmonday.com.
                    We may charge a reasonable fee unless prohibited by law. Paper copies will not be provided for items
                    that are not required to be in writing.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">6) Withdrawing Consent</h3>
                  <p>
                    You may withdraw your consent to receive Electronic Communications by contacting support@swiftmonday.com.
                    Withdrawal may delay, limit, or prevent your use of the Services (for example, you may be unable to
                    complete transfers). Your withdrawal does not apply to records previously provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">7) Consent for Remittance Provider Disclosures</h3>
                  <p>
                    Where a Remittance Provider is the "remittance transfer provider," you acknowledge and agree that its
                    pre-payment disclosures, receipts, cancellation and error-resolution notices may be provided electronically
                    and are governed by the Remittance Provider's terms. The Remittance Provider may require separate consent
                    in its own flow.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">8) How to Contact Us</h3>
                  <p>
                    For E-SIGN questions, paper requests, or to withdraw consent, contact: support@swiftmonday.com.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                By continuing to use the Services, you acknowledge that you have read and agree to this combined
                Privacy Policy and E-SIGN Disclosure and Consent.
              </p>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
              <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
              <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
              <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
