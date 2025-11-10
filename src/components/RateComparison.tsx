import { useState, useEffect } from 'react'
import { EXCHANGE_RATES } from '../services/exchangeRate'

interface CompetitorRate {
  name: string
  logo: string
  exchangeRate: number
  fee: number
  receiveAmount: number
  transferTime: string
  savings: number
}

function RateComparison() {
  const [sendAmount, setSendAmount] = useState(1000)
  const [competitors, setCompetitors] = useState<CompetitorRate[]>([])

  useEffect(() => {
    // Calculate rates for different providers
    const ourRate = EXCHANGE_RATES.USD_TO_PHP
    const ourFee = EXCHANGE_RATES.FEE
    const ourReceiveAmount = (sendAmount - ourFee) * ourRate

    // Competitor data (in real app, this would come from API)
    const competitorData = [
      {
        name: 'SwiftMonday',
        logo: '💸',
        exchangeRate: ourRate,
        fee: ourFee,
        transferTime: 'Minutes',
        isUs: true
      },
      {
        name: 'Western Union',
        logo: 'WU',
        exchangeRate: 55.80, // Usually worse rate
        fee: 11.99, // Higher fee
        transferTime: '1-2 days',
        isUs: false
      },
      {
        name: 'Remitly',
        logo: 'R',
        exchangeRate: 56.45, // Slightly worse rate
        fee: 3.99,
        transferTime: '15 minutes',
        isUs: false
      },
      {
        name: 'Traditional Bank',
        logo: '🏦',
        exchangeRate: 54.20, // Much worse rate
        fee: 25.00, // High fee
        transferTime: '3-5 days',
        isUs: false
      }
    ]

    const rates = competitorData.map(competitor => {
      const receiveAmount = (sendAmount - competitor.fee) * competitor.exchangeRate
      const savings = competitor.isUs ? 0 : ourReceiveAmount - receiveAmount

      return {
        name: competitor.name,
        logo: competitor.logo,
        exchangeRate: competitor.exchangeRate,
        fee: competitor.fee,
        receiveAmount,
        transferTime: competitor.transferTime,
        savings
      }
    })

    setCompetitors(rates)
  }, [sendAmount])

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compare rates and save money
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how much more your family receives with SwiftMonday
          </p>

          {/* Amount Selector */}
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              If you send
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500">$</span>
              <select
                value={sendAmount}
                onChange={(e) => setSendAmount(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-3 text-lg font-semibold border-2 border-gray-300 rounded-lg appearance-none bg-white focus:border-orange-500 focus:outline-none"
              >
                <option value={100}>100</option>
                <option value={500}>500</option>
                <option value={1000}>1,000</option>
                <option value={2000}>2,000</option>
                <option value={5000}>5,000</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">USD</span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Provider</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Exchange Rate</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Transfer Fee</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Recipient Gets</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Transfer Time</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr
                    key={competitor.name}
                    className={`border-b border-gray-100 ${
                      index === 0 ? 'bg-orange-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                          index === 0 
                            ? 'bg-orange-500 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {competitor.logo}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {competitor.name}
                            {index === 0 && (
                              <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                                BEST VALUE
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">1 USD = {competitor.exchangeRate} PHP</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">${competitor.fee.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`font-semibold ${index === 0 ? 'text-orange-600' : 'text-gray-900'}`}>
                        ₱{formatMoney(competitor.receiveAmount)}
                      </div>
                      {competitor.savings > 0 && (
                        <div className="text-sm text-red-600">
                          -₱{formatMoney(competitor.savings)} less
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900">{competitor.transferTime}</span>
                        {index === 0 && (
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {competitors.map((competitor, index) => (
              <div
                key={competitor.name}
                className={`p-4 border-b ${index === 0 ? 'bg-orange-50' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                      index === 0 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {competitor.logo}
                    </div>
                    <span className="font-semibold">{competitor.name}</span>
                  </div>
                  {index === 0 && (
                    <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                      BEST VALUE
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span>1 USD = {competitor.exchangeRate} PHP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fee:</span>
                    <span>${competitor.fee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recipient gets:</span>
                    <span className={`font-semibold ${index === 0 ? 'text-orange-600' : ''}`}>
                      ₱{formatMoney(competitor.receiveAmount)}
                    </span>
                  </div>
                  {competitor.savings > 0 && (
                    <div className="text-right text-red-600 text-sm">
                      -₱{formatMoney(competitor.savings)} less
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            On average, SwiftMonday users save <span className="font-semibold text-orange-600">₱856</span> per transfer
          </p>
          <button 
  onClick={() => {
    // Find and click the send money button in navigation
    const sendMoneyBtn = document.querySelector('[data-send-money-trigger]')
    if (sendMoneyBtn) (sendMoneyBtn as HTMLElement).click()
  }}
  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
>
  Start saving today
</button>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">Licensed Partners</div>
            <div className="text-sm text-gray-600">Fully regulated providers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">SSL Secured</div>
            <div className="text-sm text-gray-600">256-bit encryption</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">24/7 Support</div>
            <div className="text-sm text-gray-600">Always here to help</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RateComparison