import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus } from 'lucide-react';

export default function Home() {
  const [busNumber, setBusNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!busNumber.trim()) {
      setError('Please enter a bus number');
      return;
    }
    if (!/^[A-Z0-9]{2,6}$/.test(busNumber.toUpperCase())) {
      setError('Invalid bus number format');
      return;
    }
    navigate(`/track/${busNumber.toUpperCase()}`);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Bus className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">SVPCET Bus Tracker</h1>
          <p className="text-gray-400">Real-time tracking for college buses</p>
        </div>

        <form onSubmit={handleTrack} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={busNumber}
              onChange={(e) => {
                setBusNumber(e.target.value);
                setError('');
              }}
              placeholder="Enter Bus Number"
              className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {error && (
              <p className="absolute -bottom-6 left-0 text-red-400 text-sm">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Bus className="w-5 h-5" />
            Track Bus
          </button>
        </form>
      </div>
    </div>
  );
}