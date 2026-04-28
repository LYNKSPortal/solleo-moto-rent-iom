import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gift Cards - Give the Gift of Freedom',
  description: 'Purchase Solleo Moto Rent gift cards. Perfect for motorcycle enthusiasts. Available in £50, £100, £200, and £500 denominations.',
  openGraph: {
    title: 'Gift Cards | Solleo Moto Rent',
    description: 'Give the gift of freedom with Solleo Moto Rent gift cards.',
    images: ['/facebook-twitter-meta.jpg'],
  },
};

export default function GiftCards() {
  const giftCards = [
    {
      amount: 50,
      description: 'Perfect for a day rental',
      features: ['1 Day Rental', 'Valid for 12 months', 'Transferable']
    },
    {
      amount: 100,
      description: 'Great for a weekend adventure',
      features: ['2 Day Rental', 'Valid for 12 months', 'Transferable']
    },
    {
      amount: 200,
      description: 'Ideal for extended trips',
      features: ['4 Day Rental + 1 Bonus Day', 'Valid for 12 months', 'Transferable']
    },
    {
      amount: 500,
      description: 'Ultimate riding experience',
      features: ['10 Day Rental + 2 Bonus Days', 'Valid for 12 months', 'Transferable']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gift Cards</h1>
          <p className="text-xl text-blue-100">
            Give the gift of freedom and adventure on two wheels
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            The Perfect Gift for Motorcycle Enthusiasts
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Surprise your loved ones with the freedom to explore Estepona and the Costa del Sol 
            on a premium Honda PCX125 scooter. Our gift cards never expire and can be used for any rental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {giftCards.map((card) => (
            <div 
              key={card.amount}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={`/gift-cards/${card.amount}.jpg`}
                  alt={`£${card.amount} Gift Card`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className="block w-full bg-yellow-400 text-blue-700 text-center px-6 py-3 rounded-md font-bold hover:bg-yellow-500 transition-colors"
                >
                  Purchase Gift Card
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-6">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-blue-700 mb-2">Purchase</h4>
              <p className="text-gray-700">
                Contact us to purchase a gift card in your desired amount
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-blue-700 mb-2">Receive</h4>
              <p className="text-gray-700">
                Get your digital or physical gift card with a unique code
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-blue-700 mb-2">Redeem</h4>
              <p className="text-gray-700">
                Use the gift card code when booking your motorcycle rental
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Gift Card Terms</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Gift cards are valid for 12 months from the date of purchase</li>
            <li>• Can be used for any motorcycle rental at Solleo Moto Rent</li>
            <li>• Gift cards are transferable and make great gifts</li>
            <li>• Cannot be redeemed for cash</li>
            <li>• If rental cost exceeds gift card value, the difference must be paid</li>
            <li>• If rental cost is less than gift card value, the remaining balance stays on the card</li>
            <li>• Lost or stolen gift cards cannot be replaced</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Ready to Give the Gift of Adventure?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Contact us today to purchase a gift card
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+15551234567"
              className="bg-yellow-400 text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              Call +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
