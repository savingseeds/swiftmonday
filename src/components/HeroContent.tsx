import { Link } from 'react-router-dom'

interface HeroContentProps {
  onSendMoney: () => void
  onViewRates: () => void
}

function HeroContent({ onSendMoney }: HeroContentProps) {
  return (
    <div className="max-w-xl">
      {/* Trust Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 px-4 py-2 rounded-full mb-6 shadow-sm">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
          <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
          <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
        </div>
        <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ Filipinos worldwide</span>
      </div>
      
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Send money to the{' '}
        <span className="relative">
          <span className="relative z-10 text-orange-500">Philippines</span>
          <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
            <path d="M2 9C2 9 75.5 2 150 2C224.5 2 298 9 298 9" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </span>
        <br />
        in minutes
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Transfer money online with competitive exchange rates and low fees. 
        Your family gets pesos instantly via GCash or any bank account.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button 
          onClick={onSendMoney}
          className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span className="flex items-center justify-center gap-2">
            Send money now
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
        <Link
          to="/rates"
          className="bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center"
        >
          View today's rates
        </Link>
      </div>

      {/* Stats with better design */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200">
          <div className="text-3xl font-bold text-orange-600">2 min</div>
          <div className="text-sm text-gray-700 font-medium">Transfer time</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
          <div className="text-3xl font-bold text-blue-600">$2.99</div>
          <div className="text-sm text-gray-700 font-medium">Flat fee</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border border-green-200">
          <div className="text-3xl font-bold text-green-600">4.9★</div>
          <div className="text-sm text-gray-700 font-medium">App rating</div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent