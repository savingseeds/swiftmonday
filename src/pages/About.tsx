import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Shield, Zap, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
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
            About SwiftMonday
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making remittances faster, cheaper, and more transparent for Filipino families worldwide
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SwiftMonday was created to solve a problem millions of Filipino families face: sending money 
              home shouldn't be expensive, slow, or complicated. Traditional remittance services charge high 
              fees and hide costs in poor exchange rates, taking money away from the families who need it most.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're building a better way. By leveraging modern technology and partnering with licensed 
              payment processors, we offer transparent pricing, competitive rates, and fast transfers. 
              Every dollar saved on fees is a dollar that goes directly to your loved ones.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees, no surprises. You always know exactly what you're paying and what your 
                recipient will receive.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speed</h3>
              <p className="text-gray-600">
                Most transfers complete within hours, not days. Your family gets money when they need it.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">
                Bank-level encryption and compliance with all regulations to keep your money and data safe.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family First</h3>
              <p className="text-gray-600">
                Every decision we make is about helping families stay connected and supporting each other.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              SwiftMonday was founded by individuals who understand the challenges of sending money internationally. 
              Having experienced firsthand the high fees and poor exchange rates of traditional services, we knew 
              there had to be a better way.
            </p>
            <p>
              The Filipino diaspora sends billions of dollars home each year—money that supports families, 
              educates children, and builds communities. Yet traditional services take 5-10% in fees and hidden 
              costs. We saw an opportunity to use technology to dramatically reduce these costs while improving speed 
              and transparency.
            </p>
            <p>
              As an early-stage startup, we're focused on building the best possible product for our users. 
              We work with established, licensed payment partners to ensure security and compliance while we 
              develop our platform and pursue our own regulatory registrations. Our goal is to become the most 
              trusted and affordable way to send money from the US to the Philippines.
            </p>
          </div>
        </div>

        {/* Compliance & Security - ACCURATE VERSION */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Compliance & Security</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Regulatory Compliance */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle size={24} />
                Regulatory Approach
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Working with fully licensed and regulated payment processors</li>
                <li>• All payments processed through FinCEN-registered partners (Transak)</li>
                <li>• Committed to full compliance with BSA and USA PATRIOT Act</li>
                <li>• Implementing robust AML/KYC procedures</li>
                <li>• In process of obtaining state licenses as we scale</li>
              </ul>
            </div>

            {/* Security Measures */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield size={24} />
                Security Measures
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li>• 256-bit SSL encryption protecting all data and transactions</li>
                <li>• PCI DSS Level 1 compliant through licensed partners</li>
                <li>• Two-factor authentication available for accounts</li>
                <li>• Real-time fraud detection and monitoring systems</li>
                <li>• Enterprise-grade infrastructure with security audits</li>
                <li>• 24/7 security monitoring and incident response</li>
              </ul>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Our Partners</h3>
            <p className="text-blue-100">
              SwiftMonday works exclusively with fully licensed and regulated financial service providers, 
              including Transak (licensed payment processor), to ensure every transaction meets all regulatory 
              requirements. This partnership model allows us to offer secure, compliant services while building 
              our platform and pursuing our own regulatory registrations.
            </p>
          </div>
        </div>

        {/* The Numbers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$25B+</div>
            <div className="text-gray-600">Sent to Philippines annually by diaspora</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
            <div className="text-gray-600">Filipino Americans sending money home</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5-10%</div>
            <div className="text-gray-600">Typical fees charged by traditional services</div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose SwiftMonday?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-3">
              <div className="text-green-500 text-xl">✓</div>
              <div>
                <h3 className="font-bold text-gray-900">Lower Fees</h3>
                <p className="text-sm text-gray-600">Just $2.99 flat fee + 1.5% rate markup</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-green-500 text-xl">✓</div>
              <div>
                <h3 className="font-bold text-gray-900">Fast Transfers</h3>
                <p className="text-sm text-gray-600">Most complete within 1-24 hours</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-green-500 text-xl">✓</div>
              <div>
                <h3 className="font-bold text-gray-900">Total Transparency</h3>
                <p className="text-sm text-gray-600">No hidden fees or surprise charges</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-green-500 text-xl">✓</div>
              <div>
                <h3 className="font-bold text-gray-900">Bank-Level Security</h3>
                <p className="text-sm text-gray-600">256-bit encryption and licensed partners</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-green-500 text-xl">✓</div>
              <div>
                <h3 className="font-bold text-gray-900">Multiple Delivery Options</h3>
                <p className="text-sm text-gray-600">Bank, e-wallet, or cash pickup</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-green-500 text-xl">✓</div>
              <div>
                <h3 className="font-bold text-gray-900">Responsive Support</h3>
                <p className="text-sm text-gray-600">Help when you need it</p>
              </div>
            </div>
          </div>
        </div>

        {/* Building Trust */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Building Trust Through Transparency</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            As an early-stage company, we believe in complete honesty about our operations. We partner with 
            established, licensed providers to handle payment processing while we build our technology and 
            pursue our own regulatory registrations. This approach ensures you get secure, compliant service 
            from day one, while allowing us to focus on building the best possible user experience.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About SwiftMonday?</h2>
          <p className="text-gray-600 mb-6">
            We're here to help! Reach out with any questions about our service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/faq"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link>
            <Link to="/rates" className="text-blue-600 hover:underline">Rates & Fees</Link>
            <Link to="/security" className="text-blue-600 hover:underline">Security</Link>
            <Link to="/terms" className="text-blue-600 hover:underline">Terms</Link>
            <Link to="/privacy" className="text-blue-600 hover:underline">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
