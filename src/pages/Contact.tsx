import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Clock, MessageCircle, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Navigation from '../components/Navigation';

type Method = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  contact: string;
  link?: string;
  response: string;
  disabled?: boolean;
};

type Topic = { 
  title: string; 
  description: string; 
  icon: string;
  subjectValue: string;
};

const contactMethods: Method[] = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@swiftmonday.com",
    link: "mailto:support@swiftmonday.com",
    response: "Typically within 2–4 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team",
    contact: "Coming Q1 2026",
    response: "Real-time when available",
    disabled: true,
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us directly",
    contact: "Coming Q1 2026",
    response: "Mon–Fri, 9am–6pm ET",
    disabled: true,
  },
];

const supportTopics: Topic[] = [
  { 
    title: "Track Transfer", 
    description: "Check transfer status", 
    icon: "🔍",
    subjectValue: "transfer"
  },
  { 
    title: "Report Issue", 
    description: "Something went wrong? Tell us", 
    icon: "⚠️",
    subjectValue: "other"
  },
  { 
    title: "Account Help", 
    description: "Login, password, or account", 
    icon: "👤",
    subjectValue: "account"
  },
  { 
    title: "Verify Identity", 
    description: "Help with ID verification", 
    icon: "🆔",
    subjectValue: "verification"
  },
  { 
    title: "Fees & Rates", 
    description: "Questions about pricing", 
    icon: "💰",
    subjectValue: "fees"
  },
  { 
    title: "Technical Issue", 
    description: "Site or app not working", 
    icon: "🔧",
    subjectValue: "technical"
  },
];

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "", // honeypot
    consent: false,
  });
  const [submitted, setSubmitted] = useState<null | "ok" | "err">(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTopicClick = (topic: Topic) => {
    setFormData(prev => ({
      ...prev,
      subject: topic.subjectValue,
      message: `I need help with: ${topic.description}\n\n`
    }));
    
    // Scroll to form
    setTimeout(() => {
      document.querySelector('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!emailRegex.test(formData.email)) return "Please enter a valid email.";
    if (!formData.subject) return "Please select a subject.";
    if (formData.message.trim().length < 10)
      return "Your message should be at least 10 characters.";
    if (!formData.consent)
      return "Please agree to the Privacy Policy.";
    if (formData.company) return "Spam detected."; // honeypot
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setSubmitted("err");
      alert(err);
      return;
    }
    setLoading(true);
    setSubmitted(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error("Network error");
      setSubmitted("ok");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
        consent: false,
      });
    } catch {
      setSubmitted("err");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation onSendMoney={() => window.location.href = '/'} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-title" className="text-5xl font-bold text-gray-900 mb-4">How Can We Help You?</h1>
          <p className="text-xl text-gray-600">
            Our team aims to respond quickly—typically within a few hours during business hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-16" aria-labelledby="contact-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What to Expect */}
        <section className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-1">2-4h</div>
              <div className="text-gray-600">Email response time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-gray-600">Email availability</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-1">&lt;1h</div>
              <div className="text-gray-600">Security issue priority</div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="grid md:grid-cols-3 gap-6 mb-12" aria-label="Contact methods">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            const disabled = method.disabled;
            const contents = (
              <>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Icon className="text-orange-600" size={28} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
                <div className={`font-semibold mb-1 ${disabled ? "text-gray-500" : "text-orange-600"}`}>
                  {method.contact}
                </div>
                <div className="text-sm text-gray-500">{method.response}</div>
              </>
            );

            return disabled ? (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg opacity-70 cursor-not-allowed"
                aria-disabled="true"
              >
                {contents}
              </div>
            ) : (
              <a
                key={i}
                href={method.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {contents}
              </a>
            );
          })}
        </section>

        {/* Quick Help Topics */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12" aria-labelledby="quick-help">
          <h2 id="quick-help" className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Help Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportTopics.map((topic, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleTopicClick(topic)}
                className="text-left p-4 border-2 border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors focus:ring-2 focus:ring-orange-500"
                aria-label={`Select help topic: ${topic.title}`}
              >
                <div className="text-3xl mb-2" aria-hidden="true">
                  {topic.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Click a topic to pre-fill the contact form below
          </p>
        </section>

        {/* Contact Form + Info */}
        <section className="grid md:grid-cols-2 gap-8 mb-12" aria-label="Contact form and company info">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            {submitted === "ok" && (
              <div
                className="mb-6 p-4 bg-green-100 border-2 border-green-300 rounded-lg text-green-800"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <div className="font-bold mb-1">Message sent successfully!</div>
                    <div className="text-sm">
                      We typically respond within 2-4 hours during business hours. 
                      Check your email (including spam folder) for our reply.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {submitted === "err" && (
              <div
                className="mb-6 p-4 bg-red-100 border-2 border-red-300 rounded-lg text-red-800"
                role="alert"
              >
                Sorry—something went wrong. Please try again or email us directly at support@swiftmonday.com.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Select a topic…</option>
                  <option value="transfer">Transfer Issue</option>
                  <option value="account">Account Help</option>
                  <option value="verification">Verification</option>
                  <option value="fees">Fees & Rates</option>
                  <option value="technical">Technical Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <span className={`text-xs ${formData.message.length > 1000 ? 'text-red-600 font-bold' : 'text-gray-500'}`}>
                    {formData.message.length}/1000
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={1000}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Tell us how we can help…"
                />
              </div>

              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-sm text-gray-700">
                <strong>Tip:</strong> For transfer-specific issues, include your transaction ID or
                reference number to help us assist you faster.
              </div>

              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
                <span>
                  I agree to the{" "}
                  <Link to="/privacy" className="text-orange-700 underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  loading ? "bg-orange-400 cursor-wait" : "bg-orange-600 hover:bg-orange-700"
                }`}
              >
                <Send size={20} />
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>

            <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600">
              Your information will only be used to respond to your inquiry.
              See our <Link to="/privacy" className="text-orange-600 underline">Privacy Policy</Link> for details.
            </div>
          </div>

          {/* Info Sidebar */}
          <aside className="space-y-6">
            {/* Support Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-orange-600" size={32} aria-hidden="true" />
                <h3 className="text-xl font-bold text-gray-900">Support Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between items-start">
                  <span className="font-semibold">Email Support:</span>
                  <span className="text-right">24/7 (2-4 hour response)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-semibold">Live Chat:</span>
                  <span className="text-right">Coming Q1 2026</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-semibold">Phone Support:</span>
                  <span className="text-right">Coming Q1 2026</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
                  <strong>Business Hours:</strong> Mon-Fri, 9am-6pm ET<br/>
                  <span className="text-xs">
                    Weekend responses may take longer. Urgent security issues are prioritized.
                  </span>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-orange-600" size={32} aria-hidden="true" />
                <h3 className="text-xl font-bold text-gray-900">Company Info</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <div>
                  <div className="font-semibold text-gray-900">SwiftMonday, Inc.</div>
                  <div className="text-sm">
                    A Massachusetts corporation
                  </div>
                  <div className="text-sm mt-1">
                    Remittance services are performed by licensed third-party providers.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a
                    href="mailto:support@swiftmonday.com"
                    className="text-orange-600 hover:underline"
                  >
                    support@swiftmonday.com
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Business Address</div>
                  <div className="text-sm">
                    [Your Registered Business Address - To Be Added]
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Help */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">🚨 Urgent Issue?</h3>
              <p className="text-sm text-red-700 mb-3">
                Contact security immediately if you:
              </p>
              <ul className="text-sm text-red-700 mb-3 space-y-1 list-disc list-inside">
                <li>Suspect unauthorized access to your account</li>
                <li>Notice a suspicious transaction</li>
                <li>Believe you've been targeted by a scam</li>
              </ul>
              <a
                href="mailto:security@swiftmonday.com"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
              >
                Email Security Team
              </a>
            </div>
          </aside>
        </section>

        {/* FAQ CTA */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h2>
          <p className="mb-6">Check out our FAQ—your answer might be there already.</p>
          <Link
            to="/faq"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            View FAQ
          </Link>
        </section>

        {/* Footer Links */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center">
          <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer links">
            <Link to="/how-it-works" className="text-orange-600 hover:underline">
              How It Works
            </Link>
            <Link to="/rates" className="text-orange-600 hover:underline">
              Rates &amp; Fees
            </Link>
            <Link to="/security" className="text-orange-600 hover:underline">
              Security
            </Link>
            <Link to="/terms" className="text-orange-600 hover:underline">
              Terms
            </Link>
            <Link to="/privacy" className="text-orange-600 hover:underline">
              Privacy
            </Link>
          </nav>
          <p className="mt-4 text-xs text-gray-500">Last updated: October 30, 2025</p>
        </footer>
        </div>
      </main>
    </div>
  );
};

export default Contact;