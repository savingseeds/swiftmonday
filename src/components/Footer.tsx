import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SwiftMonday</h3>
            <p className="text-gray-400 mb-4">
              Fast, secure, and affordable money transfers from USA to Philippines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Send Money
                </Link>
              </li>
              <li>
                <Link to="/rates" className="text-gray-400 hover:text-white transition">
                  Exchange Rates
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-gray-400 hover:text-white transition">
                  Track Transfer
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal - IMPORTANT FOR TRANSAK APPROVAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>support@swiftmonday.com</div>
                  <div className="text-sm">Available 24/7</div>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>1-800-SWIFT-MN</div>
                  <div className="text-sm">Mon-Sat, 9AM-6PM PST</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SwiftMonday. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Platform connecting you with licensed partners</span>
            </div>
          </div>

          {/* Compliance Notice */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs text-center">
              SwiftMonday is a software platform that connects you with licensed and regulated payment service providers.
              All regulated financial activities are performed by our licensed partners under their own regulatory frameworks.
              Your funds are secure and your information is protected with bank-level encryption.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;