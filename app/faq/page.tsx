import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Frequently asked questions about renting Honda PCX125 scooters in Estepona, Spain. Learn about driving rules, insurance, breakdowns, and more.',
  openGraph: {
    title: 'FAQ | Solleo Moto Rent',
    description: 'Get answers to common questions about scooter rentals in Estepona, Spain.',
    images: ['/facebook-twitter-meta.jpg'],
  },
};

export default function FAQ() {
  const faqs = [
    {
      question: "What side of the road do they drive on in Spain?",
      answer: "In Spain, you drive on the RIGHT side of the road, just like in most of continental Europe and the United States. The driver's seat is on the left side of the vehicle. This is important to remember, especially at roundabouts where you go counterclockwise."
    },
    {
      question: "What do I need to rent a scooter?",
      answer: "You'll need a valid driver's license (motorcycle license or car license for 125cc scooters), a valid ID or passport, and a credit/debit card for the €500 refundable deposit. You must be at least 18 years old. International visitors should bring their International Driving Permit (IDP) along with their home country license."
    },
    {
      question: "What happens if the scooter breaks down?",
      answer: "If you experience any mechanical issues, contact us immediately at +1 (555) 123-4567. Do not attempt to repair the scooter yourself. We'll arrange for roadside assistance or a replacement scooter. If the breakdown is due to mechanical failure (not rider error), there will be no additional charges. Keep the scooter in a safe location and wait for our assistance."
    },
    {
      question: "What should I do if I get pulled over by police?",
      answer: "Remain calm and polite. Pull over safely when signaled. Have your driver's license, rental agreement, and insurance documents ready (we provide these with the scooter). Spanish police may ask for your passport/ID as well. If there's a language barrier, our contact number is on the rental agreement and we can help translate. Always wear your helmet and follow all traffic laws to avoid being stopped."
    },
    {
      question: "Is insurance included in the rental price?",
      answer: "Yes, basic third-party liability insurance is included in the rental price. This covers damage to other people and property. However, you are responsible for any damage to the rented scooter. We strongly recommend purchasing additional collision damage waiver (CDW) insurance for extra protection, which can be added at the time of booking."
    },
    {
      question: "What happens if I have an accident?",
      answer: "First, ensure everyone's safety and call emergency services if needed (112 in Spain). Then contact us immediately. Do not leave the scene. Take photos of any damage and get contact information from other parties involved. File a police report (denuncia) if there's significant damage or injuries. We'll guide you through the insurance claim process. You may be liable for the repair costs up to the deposit amount unless you have CDW insurance."
    },
    {
      question: "Can I ride the scooter outside of Estepona?",
      answer: "Yes, you can ride anywhere within mainland Spain. However, you cannot take the scooter to Portugal, Gibraltar, or on ferries to other countries without prior written permission. The scooter must be returned to our Estepona location. If you plan extensive travel, please inform us so we can ensure you have the proper documentation."
    },
    {
      question: "Do I need to refuel the scooter before returning it?",
      answer: "Yes, please return the scooter with a full tank of fuel. The Honda PCX125 uses regular unleaded petrol (gasolina). If you return it without a full tank, we'll charge a refueling fee of €20 plus the cost of fuel. Gas stations (gasolineras) are easy to find throughout the area."
    },
    {
      question: "What are the helmet and safety requirements?",
      answer: "Wearing a helmet is mandatory by law in Spain for all riders and passengers. We provide high-quality helmets with each rental at no extra charge. You must wear the helmet at all times while riding. We also recommend wearing protective clothing, closed-toe shoes, and sunglasses or goggles. Riding under the influence of alcohol or drugs is strictly prohibited and illegal."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "You can cancel your reservation up to 48 hours before the rental start time for a full refund. Cancellations made less than 48 hours before the start time will forfeit 50% of the rental fee. No-shows or cancellations on the day of rental are non-refundable. The €500 security deposit is fully refundable upon return of the scooter in good condition with no damage. Please see our full Refund Policy page for complete details."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Everything you need to know about renting with us
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                {index + 1}. {faq.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-400 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Still have questions?
          </h3>
          <p className="text-blue-700 mb-6">
            Can't find the answer you're looking for? Please contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+15551234567"
              className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
