// HowItWorks.tsx
import React from "react";
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';

const HowItWorks: React.FC = () => {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">How SwiftMonday Works</h1>
          <p className="text-xl text-gray-600">
            Send money from the United States to the Philippines in four simple steps.
            Fast, secure, and transparent—with complete pricing shown before you confirm.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

        {/* Section 1: Overview */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
            What Is SwiftMonday?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SwiftMonday is a <strong>software platform</strong> that connects you with licensed payment providers
            to send money from the U.S. to the Philippines. We make international remittances simple, transparent,
            and secure.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="text-gray-800 mb-2"><strong className="text-orange-700">Important to Know:</strong></p>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div>SwiftMonday <strong>does not hold or custody customer funds</strong></div></li>
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div>We <strong>do not process payments or conduct money transmission</strong></div></li>
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div>All regulated financial activities are performed by <strong>licensed third-party Remittance Providers</strong></div></li>
              <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div>Your transfer is subject to the provider's terms, disclosures, and regulatory protections</div></li>
            </ul>
          </div>
        </div>

        {/* Section 2: Four Simple Steps */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
            Four Simple Steps to Send Money
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our streamlined process gets your money to the Philippines quickly and securely:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Step 1: Enter Transfer Amount</h3>
              <p className="text-sm text-gray-700 mb-2">
                Tell us how much you want to send in USD. We'll instantly show you the estimated amount
                your recipient will receive in Philippine pesos (PHP), including our exchange rate and fees.
              </p>
              <p className="text-sm text-orange-700 font-semibold">⏱️ Takes about 30 seconds</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Step 2: Provide Recipient & Payment Details</h3>
              <p className="text-sm text-gray-700 mb-2">
                Enter your recipient's information (name, contact details, delivery method preference) and
                select how you'd like to pay. We accept debit cards, credit cards, and bank transfers through
                our secure payment partners.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>First-time users:</strong> You'll complete a quick identity verification process
                (required by law for all money transfers). Have a government-issued ID ready.
              </p>
              <p className="text-sm text-orange-700 font-semibold">⏱️ Takes 1-3 minutes (first transfer may take 5-10 minutes for verification)</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Step 3: Review & Confirm</h3>
              <p className="text-sm text-gray-700 mb-2">
                Before you confirm, you'll see a complete disclosure showing:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm mb-2">
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Exact amount you're sending (USD)</div></li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Exchange rate being applied</div></li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>All fees (platform fee, payment processing fee if applicable)</div></li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Total amount charged to your payment method</div></li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Exact amount recipient will receive (PHP)</div></li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Estimated delivery time</div></li>
              </ul>
              <p className="text-sm text-orange-700 font-semibold">⏱️ Review takes 30 seconds—no surprises, complete transparency</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Step 4: We Process & Deliver Your Transfer</h3>
              <p className="text-sm text-gray-700 mb-2">
                Once you confirm:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm mb-2">
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Our licensed payment partner securely processes your USD payment</div></li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>The funds are converted from USD to PHP at the rate you confirmed</div></li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>Our remittance provider in the Philippines delivers the money via your chosen method (bank deposit, e-wallet, or cash pickup)</div></li>
                <li className="flex items-start"><span className="text-orange-500 mr-2">•</span><div>You can track the status in real-time through your SwiftMonday account</div></li>
              </ul>
              <p className="text-sm text-orange-700 font-semibold">⏱️ Typical delivery: Minutes to a few hours (may vary by method and verification)</p>
            </div>
          </div>
        </div>

        {/* Section 3: Delivery Methods */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
            Flexible Delivery Options
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your recipient can receive money in the way that's most convenient for them:
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🏦 Bank Transfer</h3>
              <p className="text-gray-700 mb-2">
                Direct deposit to major Philippine banks including BDO, BPI, Metrobank, UnionBank, Security Bank,
                Landbank, PNB, and more.
              </p>
              <p className="text-sm text-orange-700 font-semibold">⚡ Delivery: Typically same day; up to 1 business day</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">📱 E-Wallet</h3>
              <p className="text-gray-700 mb-2">
                Instant transfer to popular e-wallets including GCash, Maya (formerly PayMaya), and Coins.ph wallet.
                Perfect for recipients who prefer mobile money.
              </p>
              <p className="text-sm text-orange-700 font-semibold">⚡ Delivery: Typically minutes to a few hours</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">💵 Cash Pickup</h3>
              <p className="text-gray-700 mb-2">
                Pick up cash at thousands of partner locations nationwide. Available at major remittance centers,
                pawn shops, and convenience stores across the Philippines.
              </p>
              <p className="text-sm text-orange-700 font-semibold">⚡ Delivery: Typically 1-4 hours (subject to location operating hours)</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded mt-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Delivery times are estimates. Actual timing may vary based on payment method,
              identity verification requirements, compliance reviews, bank/wallet processing times, and partner availability.
              First-time transfers may take longer due to verification requirements.
            </p>
          </div>
        </div>

        {/* Section 4: Pricing Example */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
            Transparent Pricing—See It Before You Send
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We believe in complete transparency. Here's an example of what you'll see before confirming your transfer:
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
            <div className="text-center mb-4">
              <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-lg mb-2">
                Example: $100 USD Transfer
              </div>
            </div>
            <div className="space-y-3 max-w-xl mx-auto">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Amount you send:</span>
                <span className="text-2xl font-bold text-gray-900">$100.00 USD</span>
              </div>
              <div className="border-t border-orange-200 pt-3 flex justify-between items-center">
                <span className="text-gray-700">SwiftMonday platform fee:</span>
                <span className="font-semibold text-gray-900">$2.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Exchange rate:</span>
                <span className="font-semibold text-gray-900">~56.50 PHP per USD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Amount converted to PHP:</span>
                <span className="font-semibold text-gray-900">$97.01 × 56.50 = ₱5,481.07</span>
              </div>
              <div className="border-t-2 border-orange-400 pt-3 flex justify-between items-center">
                <span className="text-gray-700 font-bold">Total you pay:</span>
                <span className="text-xl font-bold text-gray-900">$100.00 USD</span>
              </div>
              <div className="border-t-2 border-orange-400 pt-3 flex justify-between items-center">
                <span className="text-gray-700 font-bold">Recipient gets:</span>
                <span className="text-2xl font-bold text-orange-600">₱5,481.07 PHP</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 text-center mt-4">
              *Example only. Actual rates, fees, and amounts shown before you confirm each transfer.
              Exchange rates fluctuate and are locked in when you confirm your transfer.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link to="/rates" className="text-orange-600 hover:underline font-semibold text-lg">
              View current rates and calculate your exact transfer →
            </Link>
          </div>
        </div>

        {/* Section 5: Who Powers SwiftMonday */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
            Powered by Trusted, Licensed Partners
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SwiftMonday works exclusively with licensed and regulated financial service providers to ensure your
            money moves safely and legally:
          </p>

          <div className="space-y-4">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">💳 Transak (Payment Processing & KYC)</h3>
              <p className="text-sm text-gray-700">
                Transak is our licensed payment processor that securely handles USD payments and identity verification.
                They operate under their own regulatory licenses and compliance frameworks, ensuring your payment
                information is protected with bank-level security.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">🇵🇭 Coins.ph (Philippine Remittance Provider)</h3>
              <p className="text-sm text-gray-700">
                Coins.ph is a licensed remittance provider in the Philippines that handles the PHP side of your transfer.
                They manage currency conversion, compliance, and final delivery to your recipient via bank transfer,
                e-wallet, or cash pickup. Coins.ph is regulated by the Bangko Sentral ng Pilipinas (BSP).
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded mt-4">
            <p className="text-sm text-gray-700">
              <strong>Regulatory Compliance:</strong> All regulated financial activities—including customer fund custody,
              KYC/AML verification, payment processing, currency exchange, money transmission, and payout—are performed
              by these licensed providers under their own regulatory frameworks. For each remittance transfer, the
              provider's pre-payment disclosures and receipt govern your rights and obligations.
            </p>
          </div>
        </div>

        {/* Section 6: First-Time User Checklist */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
            First Time Sending Money? Here's What You Need
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To comply with federal anti-money laundering laws, all money transfer services require identity verification.
            Here's what you'll need to get started:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Valid Government-Issued ID</h3>
              <p className="text-sm text-gray-700">Driver's license, passport, or state-issued identification card. You'll upload a photo of your ID during verification.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Payment Method</h3>
              <p className="text-sm text-gray-700">Debit card, credit card, or bank account information. We accept Visa, Mastercard, and major U.S. banks.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Recipient Information</h3>
              <p className="text-sm text-gray-700">Your recipient's full name (as it appears on their ID or account), phone number, and delivery method preference (bank account details, e-wallet number, or pickup location preference).</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">✓ Your Contact Information</h3>
              <p className="text-sm text-gray-700">Email address and phone number for transaction updates and security notifications.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
            <p className="text-gray-800"><strong className="text-yellow-700">First Transfer Timing:</strong> Your first transfer may take 5-15 minutes longer due to identity verification requirements. Subsequent transfers are much faster—typically just a few minutes to enter details and confirm.</p>
          </div>
        </div>

        {/* Section 7: Security & Safety */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
            Your Security Is Our Priority
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement multiple layers of security to protect your information and your money:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Bank-Level Encryption:</strong> All data transmitted between your device and our servers uses TLS 1.2+ encryption. Sensitive data at rest is encrypted with AES-256.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Licensed Partners Only:</strong> We work exclusively with licensed, regulated payment providers who meet strict security and compliance standards.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Two-Factor Authentication:</strong> Protect your account with an extra layer of security using 2FA (available in account settings).</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Fraud Monitoring:</strong> Real-time transaction monitoring helps detect and prevent suspicious activity before funds are released.</div></li>
            <li className="flex items-start"><span className="text-orange-500 mr-2 mt-1">•</span><div><strong>Regulatory Compliance:</strong> Our partners comply with Bank Secrecy Act (BSA), USA PATRIOT Act, Anti-Money Laundering (AML), and Know Your Customer (KYC) regulations.</div></li>
          </ul>

          <div className="mt-4">
            <Link to="/security" className="text-orange-600 hover:underline font-semibold">
              Learn more about our security practices →
            </Link>
          </div>
        </div>

        {/* Section 8: Tracking Your Transfer */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
            Track Your Transfer in Real-Time
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once you confirm your transfer, you can monitor its progress every step of the way:
          </p>

          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-1">📧 Email & SMS Updates</h3>
              <p className="text-sm text-gray-700">Receive notifications when your payment is received, when conversion happens, and when funds are delivered to your recipient.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-1">📱 Account Dashboard</h3>
              <p className="text-sm text-gray-700">Log in to your SwiftMonday account to view transfer status, transaction history, and delivery confirmations.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-1">📄 Digital Receipt</h3>
              <p className="text-sm text-gray-700">Every transfer includes a detailed receipt showing all transaction details, fees, exchange rate, and a unique tracking number.</p>
            </div>
          </div>
        </div>

        {/* Section 9: Common Questions */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
            Common Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How long does a transfer take?</h3>
              <p className="text-sm text-gray-700">Most transfers complete within a few hours. E-wallet transfers are typically fastest (minutes to hours), followed by bank transfers (same day to 1 business day) and cash pickup (1-4 hours). First-time transfers may take longer due to verification requirements.</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">What are the fees?</h3>
              <p className="text-sm text-gray-700">Our platform fee is clearly shown before you confirm. Payment processing fees (if any) are also disclosed upfront. There are no hidden charges—the total amount you pay is exactly what you see in the confirmation screen.</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">What exchange rate do you use?</h3>
              <p className="text-sm text-gray-700">We show you the exact USD to PHP exchange rate before you confirm your transfer. This rate is locked in at confirmation and won't change. Our rates are competitive and updated regularly based on market conditions.</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is there a minimum or maximum transfer amount?</h3>
              <p className="text-sm text-gray-700">Minimum and maximum transfer limits vary by payment method and delivery option. Limits are shown when you enter your transfer amount. First-time users may have lower limits that increase with transfer history.</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Can I cancel or modify a transfer?</h3>
              <p className="text-sm text-gray-700">Once you confirm a transfer, it begins processing immediately. Cancellations or modifications may not be possible depending on the transfer status. Contact support immediately if you need assistance with a transfer.</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/faq" className="text-orange-600 hover:underline font-semibold">
              View all frequently asked questions →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Send Money?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Join thousands of people sending money to the Philippines with SwiftMonday.
            Fast, secure, and transparent—get started in minutes.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Start Your First Transfer
          </Link>
          <p className="text-orange-100 text-sm mt-4">
            No account required to see rates • Identity verification required to send money
          </p>
        </div>

        {/* Important Disclosures */}
        <div className="mb-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Important Disclosures</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Service Availability:</strong> SwiftMonday services may not be available in all U.S. states.
              Availability varies by state regulations and delivery method. Identity verification is required for
              all transfers.
            </p>
            <p>
              <strong>Transfer Timing:</strong> Delivery times are estimates and may vary based on payment method,
              verification requirements, compliance reviews, bank/wallet processing times, recipient account status,
              public holidays, and partner system availability. First-time transfers typically take longer due to
              verification requirements.
            </p>
            <p>
              <strong>Regulatory Framework:</strong> SwiftMonday is a software platform. All regulated financial
              activities—including customer fund custody, identity verification (KYC/AML), payment processing,
              foreign exchange, money transmission, settlement, and payout—are performed by licensed third-party
              Remittance Providers operating under their own regulatory licenses and compliance frameworks.
            </p>
            <p>
              <strong>Governing Disclosures:</strong> For each remittance transfer, the Remittance Provider's
              pre-payment disclosure (shown before you confirm) and receipt govern your consumer rights,
              cancellation rights, error resolution procedures, and other protections. In the event of any conflict
              between these materials and SwiftMonday's Terms of Service, the provider's disclosures control for
              that specific remittance transfer.
            </p>
            <p>
              See our <Link to="/terms" className="text-orange-700 underline font-semibold">Terms of Service</Link> and{" "}
              <Link to="/privacy" className="text-orange-700 underline font-semibold">Privacy Policy</Link> for complete details.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200">
          <div className="text-center space-y-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/rates" className="text-orange-600 hover:underline">Rates & Fees</Link>
              <Link to="/faq" className="text-orange-600 hover:underline">FAQ</Link>
              <Link to="/security" className="text-orange-600 hover:underline">Security</Link>
              <Link to="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="text-orange-600 hover:underline">Terms of Service</Link>
              <Link to="/contact" className="text-orange-600 hover:underline">Contact</Link>
            </nav>
            <div className="flex justify-center items-center gap-4 text-xs text-gray-500 flex-wrap">
              <span>🔒 Bank-level encryption (TLS 1.2+ & AES-256)</span>
              <span className="text-gray-300">•</span>
              <span>⚡ Fast transfers (minutes to hours)</span>
              <span className="text-gray-300">•</span>
              <span>✓ Licensed & regulated partners</span>
            </div>
          </div>
        </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
