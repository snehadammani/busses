import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 123-456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>transport@svpcet.edu.in</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Address</h3>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>SVPCET Campus, Hingna Road, Nagpur, Maharashtra</span>
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/routes" className="hover:text-white transition-colors">Bus Routes</a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-white transition-colors">Time Table</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© {new Date().getFullYear()} SVPCET Bus Tracking System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}