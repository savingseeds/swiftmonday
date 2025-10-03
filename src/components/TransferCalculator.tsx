import { useState } from 'react'
import Button from './Button'
import { EXCHANGE_RATES, calculateReceiveAmount } from '../services/exchangeRate'

function TransferCalculator() {
  const [sendAmount, setSendAmount] = useState('')
  const [receiveAmount, setReceiveAmount] = useState('')
  
  // Exchange rate (in real app, this comes from API)
  // Now using the service values
 const handleSendAmountChange = (value: string) => {
  setSendAmount(value)
  
  if (value && !isNaN(Number(value))) {
    const amount = Number(value)
    const result = calculateReceiveAmount(amount)
    setReceiveAmount(result.receiveAmount.toFixed(2))
  } else {
    setReceiveAmount('')
  }
}

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Calculate Your Transfer
      </h2>
      
      {/* Send Amount Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          You Send
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            $
          </span>
          <input
            type="number"
            value={sendAmount}
            onChange={(e) => handleSendAmountChange(e.target.value)}
            placeholder="0.00"
            className="w-full pl-8 pr-16 py-4 text-2xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            USD
          </span>
        </div>
      </div>

      {/* Fee Display */}
      {sendAmount && Number(sendAmount) > 0 && (
        <div className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Transfer Amount</span>
            <span>${sendAmount}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Our Fee</span>
            <span>- ${EXCHANGE_RATES.FEE}</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Amount We'll Convert</span>
            <span>${Math.max(0, Number(sendAmount) - EXCHANGE_RATES.FEE).toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* Receive Amount Display */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Recipient Gets
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            ₱
          </span>
          <input
            type="text"
            value={receiveAmount}
            readOnly
            placeholder="0.00"
            className="w-full pl-8 pr-16 py-4 text-2xl border border-gray-300 rounded-lg bg-gray-50"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            PHP
          </span>
        </div>
      </div>

      {/* Exchange Rate Info */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-900">
          💱 Exchange Rate: 1 USD = {EXCHANGE_RATES.USD_TO_PHP} PHP
        </p>
        <p className="text-xs text-blue-700 mt-1">
          Rate updated 5 minutes ago
        </p>
      </div>

      {/* CTA Button */}
      <Button 
        text="Continue to Send Money" 
        size="large" 
        onClick={() => alert('This will open the send money flow!')}
      />
    </div>
  )
}

export default TransferCalculator