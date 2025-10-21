import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingDown, Shield, Clock } from 'lucide-react';

const RatesAndFees: React.FC = () => {
  const [sendAmount, setSendAmount] = useState(500);

  // Calculate fees and received amount
  const flatFee = 2.99;
  const exchangeRateMarkup = 0.015; // 1.5%
  const currentExchangeRate = 55.50; // USD to PHP (example rate)
  const ourRate = currentExchangeRate * (1 - exchangeRateMarkup);
  const totalFee = flatFee + (sendAmount * exchangeRateMarkup);
  const amountAfterFees = sendAmount - flatFee;
  const receivedAmount = amountAfterFees * ourRate;

  const competitors = [
    {
      name: 'SwiftMonday',
      fee: flatFee.toFixed(2),
      rate: ourRate.toFixed(2),
      received: receivedAmount.toFixed(2),
      highlight: true,
      speed: '1-24 hours'
    },
    {
      name: 'Remitly',
      fee: '3.99',
      rate: (currentExchangeRate * 0.97).toFixed(2),
      received: ((sendAmount - 3.99) * currentExchangeRate * 0.97).toFixed(2),
      highlight: false,
      speed: '1-3 days'
    },
    {
      name: 'Western Union',
      fee: '8.00',
      rate: (currentExchangeRate * 0.96).toFixed(2),
      received: ((sendAmount - 8) * currentExchangeRate * 0.96).toFixed(2),
      highlight: false,
      speed: '1-2 days'
    },
    {
      name: 'MoneyGram',
      fee: '7.50',
      rate: (currentExchangeRate * 0.965).toFixed(2),
      received: ((sendAmount - 7.5) * currentExchangeRate * 0.965).toFixed(2),
      highlight: false,
      speed: '1-3 days'
    }
  ];

  const feeStructure = [
    {
      range: '$1 - $500',
      fee: '$2.99',
      exchangeMarkup: '1.5%'
    },
    {
      range: '$501 - $1,000',
      fee: '$2.99',
      exchangeMarkup: '1.3%'
    },
    {
      range: '$1,001 - $3,000',
      fee: '$2.99',
      exchangeMarkup: '1.0%'
    },
    {
      range: '$3,001+',
      fee: '$2.99',
      exchangeMarkup: '0.8%'
    }
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Rates & Fees
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden charges. No surprises. Just honest, competitive pricing.
          </p>
        </div>

        {/* Interactive Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">Fee Calculator</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                You Send (USD)
              </label>
              <input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-2xl font-bold focus:border-blue-500 focus:outline-none"
                min="1"
                max="10000"
              />
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Transfer Fee:</span>
                  <span className="font-semibold">${flatFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Exchange Rate Markup:</span>
                  <span className="font-semibold">${(sendAmount * exchangeRateMarkup).toFixed(2)} (1.5%)</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-900 font-semibold">Total Cost:</span>
                  <span className="font-bold text-red-600">${totalFee.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recipient Gets (PHP)
              </label>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                ₱{receivedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Exchange Rate:</span>
                  <span className="font-semibold">1 USD = ₱{ourRate.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Converted:</span>
                  <span className="font-semibold">${amountAfterFees.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Time:</span>
                  <span className="font-semibold text-green-600">1-24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Compare with Others
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Sending <span className="font-bold">${sendAmount}</span> to the Philippines
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Provider</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Fee</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Exchange Rate</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Speed</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Recipient Gets</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${
                      competitor.highlight
                        ? 'bg-blue-50 font-semibold'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="py-4 px-4">
                      {competitor.name}
                      {competitor.highlight && (
                        <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                          Best Value
                        </span>
                      )}
                    </td>
                    <td className="text-right py-4 px-4">${competitor.fee}</td>
                    <td className="text-right py-4 px-4">₱{competitor.rate}</td>
                    <td className="text-right py-4 px-4 text-sm">{competitor.speed}</td>
                    <td className={`text-right py-4 px-4 font-bold ${
                      competitor.highlight ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      ₱{parseFloat(competitor.received).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            * Comparison rates are estimates based on publicly available information as of {new Date().toLocaleDateString()}.
            Actual rates may vary.
          </p>
        </div>

        {/* Fee Structure */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Fee Structure
          </h2>
          <p className="text-gray-600 mb-6">
            The more you send, the better rate you get. Our fees decrease as your transfer amount increases.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {feeStructure.map((tier, index) => (
              <div key={index} className="border-2 border-blue-100 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="text-lg font-bold text-gray-900 mb-2">{tier.range}</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fee:</span>
                    <span className="font-semibold">{tier.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate markup:</span>
                    <span className="font-semibold">{tier.exchangeMarkup}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Our Pricing */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <TrendingDown className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Low Fees</h3>
            <p className="text-gray-600">
              Our technology lets us keep costs down and pass the savings to you.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <Shield className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Hidden Charges</h3>
            <p className="text-gray-600">
              What you see is what you pay. No surprise fees at the end.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <Clock className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Rates</h3>
            <p className="text-gray-600">
              Our rates update every few minutes to give you the best value.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Start Your Transfer Now →
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link>
            <Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link>
            <Link to="/contact" className="text-blue-600 hover:underline">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesAndFees;
