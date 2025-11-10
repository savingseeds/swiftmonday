import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import HeroContent from '../components/HeroContent'
import FeatureGrid from '../components/FeatureGrid'
import HowItWorks from '../components/HowItWorks'
import Modal from '../components/Modal'
import SendMoneySteps from '../components/SendMoneySteps'
import RateComparison from '../components/RateComparison'

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSendMoney = () => setIsModalOpen(true)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation onSendMoney={openSendMoney} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-24 pb-16">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <HeroContent
              onSendMoney={openSendMoney}
              onViewRates={() => {}}
            />

            {/* Right Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <img
                  src="/images/lady1_home.png"
                  alt="Woman using smartphone to send money to Philippines"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Optional: Add floating card overlay for visual interest */}
                <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Transfer Complete</div>
                      <div className="text-xs text-gray-600">₱5,000 received in 2 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureGrid />

      {/* NEW: Rate Comparison */}
      <RateComparison />

      {/* How It Works */}
      <HowItWorks />

      {/* Trust Section - Updated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Built on Trusted Infrastructure
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            SwiftMonday connects you to licensed payment processors and remittance providers who handle
            all regulated activities. We focus on creating a simple, transparent experience while our
            partners ensure your money moves safely and compliantly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-4hrs</div>
              <div className="text-sm text-gray-600">Typical Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Bank-Level</div>
              <div className="text-sm text-gray-600">Security Standards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Licensed</div>
              <div className="text-sm text-gray-600">Partner Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Email Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Trust Section with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <img
                  src="/images/man1_home.png"
                  alt="Man using smartphone for money transfer"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Floating stats card */}
                <div className="absolute top-8 right-8 bg-white rounded-xl shadow-lg p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">$2.99</div>
                    <div className="text-xs text-gray-600">Flat fee only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why SwiftMonday?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've built a modern platform that connects you with trusted, licensed payment providers.
                No gimmicks, just transparent pricing and reliable service.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Secure & Compliant</h3>
                    <p className="text-sm text-gray-600">
                      Payment processing and remittance services performed by licensed providers with
                      full regulatory compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-gray-600">
                      See exact fees and exchange rates before you confirm. No hidden charges or surprises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fast Transfers</h3>
                    <p className="text-sm text-gray-600">
                      Modern technology enables quick processing. Many transfers complete within hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>Our Partners:</strong> We work with Transak for payment processing and Coins.ph
                  for PHP delivery—both licensed and regulated to ensure your transfer meets all legal requirements.
                </p>
              </div>
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
                A software platform connecting you to licensed remittance providers for US to Philippines transfers.
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
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@swiftmonday.com" className="hover:text-white">support@swiftmonday.com</a></li>
                <li><a href="mailto:security@swiftmonday.com" className="hover:text-white">security@swiftmonday.com</a></li>
                <li className="text-gray-500">Mon-Fri, 9am-6pm ET</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">
              SwiftMonday, Inc. is a software platform. Remittance services are provided by licensed
              third-party providers.
            </p>
            <p>&copy; 2025 SwiftMonday, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Send Money Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SendMoneySteps />
      </Modal>
    </div>
  )
}

export default Home