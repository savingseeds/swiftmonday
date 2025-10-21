import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, MessageCircle, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@swiftmonday.com',
      link: 'mailto:support@swiftmonday.com',
      response: 'Response within 2-4 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available on website',
      link: '#',
      response: 'Instant response'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us directly',
      contact: 'Coming soon',
      link: '#',
      response: 'Mon-Fri, 9am-6pm EST'
    }
  ];

  const supportTopics = [
    {
      title: 'Track Transfer',
      description: 'Check the status of your money transfer',
      icon: '🔍'
    },
    {
      title: 'Report Issue',
      description: 'Something went wrong? Let us know',
      icon: '⚠️'
    },
    {
      title: 'Account Help',
      description: 'Login, password, or account questions',
      icon: '👤'
    },
    {
      title: 'Verify Identity',
      description: 'Help with ID verification process',
      icon: '🆔'
    },
    {
      title: 'Fees & Rates',
      description: 'Questions about pricing',
      icon: '💰'
    },
    {
      title: 'Technical Issue',
      description: 'Website or app not working?',
      icon: '🔧'
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
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our support team is here 24/7 to answer your questions and resolve any issues
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
                <div className="text-blue-600 font-semibold mb-1">{method.contact}</div>
                <div className="text-sm text-gray-500">{method.response}</div>
              </a>
            );
          })}
        </div>

        {/* Quick Help Topics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Help Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportTopics.map((topic, index) => (
              <button
                key={index}
                className="text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-2 border-green-300 rounded-lg text-green-800">
                ✓ Message sent! We'll respond within 2-4 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select a topic...</option>
                  <option value="transfer">Transfer Issue</option>
                  <option value="account">Account Help</option>
                  <option value="verification">Verification</option>
                  <option value="fees">Fees & Rates</option>
                  <option value="technical">Technical Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-blue-600" size={32} />
                <h3 className="text-xl font-bold text-gray-900">Support Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span className="font-semibold">Email & Chat:</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Phone:</span>
                  <span>Mon-Fri, 9am-6pm EST</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
                  We typically respond to emails within 2-4 hours during business hours,
                  and within 24 hours on weekends.
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-blue-600" size={32} />
                <h3 className="text-xl font-bold text-gray-900">Company Info</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <div>
                  <div className="font-semibold text-gray-900">SwiftMonday Inc.</div>
                  <div className="text-sm">Licensed Money Transmitter</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:support@swiftmonday.com" className="text-blue-600 hover:underline">
                    support@swiftmonday.com
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Business Address</div>
                  <div className="text-sm">
                    Details available upon request for regulatory purposes
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Help */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">🚨 Urgent Issue?</h3>
              <p className="text-sm text-red-700 mb-3">
                If you suspect fraud or unauthorized access to your account,
                contact us immediately at:
              </p>
              <a
                href="mailto:security@swiftmonday.com"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
              >
                security@swiftmonday.com
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h2>
          <p className="mb-6">
            Check out our FAQ page - you might find the answer immediately!
          </p>
          <Link
            to="/faq"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View FAQ
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link>
            <Link to="/rates" className="text-blue-600 hover:underline">Rates & Fees</Link>
            <Link to="/security" className="text-blue-600 hover:underline">Security</Link>
            <Link to="/terms" className="text-blue-600 hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
