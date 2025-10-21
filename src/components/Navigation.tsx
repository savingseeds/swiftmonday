import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavigationProps {
  onSendMoney: () => void
}

function Navigation({ onSendMoney }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                💸
              </div>
              <h1 className="text-2xl font-bold">
                <span className="text-gray-800">Swift</span>
                <span className="text-orange-500 ml-1">Monday</span>
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">How it Works</Link>
            <Link to="/rates" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Rates</Link>
            <Link to="/faq" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">FAQ</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Support</Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Sign In
            </button>
            <button 
              onClick={onSendMoney}
              data-send-money-trigger="true"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
>
  Send Money
</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation