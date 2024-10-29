import React from 'react';
import { Navigation2, Clock, MapPin, Route } from 'lucide-react';

interface BusData {
  speed: number;
  nextStop: string;
  eta: string;
  route: string;
}

interface LiveStatusProps {
  busData: BusData;
}

export default function LiveStatus({ busData }: LiveStatusProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
        <Navigation2 className="w-5 h-5 text-blue-400" />
        Live Status
      </h2>
      <div className="space-y-4">
        <StatusItem
          icon={<Route className="w-5 h-5 text-blue-400" />}
          label="Current Speed"
          value={`${busData.speed} km/h`}
        />
        <StatusItem
          icon={<MapPin className="w-5 h-5 text-blue-400" />}
          label="Next Stop"
          value={busData.nextStop}
        />
        <StatusItem
          icon={<Clock className="w-5 h-5 text-blue-400" />}
          label="ETA"
          value={busData.eta}
        />
        <StatusItem
          icon={<Route className="w-5 h-5 text-blue-400" />}
          label="Route"
          value={busData.route}
        />
      </div>
    </div>
  );
}

interface StatusItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatusItem({ icon, label, value }: StatusItemProps) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  );
}