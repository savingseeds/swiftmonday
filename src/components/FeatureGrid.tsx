const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Send to GCash or bank accounts and your money arrives in minutes, not days.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: '💰',
    title: 'Low Fees',
    description: 'Just $2.99 fee regardless of amount. No hidden charges or surprise costs.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: '🏦',
    title: 'Bank-Level Security',
    description: 'Military-grade encryption and blockchain technology keep your money safe.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: '💱',
    title: 'Best Exchange Rates',
    description: 'Get competitive rates updated in real-time. No markup on currency conversion.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    description: 'Send money from anywhere using your phone, tablet, or computer.',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: '✅',
    title: 'Fully Regulated',
    description: 'Licensed and compliant with US and Philippine financial regulations.',
    color: 'bg-indigo-100 text-indigo-600'
  }
]

function FeatureGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary">SwiftMonday?</span>
          </h2>
          <p className="text-lg text-gray-600">
            We've built the most advanced remittance platform to make sending money to your 
            loved ones faster, cheaper, and more secure than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid