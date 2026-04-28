import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fleet - Honda PCX125 Scooters',
  description: '6 Honda PCX125 scooters available for rent in Estepona. 125cc engine, automatic transmission, ABS brakes, fuel efficient. Perfect for exploring Costa del Sol.',
  openGraph: {
    title: 'Our Fleet - Honda PCX125 Scooters | Solleo Moto Rent',
    description: '6 Honda PCX125 scooters available for rent in Estepona.',
    images: ['/facebook-twitter-meta.jpg'],
  },
};

const bikes = [
  {
    id: 1,
    name: 'Honda PCX125',
    description: 'Perfect for city commuting and easy riding with excellent fuel efficiency',
    features: ['125cc Engine', 'Automatic Transmission', 'Under-Seat Storage', 'Fuel Efficient', 'ABS Brakes', 'Digital Display'],
    available: 6,
  },
];

export default function Fleet() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
          <p className="text-xl text-blue-100">
            6 Honda PCX125 scooters available for rent
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="bg-white rounded-lg shadow-xl overflow-hidden mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-square lg:h-auto bg-gray-100">
                <Image
                  src="/motorbike.jpg"
                  alt="Honda PCX125 Scooter"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-700">{bike.name}</h3>
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-green-100 text-green-800">
                    {bike.available} Available
                  </span>
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{bike.description}</p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Features & Specifications:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {bike.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-blue-700">€50</span>
                    <span className="text-xl text-gray-600 ml-2">/day</span>
                    <span className="ml-4 text-sm text-gray-500">+ €500 refundable deposit</span>
                  </div>

                  <Link
                    href="/booking"
                    className="block w-full md:w-auto md:inline-block bg-yellow-400 text-blue-700 font-bold py-4 px-8 rounded-md hover:bg-yellow-500 transition-colors text-center text-lg"
                  >
                    Book Your Honda PCX125 Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            All Rentals Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <svg
                className="w-12 h-12 text-yellow-400 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="font-semibold text-blue-700">Full Insurance</h3>
              <p className="text-sm text-gray-600">Comprehensive coverage included</p>
            </div>
            <div>
              <svg
                className="w-12 h-12 text-yellow-400 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <h3 className="font-semibold text-blue-700">Safety Gear</h3>
              <p className="text-sm text-gray-600">Helmet and protective equipment</p>
            </div>
            <div>
              <svg
                className="w-12 h-12 text-yellow-400 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <h3 className="font-semibold text-blue-700">24/7 Support</h3>
              <p className="text-sm text-gray-600">Roadside assistance available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
