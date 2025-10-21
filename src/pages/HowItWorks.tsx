import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, CreditCard, Repeat, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: DollarSign,
      title: 'Enter Amount',
      description: 'Tell us how much you want to send. See the exact amount your recipient will receive in Philippine Pesos.',
      time: '30 seconds'
    },
    {
      icon: CreditCard,
      title: 'Choose Payment Method',
      description: 'Pay securely with your debit card, credit card, or cryptocurrency through our trusted partner Transak.',
      time: '2 minutes'
    },
    {
      icon: Repeat,
      title: 'We Process Your Transfer',
      description: 'Your payment is converted to USDT stablecoin and securely transferred through the blockchain to the Philippines.',
      time: '5-10 minutes'
    },
    {
      icon: CheckCircle,
      title: 'Recipient Gets Money',
      description: 'Money is converted to Philippine Pesos and delivered to your recipient via their preferred method.',
      time: 'Within 24 hours'
    }
  ];

  const deliveryMethods = [
    {
      name: 'Bank Transfer',
      description: 'Direct deposit to any Philippine bank account',
      time: '1-24 hours'
    },
    {
      name: 'E-Wallet',
      description: 'GCash, Maya (PayMaya), Coins.ph wallet',
      time: '1-4 hours'
    },
    {
      name: 'Cash Pickup',
      description: 'Pick up at thousands of locations nationwide',
      time: '1-4 hours'
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How SwiftMonday Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Send money from the US to the Philippines in 4 simple steps.
            Fast, secure, and transparent pricing.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 text-blue-600">
                      <Icon size={48} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <div className="text-sm text-blue-600 font-semibold">
                      ⏱️ {step.time}
                    </div>
                  </div>

                  {/* Arrow (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="text-blue-400" size={32} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Methods */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Flexible Delivery Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {deliveryMethods.map((method, index) => (
              <div key={index} className="border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {method.description}
                </p>
                <div className="text-sm font-semibold text-blue-600">
                  ⚡ {method.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose SwiftMonday?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure & Licensed</h3>
              <p className="text-blue-100">
                Bank-level security with encrypted transactions and full regulatory compliance.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">Low Fees</h3>
              <p className="text-blue-100">
                Transparent pricing with no hidden charges. You always know exactly what you're paying.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Transfers</h3>
              <p className="text-blue-100">
                Most transfers complete within hours, not days. Your family gets money when they need it.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Start Sending Money Now →
          </Link>
          <p className="text-gray-600 mt-4">
            First transfer fee waived for new users!
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/rates" className="text-blue-600 hover:underline">View Rates & Fees</Link>
            <Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link>
            <Link to="/contact" className="text-blue-600 hover:underline">Contact Support</Link>
            <Link to="/security" className="text-blue-600 hover:underline">Security</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
