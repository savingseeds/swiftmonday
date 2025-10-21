import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import HeroContent from '../components/HeroContent'
import QuickTransfer from '../components/QuickTransfer'
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

            {/* Right Quick Transfer */}
            <div className="flex justify-center lg:justify-end">
              <QuickTransfer onContinue={openSendMoney} />
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

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Powered by Blockchain Technology
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Behind the scenes, we use USDT stablecoin on the blockchain to move your money quickly and securely.
            You don't need to know anything about cryptocurrency - we handle all the complexity so you can focus
            on what matters: getting money to your family.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$5M+</div>
              <div className="text-sm text-gray-600">Money Transferred</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-gray-600">App Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
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

      {/* Send Money Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SendMoneySteps />
      </Modal>
    </div>
  )
}

export default Home
