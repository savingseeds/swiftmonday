const steps = [
  {
    number: '1',
    icon: '👤',
    title: 'Enter Details',
    description: 'Enter amount and recipient bank details or GCash number'
  },
  {
    number: '2',
    icon: '💳',
    title: 'Pay Securely',
    description: 'Pay with your debit/credit card. Your payment is secured and encrypted'
  },
  {
    number: '3',
    icon: '📱',
    title: 'We Convert',
    description: 'We convert your USD to PHP at the best available rate with no markup'
  },
  {
    number: '4',
    icon: '✅',
    title: 'Money Delivered',
    description: 'Recipient receives pesos in their GCash or bank account within minutes'
  }
]

function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Sending money to the Philippines has never been easier. Our streamlined process gets 
            your money there fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-300" />
              )}
              
              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-light rounded-full mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks