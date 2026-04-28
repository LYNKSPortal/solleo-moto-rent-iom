'use client';

import { useState } from 'react';

interface BikeOption {
  id: number;
  name: string;
  available: number;
}

const bikes: BikeOption[] = [
  { id: 1, name: 'Honda PCX125', available: 6 },
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bikeType: '',
    startDate: '',
    endDate: '',
    quantity: 1,
  });

  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = (start: string, end: string, quantity: number) => {
    if (!start || !end) return 0;
    
    const startDate = new Date(start);
    const endDate = new Date(end);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (days <= 0) return 0;
    
    const rentalCost = days * 50 * quantity;
    const deposit = 500;
    return rentalCost + deposit;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    if (name === 'startDate' || name === 'endDate' || name === 'quantity') {
      const cost = calculateCost(
        newFormData.startDate,
        newFormData.endDate,
        Number(newFormData.quantity)
      );
      setTotalCost(cost);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking submitted!\n\nName: ${formData.name}\nBike: ${formData.bikeType}\nTotal Cost: €${totalCost}\n\nWe'll contact you shortly to confirm your reservation.`);
  };

  const getDays = () => {
    if (!formData.startDate || !formData.endDate) return 0;
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
        Book Your Ride
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-blue-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="bikeType" className="block text-sm font-medium text-blue-700 mb-1">
              Bike Type *
            </label>
            <select
              id="bikeType"
              name="bikeType"
              required
              value={formData.bikeType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a bike</option>
              {bikes.map((bike) => (
                <option key={bike.id} value={bike.name}>
                  {bike.name} ({bike.available} available)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-blue-700 mb-1">
              Start Date *
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              required
              value={formData.startDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-blue-700 mb-1">
              End Date *
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              required
              value={formData.endDate}
              onChange={handleInputChange}
              min={formData.startDate || new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {formData.startDate && formData.endDate && getDays() > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-4">
            <div className="text-sm text-blue-700 space-y-1">
              <p><strong>Rental Duration:</strong> {getDays()} day(s)</p>
              <p><strong>Daily Rate:</strong> €50 per bike</p>
              <p><strong>Rental Cost:</strong> €{getDays() * 50 * formData.quantity}</p>
              <p><strong>Deposit:</strong> €500</p>
              <p className="text-lg font-bold text-blue-700 mt-2 pt-2 border-t border-blue-300">
                Total: €{totalCost}
              </p>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 text-blue-700 font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors text-lg mt-6"
        >
          Submit Booking Request
        </button>

        <p className="text-xs text-gray-600 text-center mt-2">
          * All fields are required. The €500 deposit is refundable upon return of the bike in good condition and covers most damages.
        </p>
      </form>
    </div>
  );
}
