export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in motorcycle adventures
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Solleo Moto Rent was founded with a simple mission: to provide riders
            with access to reliable, fuel-efficient scooters for city exploration and unforgettable riding experiences. We believe that
            the freedom of the open road should be accessible to everyone, whether you're a
            seasoned rider or just starting your two-wheeled journey.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our fleet consists of 6 carefully maintained Honda PCX125 scooters, perfect for
            city commuting and exploring. The Honda PCX125 is known for its reliability,
            fuel efficiency, and ease of use, making it ideal for both experienced riders and beginners.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With transparent pricing, comprehensive insurance, and 24/7 support, we ensure that
            your rental experience is smooth, safe, and enjoyable from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide safe, reliable, and affordable Honda PCX125 scooter rentals that create
              lasting memories for riders of all skill levels.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To become the leading scooter rental service, known for exceptional customer
              service, quality Honda PCX125 scooters, and transparent business practices.
            </p>
          </div>
        </div>

        <div className="bg-blue-700 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Why Riders Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Premium Fleet</h4>
                <p className="text-blue-100 text-sm">
                  All 6 Honda PCX125 scooters are regularly serviced and maintained to the highest standards
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Transparent Pricing</h4>
                <p className="text-blue-100 text-sm">
                  No hidden fees - €50/day plus a fully refundable €500 deposit that covers most damages
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Full Insurance</h4>
                <p className="text-blue-100 text-sm">
                  Comprehensive coverage included with every rental
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">24/7 Support</h4>
                <p className="text-blue-100 text-sm">
                  Round-the-clock assistance and roadside support
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Flexible Terms</h4>
                <p className="text-blue-100 text-sm">
                  Rent for a day, a week, or longer - we accommodate your schedule
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Safety First</h4>
                <p className="text-blue-100 text-sm">
                  All rentals include helmet and safety gear at no extra cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
