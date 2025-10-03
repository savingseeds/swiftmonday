import { useState } from 'react'
import { EXCHANGE_RATES } from '../services/exchangeRate'

interface QuickTransferProps {
  onContinue: () => void
}

function QuickTransfer({ onContinue }: QuickTransferProps) {
  const [sendAmount, setSendAmount] = useState('500')
  const [receiveAmount, setReceiveAmount] = useState('28,590.00')
  
  const exchangeRate = EXCHANGE_RATES.USD_TO_PHP
  
  const handleAmountChange = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9.]/g, '')
    setSendAmount(numericValue)
    
    if (numericValue && !isNaN(Number(numericValue))) {
      const amount = Number(numericValue)
      const php = (amount * exchangeRate).toFixed(2)
      setReceiveAmount(php.replace(/\B(?=(\d{3})+(?!\d))/g, ','))
    } else {
      setReceiveAmount('0.00')
    }
  }

  const quickAmounts = ['100', '250', '500', '1000']

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden border border-gray-100">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Send money now</h3>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure</span>
          </div>
        </div>

        {/* Quick amount selector */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountChange(amount)}
              className={`py-2 px-3 rounded-lg font-medium transition-all ${
                sendAmount === amount
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
        
        {/* You Send */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2 block">You send</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">$</div>
            <input
              type="text"
              value={sendAmount}
              onChange={(e) => handleAmountChange(e.target.value)}
              className="w-full pl-10 pr-16 py-4 text-2xl font-bold border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors"
              placeholder="0"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">USD</span>
            </div>
          </div>
        </div>

        {/* Exchange Rate */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-full px-6 py-3 border border-orange-200">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Today's rate:</span>
              <span className="font-bold text-gray-900">1 USD = {exchangeRate} PHP</span>
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* They Receive */}
        <div className="mb-8">
          <label className="text-sm font-medium text-gray-700 mb-2 block">They receive</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-orange-500">₱</div>
            <div className="w-full pl-10 pr-16 py-4 text-2xl font-bold bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl">
              {receiveAmount}
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <span className="text-sm font-medium text-orange-700 bg-orange-100 px-3 py-1.5 rounded-lg">PHP</span>
            </div>
          </div>
        </div>

        {/* Delivery promise */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6 border border-green-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Money arrives in minutes</p>
              <p className="text-sm text-gray-600 mt-1">Direct to GCash or any Philippine bank</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          Continue
        </button>

        {/* Trust text */}
        <p className="text-center text-sm text-gray-500 mt-4">
          No account needed • Only $2.99 fee
        </p>
      </div>
    </div>
  )
}

export default QuickTransfer