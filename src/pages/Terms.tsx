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
          <p className="text-xl text-gray-600">Last Updated: October 30, 2025</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 border-2 border-orange-200 mb-12">
            <p className="text-gray-800 leading-relaxed">
              These Terms of Service (the "Terms") constitute a binding agreement between you and SwiftMonday, Inc. ("SwiftMonday," "we," "us," or "our"). By accessing or using our websites, applications, and related services (collectively, the "Services"), you agree to be bound by these Terms. If you do not agree, do not access or use the Services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Section 1 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Nature of Services; Role of Third Parties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Software Platform Only.</strong> SwiftMonday provides a software platform that enables access to remittance and payment services offered and performed by licensed third-party financial institutions and payment processors (each, a "Remittance Provider").
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-4">
                <p className="text-gray-800 mb-2"><strong className="text-orange-700">SwiftMonday does not:</strong></p>
                <ul className="space-y-1 text-gray-800">
                  <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>(a) hold or custody customer funds;</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>(b) issue stored value;</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>(c) execute or settle any money transfer; or</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>(d) provide foreign-exchange services.</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                All regulated activities—including identity verification (KYC), anti-money-laundering (AML) checks, sanctions screening, onboarding, payment processing, FX, settlement, and delivery of funds—are performed by the applicable Remittance Provider under its own licenses and terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your use of any remittance service is subject to the applicable Remittance Provider's terms, regulatory disclosures, receipts, and compliance requirements, which are presented before you authorize a transfer and/or in your receipt.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Eligibility and Account Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">By using the Services, you represent and warrant that you:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>(a) are at least eighteen (18) years of age;</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>(b) reside in the United States and will use the Services for lawful, personal remittance purposes;</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>(c) are not a person or entity subject to sanctions or otherwise prohibited from using financial services; and</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span>(d) will provide accurate, current, and complete information and promptly update such information as needed.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                SwiftMonday may refuse, suspend, or terminate access to some or all of the Services at any time for compliance, fraud-prevention, risk, or other legitimate reasons.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Availability; Regulatory Disclosures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Geographic Availability.</strong> Service availability may vary by U.S. state or territory and is subject to change without notice. Certain features may be limited, delayed, or unavailable based on your location, transfer corridor, payment method, amount, or verification status.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Regulatory Disclosures Govern.</strong> Where applicable, the Remittance Provider is the "remittance transfer provider" under the Electronic Fund Transfer Act and the CFPB's Remittance Transfer Rule (12 C.F.R. Part 1005, Subpart B). Pre-payment disclosures, receipts, cancellation windows, refunds, error-resolution rights, and dispute procedures provided by the Remittance Provider govern your remittance. If these Terms conflict with the Remittance Provider's disclosures for a specific transfer, the Remittance Provider's disclosures control for that transfer.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Identity Verification; Compliance Authorization; Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To comply with the Bank Secrecy Act, USA PATRIOT Act, OFAC sanctions, and other applicable laws, SwiftMonday and/or Remittance Providers may require you to verify your identity and provide additional information. You authorize SwiftMonday to share your information (including identification data, transfer details, device/risk signals, and supporting documents) with Remittance Providers and compliance vendors for onboarding, sanctions screening, fraud and AML monitoring, transaction processing, and regulatory reporting. Service may be denied, suspended, or terminated at any time to comply with legal obligations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For detailed information about how we collect, use, share, and protect your personal information, please review our <Link to="/privacy" className="text-orange-600 hover:text-orange-700 font-semibold underline">Privacy Policy</Link>. By using the Services, you also agree to our Privacy Policy.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Electronic Communications; E-SIGN Consent
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By using the Services, you consent to receive disclosures, receipts, notices, and other communications electronically, and to transact electronically. You agree to maintain a valid email address and a device capable of accessing, saving, and printing electronic records. You may withdraw consent by contacting support@swiftmonday.com; however, withdrawal may limit or prevent your use of the Services. Additional details may be provided in a separate E-SIGN disclosure.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Description of Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subject to these Terms, SwiftMonday provides a software interface that may include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>(a) initiating a request to send funds from the United States to the Philippines;</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>(b) displaying indicative exchange rates;</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>(c) routing you to or integrating with a Remittance Provider's checkout or KYC flow;</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>(d) providing transfer status updates; and</li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>(e) customer support.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Settlement, FX, and payout are performed by the Remittance Provider.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Fees, Pricing, and Exchange Rates
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Transparency.</strong> Before you authorize a transfer, the all-in price (fees and exchange rate) applicable to that transfer will be disclosed by the Remittance Provider. SwiftMonday may charge a platform access fee separate from the Remittance Provider's fees. All applicable fees will be disclosed before authorization.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Rates.</strong> Exchange rates fluctuate. The rate governing your transfer is the rate locked at authorization as stated in the Remittance Provider's disclosure/receipt. Displayed rates within the SwiftMonday interface may be indicative and for informational purposes until you authorize the transfer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Fee Changes.</strong> SwiftMonday may update platform fees or features from time to time. Any change will not affect a transfer you have already authorized.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Transfer Limits
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Transfer limits may vary by user, payment method, verification level, transaction history, partner requirements, risk assessments, and law. Limits may be adjusted or restricted at any time without notice for security or compliance.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                Prohibited Activities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You shall not use the Services for any activity that is unlawful, abusive, fraudulent, or otherwise prohibited. Prohibited uses include, without limitation:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>money laundering or terrorist financing;</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>evasion of sanctions or capital controls;</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>virtual-asset mixing/tumbling;</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>illegal online gambling;</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>commercial payments unless expressly permitted in writing;</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>transactions involving high-risk or prohibited categories; or</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>attempts to circumvent SwiftMonday's or a Remittance Provider's security or controls.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                SwiftMonday may block or reverse activity and report suspicious behavior to authorities.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                Cancellations, Refunds, and Errors (Remittance Provider Rules Apply)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Cancellations/Refunds.</strong> Cancellation and refund rights and timelines are governed by the Remittance Provider's disclosures presented before authorization and on your receipt. Certain transfers (e.g., cash pick-up already paid to a recipient) may be non-cancellable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Errors.</strong> If you believe there is an error with a remittance transfer, follow the instructions in the Remittance Provider's receipt to submit a claim within the stated timeline under applicable law.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Incorrect Information.</strong> You are responsible for ensuring recipient and transfer details are correct. If you provide incorrect information, you may not be able to cancel or recover funds, and fees may still apply.
              </p>
            </div>

            {/* Sections 11-26 continue with same styling pattern */}
            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                Chargebacks, Reversals, and Recovery
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If your payment method is charged back, reversed, or otherwise fails after a transfer is initiated, you authorize SwiftMonday and/or the Remittance Provider to debit, charge, or otherwise recover amounts owed from any payment method on file or via other lawful collection means. You remain responsible for any negative balances and associated fees.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                Taxes and Reporting
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SwiftMonday does not provide tax, legal, or accounting advice. You are solely responsible for any taxes, duties, or reporting obligations that may arise from your use of the Services.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">13</span>
                Intellectual Property; License to Use the Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Services, including all software, websites, content, logos, and trademarks, are owned by SwiftMonday or its licensors and are protected by law. Subject to these Terms, SwiftMonday grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal remittance purposes. All rights not expressly granted are reserved.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">14</span>
                Third-Party Services and Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Remittance services, payment processing, banking, and foreign exchange are provided by third parties under their own terms and privacy policies. SwiftMonday is not responsible for third-party actions, omissions, availability, accuracy, or security. Your relationships with third parties are solely between you and the applicable third party.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">15</span>
                Disclaimers
              </h2>
              <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded">
                <p className="text-gray-800 font-semibold">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. SWIFTMONDAY DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
                </p>
              </div>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">16</span>
                Limitation of Liability
              </h2>
              <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded">
                <p className="text-gray-800 font-semibold mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SWIFTMONDAY WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO THE SERVICES OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="text-gray-800 font-semibold">
                  IN NO EVENT WILL SWIFTMONDAY'S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES EXCEED THE GREATER OF US $100 OR THE AMOUNT OF PLATFORM FEES (IF ANY) YOU PAID TO SWIFTMONDAY FOR THE SERVICE AT ISSUE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; THESE LIMITS APPLY TO THE FULLEST EXTENT PERMITTED.
                </p>
              </div>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">17</span>
                Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to defend, indemnify, and hold harmless SwiftMonday, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your: (a) access to or use of the Services; (b) violation of these Terms; (c) violation of any law or the rights of any third party; or (d) negligence, fraud, or willful misconduct.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">18</span>
                Dispute Resolution; Arbitration; Class Action Waiver
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Informal Resolution.</strong> Prior to initiating a formal proceeding, the parties shall first attempt in good faith to resolve the dispute informally by contacting support@swiftmonday.com. If the dispute is not resolved within thirty (30) days, either party may commence arbitration as set forth below.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Binding Arbitration.</strong> Any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) pursuant to its Consumer Arbitration Rules, except as otherwise provided herein. The arbitrator shall have exclusive authority to resolve disputes regarding the interpretation, applicability, or enforceability of this arbitration agreement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Opt-Out.</strong> You may opt out of arbitration by sending written notice of your decision to support@swiftmonday.com within thirty (30) days of first accepting these Terms. Your notice must include your name, the email associated with your account, and a clear statement that you elect to opt out of arbitration.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Small Claims Court Carve-Out.</strong> Either party may bring an individual action in small claims court for disputes within that court's jurisdiction.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-4">
                <p className="text-gray-800 font-semibold">
                  Class Action Waiver: YOU AND SWIFTMONDAY WAIVE ANY RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN A CLASS, COLLECTIVE, OR REPRESENTATIVE ACTION. The arbitrator may award relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party's individual claim. If the class action waiver is found unenforceable, the arbitration agreement shall be null and void.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Venue and Seat.</strong> The seat of arbitration shall be Boston, Massachusetts, USA, and the language of the arbitration shall be English. Judgment on the award may be entered in any court of competent jurisdiction.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">19</span>
                Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and any dispute arising hereunder are governed by the laws of the Commonwealth of Massachusetts, without regard to conflict-of-law principles and except as preempted by U.S. federal law.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">20</span>
                Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SwiftMonday may suspend or terminate your access to the Services, in whole or in part, at any time and for any or no reason, including for suspected fraud, illegal conduct, violation of these Terms, or compliance requirements. Upon termination, your right to use the Services will immediately cease. Sections that by their nature should survive (including, without limitation, ownership, disclaimers, indemnity, limits of liability, dispute resolution, and governing law) survive termination.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">21</span>
                Changes to the Services or Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SwiftMonday may modify the Services and these Terms from time to time. SwiftMonday will provide notice of material changes by posting an updated version and/or sending you an email. Your continued use of the Services after changes become effective constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">22</span>
                Force Majeure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SwiftMonday is not liable for any delay or failure in performance resulting from events beyond its reasonable control, including acts of God, labor disputes, internet failures, utility failures, war, terrorism, civil disturbances, government actions, pandemics, natural disasters, or the actions or omissions of third-party providers.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">23</span>
                Assignment
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You may not assign or transfer these Terms or any rights or obligations hereunder without SwiftMonday's prior written consent. SwiftMonday may assign these Terms at any time, including to an affiliate or in connection with a merger, acquisition, or sale of assets.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">24</span>
                Notices; Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unless otherwise specified, notices to you may be provided electronically via the Services or to the email you provided. Questions about the Services or these Terms may be sent to support@swiftmonday.com.
              </p>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-800">
                  <strong>SwiftMonday, Inc.</strong><br />
                  A Massachusetts corporation<br />
                  <strong>Mailing Address:</strong> [Your Registered Business Address - To Be Added]<br />
                  <strong>Website:</strong> <a href="https://www.swiftmonday.com" className="text-orange-600 hover:text-orange-700 font-semibold underline">https://www.swiftmonday.com</a><br />
                  <strong>Support:</strong> support@swiftmonday.com
                </p>
              </div>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">25</span>
                Severability; Entire Agreement; No Waiver
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is held invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect. These Terms, together with any policies or terms referenced herein (including the Remittance Provider's disclosures for a given transfer), constitute the entire agreement between you and SwiftMonday regarding the Services and supersede all prior agreements on the subject. No waiver of any term will be deemed a further or continuing waiver of such term or any other term.
              </p>
            </div>

            <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">26</span>
                State-Specific Notices (If Applicable)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Currently, remittance services are provided exclusively by licensed third-party Remittance Providers who hold all applicable state money transmitter licenses. SwiftMonday does not engage in money transmission and is not required to hold state money transmitter licenses for its operation as a software platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Certain states may require specific notices or contact information for complaints regarding money transmission services. Where a Remittance Provider is the licensed money transmitter, its state notices and complaint information provided in its disclosures/receipts apply. SwiftMonday may provide a consolidated page linking to state notices as applicable.
              </p>
            </div>

            {/* Final Acknowledgment */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 text-center border-2 border-orange-200">
              <p className="text-gray-800 text-lg font-medium">
                By using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
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
