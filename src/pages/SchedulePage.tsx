import React from 'react';

export default function SchedulePage() {
  const schedule = [
    {
      id: 1,
      busNumber: 'BUS001',
      route: 'Route 1',
      departureTime: '7:30 AM',
      returnTime: '4:30 PM',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    {
      id: 2,
      busNumber: 'BUS002',
      route: 'Route 2',
      departureTime: '7:45 AM',
      returnTime: '4:45 PM',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    // Add more schedules as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Bus Schedule</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-4 px-6 text-gray-400">Bus Number</th>
              <th className="py-4 px-6 text-gray-400">Route</th>
              <th className="py-4 px-6 text-gray-400">Departure</th>
              <th className="py-4 px-6 text-gray-400">Return</th>
              <th className="py-4 px-6 text-gray-400">Operating Days</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item) => (
              <tr key={item.id} className="border-b border-gray-700">
                <td className="py-4 px-6 text-white">{item.busNumber}</td>
                <td className="py-4 px-6 text-white">{item.route}</td>
                <td className="py-4 px-6 text-white">{item.departureTime}</td>
                <td className="py-4 px-6 text-white">{item.returnTime}</td>
                <td className="py-4 px-6 text-white">{item.days.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}