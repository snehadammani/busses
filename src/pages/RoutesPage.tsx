import React from 'react';

export default function RoutesPage() {
  const routes = [
    {
      id: 1,
      name: 'Route 1',
      stops: ['Hingna T Point', 'Hingna MIDC', 'Wanadongri', 'SVPCET'],
      timing: '7:30 AM - 8:30 AM',
    },
    {
      id: 2,
      name: 'Route 2',
      stops: ['Pratap Nagar', 'Trimurti Nagar', 'Narendra Nagar', 'SVPCET'],
      timing: '7:45 AM - 8:45 AM',
    },
    // Add more routes as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Bus Routes</h1>
      <div className="grid gap-6">
        {routes.map((route) => (
          <div key={route.id} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">{route.name}</h2>
            <p className="text-gray-400 mb-2">Timing: {route.timing}</p>
            <div className="space-y-2">
              <p className="text-gray-400">Stops:</p>
              <div className="flex items-center">
                {route.stops.map((stop, index) => (
                  <React.Fragment key={stop}>
                    <span className="text-white">{stop}</span>
                    {index < route.stops.length - 1 && (
                      <span className="text-gray-500 mx-2">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}