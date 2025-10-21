import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, FileCheck, Server, Key } from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Bank-Level Encryption',
      description: '256-bit SSL encryption protects all your data in transit and at rest. The same security used by major banks.'
    },
    {
      icon: Shield,
      title: 'Licensed Partners',
      description: 'We work with fully licensed and regulated payment processors who are compliant with all financial regulations.'
    },
    {
      icon: Eye,
      title: 'Fraud Monitoring',
      description: '24/7 automated fraud detection systems monitor every transaction for suspicious activity.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Your data is stored on enterprise-grade servers with multiple layers of security and regular backups.'
    },
    {
      icon: Key,
      title: 'Two-Factor Authentication',
      description: 'Optional 2FA adds an extra layer of protection to your account using your phone.'
    },
    {
      icon: FileCheck,
      title: 'Privacy First',
      description: 'We never sell your data. Your information is only used to process transfers and comply with regulations.'
    }
  ];

  const complianceItems = [
    {
      title: 'Bank Secrecy Act (BSA)',
      description: 'Committed to full compliance with BSA requirements for financial recordkeeping and reporting'
    },
    {
      title: 'USA PATRIOT Act',
      description: 'Following all customer identification and verification requirements to prevent financial crimes'
    },
    {
      title: 'Anti-Money Laundering (AML)',
      description: 'Robust AML procedures including transaction monitoring and suspicious activity reporting'
    },
    {
      title: 'Know Your Customer (KYC)',
      description: 'Comprehensive identity verification processes to ensure legitimate use of our platform'
    },
    {
      title: 'OFAC Compliance',
      description: 'Screening all transactions against OFAC sanctions lists to prevent prohibited transfers'
    },
    {
      title: 'Data Protection',
      description: 'CCPA compliant data handling practices respecting user privacy rights'
    }
  ];

  const safetyTips = [
    {
      tip: 'Never share your password',
      description: 'SwiftMonday will never ask for your password via email or phone'
    },
    {
      tip: 'Verify website URL',
      description: 'Always check that you\'re on the legitimate SwiftMonday website before logging in'
    },
    {
      tip: 'Enable 2FA',
      description: 'Turn on two-factor authentication for extra account protection'
    },
    {
      tip: 'Beware of phishing',
      description: 'Be suspicious of emails asking for personal information or urgent action'
    },
    {
      tip: 'Use strong passwords',
      description: 'Create unique, complex passwords and change them regularly'
    },
    {
      tip: 'Check transaction details',
      description: 'Always verify recipient information before confirming a transfer'
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
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-6 rounded-full">
              <Shield className="text-white" size={64} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Security is Our Priority
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use industry-leading technology and work with licensed partners to keep your money and personal information safe.
          </p>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How We Protect You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Commitment to Compliance */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Commitment to Compliance
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            SwiftMonday is committed to operating in full compliance with all applicable US federal and 
            state regulations. As an early-stage company, we work with established, fully licensed payment 
            processors to ensure all transactions meet regulatory requirements while we pursue our own 
            licensing as we grow.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceItems.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Our Partners:</strong> All payment processing is handled by Transak and other fully 
              licensed and regulated financial service providers. This ensures that every transaction is 
              processed in compliance with money transmission laws and regulations.
            </p>
          </div>
        </div>

        {/* Data Protection */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Your Data, Your Control</h2>
            <div className="space-y-3 text-blue-100">
              <p>✓ We never sell or share your personal information with third parties</p>
              <p>✓ Your data is encrypted both in transit and at rest</p>
              <p>✓ You can request to view or delete your data at any time</p>
              <p>✓ We only keep data as long as legally required</p>
              <p>✓ Regular security reviews ensure your information stays protected</p>
            </div>
            <Link 
              to="/privacy" 
              className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Read Privacy Policy
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Monitor</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Eye className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Unusual Activity</h3>
                  <p className="text-sm text-gray-600">Automated systems flag suspicious patterns 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Login Attempts</h3>
                  <p className="text-sm text-gray-600">Track and prevent unauthorized access attempts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <AlertTriangle className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Fraud Patterns</h3>
                  <p className="text-sm text-gray-600">Monitoring for potential fraud indicators</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Lock className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">System Security</h3>
                  <p className="text-sm text-gray-600">Continuous monitoring of our infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Stay Safe: Tips for You
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            While we work hard to protect you, your security is a partnership. 
            Follow these best practices to keep your account safe.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((item, index) => (
              <div key={index} className="border-2 border-blue-100 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔐</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.tip}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Report Issue */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center mb-12">
          <AlertTriangle className="text-red-600 mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Suspect Fraud or Unauthorized Activity?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you notice anything suspicious on your account or believe you've been targeted 
            by a scam, contact us immediately. Our security team will investigate and assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@swiftmonday.com"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Report Security Issue
            </a>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-8 bg-white rounded-xl shadow-lg px-8 py-6 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">256-bit</div>
              <div className="text-sm text-gray-600">SSL Encryption</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">Licensed</div>
              <div className="text-sm text-gray-600">Payment Partners</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Fraud Monitoring</div>
            </div>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to Transparency</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            As an early-stage startup, we're building SwiftMonday with security and compliance at the core. 
            We partner with established, licensed financial service providers to ensure every transaction 
            meets all regulatory requirements. As we grow, we're actively working toward obtaining our own 
            money transmission licenses to further strengthen our commitment to you.
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link>
            <Link to="/rates" className="text-blue-600 hover:underline">Rates & Fees</Link>
            <Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link>
            <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
