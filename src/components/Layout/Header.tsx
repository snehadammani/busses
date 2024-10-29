import React from 'react';
import { Link } from 'react-router-dom';
import { Bus } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Bus className="h-8 w-8 text-blue-400" />
            <span className="text-white font-bold text-xl">SVPCET Bus Tracker</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/routes" className="text-gray-300 hover:text-white transition-colors">
              Routes
            </Link>
            <Link to="/schedule" className="text-gray-300 hover:text-white transition-colors">
              Schedule
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}