'use client';

import BookingForm from '@/components/BookingForm';

export default function Booking() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Ride</h1>
          <p className="text-xl text-blue-100">
            Fill out the form below to reserve your motorcycle
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BookingForm />

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Rental Information</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-blue-700 mb-2">Pricing</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Daily rental rate: €50 per bike</li>
                <li>• Refundable deposit: €500 (covers most damages, returned upon bike return in good condition)</li>
                <li>• All prices include comprehensive insurance and safety gear</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-blue-700 mb-2">Requirements</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Valid motorcycle license required</li>
                <li>• Minimum age: 21 years old</li>
                <li>• Valid ID and proof of address</li>
                <li>• Credit card for deposit</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-blue-700 mb-2">What's Included</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Comprehensive insurance coverage</li>
                <li>• Helmet and safety gear</li>
                <li>• 24/7 roadside assistance</li>
                <li>• Basic maintenance and support</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-blue-700 mb-2">Cancellation Policy</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Free cancellation up to 48 hours before rental start</li>
                <li>• 50% refund for cancellations within 24-48 hours</li>
                <li>• No refund for cancellations within 24 hours</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-blue-700 mb-2">Booking Process</h3>
              <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                <li>Submit your booking request using the form above</li>
                <li>We'll contact you within 24 hours to confirm availability</li>
                <li>Complete the rental agreement and payment</li>
                <li>Pick up your bike and start your adventure!</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Need Help?</h3>
              <p className="text-gray-700 text-sm">
                If you have any questions about the booking process or our rental terms,
                please don't hesitate to contact us. Our team is here to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
