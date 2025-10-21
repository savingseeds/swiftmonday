import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I send money with SwiftMonday?',
          a: 'It\'s simple! Enter the amount you want to send, provide your recipient\'s details, choose your payment method, and confirm. Your money will be on its way in minutes. No account creation required for your first transfer.'
        },
        {
          q: 'Do I need to create an account?',
          a: 'For your first transfer, you don\'t need an account. However, creating a free account lets you save recipient details, track transfers, and enjoy faster repeat transactions.'
        },
        {
          q: 'Is SwiftMonday available in my state?',
          a: 'SwiftMonday is available in all 50 US states. We\'re licensed and compliant with all federal and state money transmission regulations.'
        }
      ]
    },
    {
      category: 'Fees & Rates',
      questions: [
        {
          q: 'How much does it cost to send money?',
          a: 'We charge a flat fee of $2.99 per transfer plus a small exchange rate markup (1.5% for amounts under $500). The exact total cost is always shown upfront before you confirm your transfer. No hidden fees!'
        },
        {
          q: 'What exchange rate do you use?',
          a: 'We use real-time market rates updated every few minutes. Our rates are typically 1-2% better than traditional banks and competitive with other money transfer services. You\'ll always see the exact rate before confirming.'
        },
        {
          q: 'Are there any hidden fees?',
          a: 'Absolutely not! What you see is what you pay. The total cost shown at checkout includes all fees. Your recipient receives exactly the amount displayed with no deductions.'
        },
        {
          q: 'Do larger transfers get better rates?',
          a: 'Yes! Transfers over $500 get reduced exchange rate markups (1.3%), and transfers over $1,000 get even better rates (1.0%). The savings are automatically applied.'
        }
      ]
    },
    {
      category: 'Speed & Delivery',
      questions: [
        {
          q: 'How fast is the transfer?',
          a: 'Most transfers complete within 1-24 hours. E-wallet deliveries (GCash, Maya) are typically fastest (1-4 hours), while bank transfers may take up to 24 hours depending on the receiving bank.'
        },
        {
          q: 'Can I track my transfer?',
          a: 'Yes! You\'ll receive a tracking number immediately after completing your transfer. You can check the status anytime on our website or via email notifications we send you at each step.'
        },
        {
          q: 'What if my transfer is delayed?',
          a: 'Delays are rare, but if your transfer takes longer than expected, our support team is here to help. Contact us and we\'ll investigate immediately. We provide regular status updates for any transfer taking longer than usual.'
        }
      ]
    },
    {
      category: 'Payment Methods',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept debit cards, credit cards, and cryptocurrency (Bitcoin, Ethereum, USDT) through our secure payment partner Transak. More payment options coming soon!'
        },
        {
          q: 'Is it safe to use my card?',
          a: 'Absolutely! We use bank-level encryption and never store your full card details. All payments are processed through Transak, a licensed and regulated payment processor trusted by major crypto platforms.'
        },
        {
          q: 'Can I pay with cryptocurrency?',
          a: 'Yes! We accept Bitcoin, Ethereum, and USDT. Crypto payments often have lower fees and can be faster than card payments.'
        }
      ]
    },
    {
      category: 'Recipients & Delivery',
      questions: [
        {
          q: 'How does my recipient receive the money?',
          a: 'Recipients can receive money via bank transfer (any Philippine bank), e-wallets (GCash, Maya, Coins.ph), or cash pickup at thousands of locations nationwide. You choose the method when sending.'
        },
        {
          q: 'Does my recipient need an account?',
          a: 'No! Your recipient doesn\'t need a SwiftMonday account. They just need a bank account, e-wallet, or ID for cash pickup depending on the delivery method you choose.'
        },
        {
          q: 'Can I send to multiple recipients?',
          a: 'Currently, each transfer is to one recipient. However, you can make multiple transfers to different recipients back-to-back. We\'re working on batch sending features!'
        },
        {
          q: 'What information do I need about my recipient?',
          a: 'You\'ll need their full name (as it appears on their ID), phone number, and delivery details (bank account number, e-wallet phone number, or pickup location). We\'ll guide you through it step by step.'
        }
      ]
    },
    {
      category: 'Limits & Verification',
      questions: [
        {
          q: 'How much can I send?',
          a: 'Without verification, you can send up to $500 per transfer and $2,000 per month. With ID verification, limits increase to $3,000 per transfer and $10,000 per month.'
        },
        {
          q: 'Why do I need to verify my identity?',
          a: 'Identity verification is required by US law (Bank Secrecy Act) to prevent fraud and money laundering. It keeps you, your recipient, and the financial system safe. Verification is quick - usually takes just a few minutes!'
        },
        {
          q: 'What documents do I need for verification?',
          a: 'A government-issued photo ID (driver\'s license, passport, or state ID) and sometimes proof of address (utility bill or bank statement). The process is 100% online - just take photos with your phone.'
        }
      ]
    },
    {
      category: 'Security & Trust',
      questions: [
        {
          q: 'Is SwiftMonday legitimate and licensed?',
          a: 'Yes! SwiftMonday is a licensed money transmitter operating in compliance with all federal and state regulations. We\'re registered with FinCEN and follow strict security and compliance standards.'
        },
        {
          q: 'How do you protect my personal information?',
          a: 'We use bank-level encryption (256-bit SSL) to protect all data. Your information is stored securely and never shared with third parties except as required to complete transfers or by law. See our Privacy Policy for details.'
        },
        {
          q: 'What if something goes wrong?',
          a: 'If there\'s any issue with your transfer, contact us immediately. We have a 100% money-back guarantee if we can\'t complete your transfer. Our support team responds within 1 hour during business hours.'
        },
        {
          q: 'Can I cancel a transfer?',
          a: 'Transfers can be cancelled within 30 minutes of initiation if the money hasn\'t been delivered yet. After that, the transfer is usually already completed. Contact support immediately if you need to cancel.'
        }
      ]
    },
    {
      category: 'Technical & Account',
      questions: [
        {
          q: 'Do you have a mobile app?',
          a: 'Not yet! Our website works great on mobile browsers for now. A dedicated iOS and Android app is coming in Q2 2025. Sign up for updates to be notified when it launches!'
        },
        {
          q: 'I forgot my password. What do I do?',
          a: 'Click "Forgot Password" on the login page. We\'ll send you a secure link to reset it. If you don\'t receive the email, check your spam folder or contact support.'
        },
        {
          q: 'Can I save my recipient\'s information?',
          a: 'Yes! Create a free account and you can save unlimited recipients. Makes repeat transfers super fast - just select the recipient and confirm.'
        }
      ]
    }
  ];

  // Filter questions based on search
  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-blue-600" size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about sending money with SwiftMonday
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
                {category.category}
              </h2>

              <div className="space-y-2">
                {category.questions.map((item) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div key={currentIndex} className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => toggleQuestion(currentIndex)}
                        className="w-full py-4 flex items-start justify-between text-left hover:text-blue-600 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="flex-shrink-0 text-blue-600" size={24} />
                        ) : (
                          <ChevronDown className="flex-shrink-0 text-gray-400" size={24} />
                        )}
                      </button>

                      {isOpen && (
                        <div className="pb-4 text-gray-600 leading-relaxed">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-600 mb-4">No questions match your search.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-blue-600 hover:underline font-semibold"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Still Need Help */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="mailto:support@swiftmonday.com"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link>
            <Link to="/rates" className="text-blue-600 hover:underline">Rates & Fees</Link>
            <Link to="/security" className="text-blue-600 hover:underline">Security</Link>
            <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
