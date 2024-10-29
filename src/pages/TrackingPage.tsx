import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BusMap from '../components/Map/BusMap';
import LiveStatus from '../components/BusInfo/LiveStatus';

// Mock data - In production, this would come from your backend
const MOCK_BUS_DATA = {
  location: [21.008629, 79.043297], // SVPCET coordinates
  speed: 45,
  nextStop: 'SVPCET',
  eta: '10 minutes',
  route: 'Hingna T Point - SVPCET',
};

export default function TrackingPage() {
  const { busNumber } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [busData, setBusData] = useState(MOCK_BUS_DATA);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-white mt-4">Loading bus location...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)]">
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => navigate('/')}
              className="text-white flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <h1 className="text-white text-xl font-semibold">Bus {busNumber}</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 h-[500px] lg:h-[600px]">
              <BusMap location={busData.location} busNumber={busNumber || ''} />
            </div>
            <div>
              <LiveStatus busData={busData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}