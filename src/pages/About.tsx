import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation onSendMoney={() => window.location.href = '/'} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-6">About SwiftMonday</h1>
          <p className="text-2xl opacity-90 max-w-3xl">
            Making international money transfers from the US to the Philippines simple, fast, and affordable.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            SwiftMonday exists to bridge the financial gap between Filipino families across the Pacific.
            We believe that sending money home shouldn't be complicated, expensive, or stressful.
            Our mission is to provide the most reliable, transparent, and affordable remittance service
            for the millions of Filipinos living in the United States.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-gray-600">
                Your money and data are protected with bank-level security. We're fully licensed and regulated
                to ensure your transfers are safe.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Speed & Reliability</h3>
              <p className="text-gray-600">
                Most transfers arrive within minutes. We partner with trusted payment networks to ensure
                your money reaches loved ones quickly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                We understand the importance of every transfer. Our support team is here to help,
                because we know you're not just sending money—you're sending care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              SwiftMonday was born from a simple observation: sending money from the US to the Philippines
              was unnecessarily complicated and expensive. Traditional remittance services charged high fees,
              offered poor exchange rates, and made the process feel outdated.
            </p>
            <p>
              Founded in 2024, we set out to revolutionize how Filipino-Americans support their families back home.
              By leveraging modern technology and digital currencies like USDT, we've created a platform that
              cuts out middlemen, reduces costs, and speeds up transfers.
            </p>
            <p>
              Today, SwiftMonday serves thousands of customers across the United States, helping them save money
              on fees while ensuring their loved ones in the Philippines receive more. Every transfer through our
              platform represents a family staying connected, a dream being supported, or a future being built.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SwiftMonday?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Competitive Exchange Rates</h3>
                <p className="text-gray-600">
                  We offer some of the best USD to PHP exchange rates in the market, ensuring your
                  recipients get more pesos for every dollar sent.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Low, Transparent Fees</h3>
                <p className="text-gray-600">
                  No hidden charges or surprise fees. You'll always know exactly how much you're paying
                  before you confirm your transfer.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Multiple Payout Options</h3>
                <p className="text-gray-600">
                  Send directly to GCash, bank accounts, or cash pickup locations across the Philippines
                  through our partnership with Coins.ph.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Fully Licensed & Regulated</h3>
                <p className="text-gray-600">
                  SwiftMonday is registered as a Money Services Business (MSB) with FinCEN and complies
                  with all federal and state regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">CEO & Founder</h3>
            <p className="text-gray-600 mt-2">
              Passionate about financial inclusion and making remittances accessible to all Filipino families.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Chief Technology Officer</h3>
            <p className="text-gray-600 mt-2">
              Building secure, scalable technology to power instant cross-border transfers.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Chief Compliance Officer</h3>
            <p className="text-gray-600 mt-2">
              Ensuring SwiftMonday meets all regulatory requirements and keeps your transfers safe.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">SwiftMonday by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Transfers Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$10M+</div>
              <div className="text-blue-100">Money Transferred</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">48</div>
              <div className="text-blue-100">US States Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnerships Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
        <div className="text-center text-gray-600 mb-8">
          We work with trusted financial institutions and technology providers to deliver the best service possible.
        </div>
        <div className="grid md:grid-cols-4 gap-8 items-center">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-xl font-semibold text-gray-800">Transak</div>
            <div className="text-sm text-gray-600 mt-2">Payment Processing</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-xl font-semibold text-gray-800">Coins.ph</div>
            <div className="text-sm text-gray-600 mt-2">Philippines Payouts</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-xl font-semibold text-gray-800">Supabase</div>
            <div className="text-sm text-gray-600 mt-2">Infrastructure</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-xl font-semibold text-gray-800">FinCEN</div>
            <div className="text-sm text-gray-600 mt-2">Regulatory Compliance</div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Regulatory Compliance</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Licenses & Registrations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Registered as Money Services Business (MSB) with FinCEN
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Compliant with Bank Secrecy Act (BSA)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    USA PATRIOT Act compliance program
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    State money transmitter licenses (where required)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Security & Protection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    256-bit SSL encryption for all transactions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    PCI DSS compliant payment processing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Multi-factor authentication available
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 fraud monitoring and prevention
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Filipino-Americans who trust SwiftMonday for their remittance needs.
          </p>
          <div className="space-x-4">
            <Link
              to="/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Send Money Now
            </Link>
            <a
              href="mailto:support@swiftmonday.com"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Contact Info */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">
                Email: support@swiftmonday.com<br />
                Business: business@swiftmonday.com<br />
                Compliance: compliance@swiftmonday.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                Saturday: 10:00 AM - 4:00 PM PST<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <p className="text-gray-300">
                SwiftMonday is a registered trademark.<br />
                MSB Registration: [Registration Number]<br />
                © 2025 SwiftMonday. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
