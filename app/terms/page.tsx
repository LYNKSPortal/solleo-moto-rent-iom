import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Rental Agreement',
  description: 'Read Solleo Moto Rent terms and conditions for Honda PCX125 scooter rentals in Estepona. Rental terms, payment, deposit, insurance, and liability information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-blue-100">
            Last updated: April 28, 2026
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using Solleo Moto Rent's services, you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Rental Requirements</h2>
            <p className="mb-4">To rent a Honda PCX125 scooter from Solleo Moto Rent, you must:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Be at least 21 years of age</li>
              <li>Hold a valid motorcycle license or equivalent</li>
              <li>Provide valid government-issued identification</li>
              <li>Provide proof of address</li>
              <li>Have a valid credit card for the security deposit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">3. Rental Rates and Payment</h2>
            <p className="mb-4">
              The rental rate is €50 per day. A refundable security deposit of €500 is required at the time of rental. 
              The deposit will be returned upon safe return of the scooter in good condition.
            </p>
            <p className="mb-4">
              Payment must be made in full at the time of booking confirmation. We accept major credit cards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">4. Security Deposit</h2>
            <p className="mb-4">
              A security deposit of €500 is required and covers most damages. The deposit will be held on your credit card 
              and released within 7-10 business days after the scooter is returned in good condition.
            </p>
            <p className="mb-4">
              Deductions from the deposit may be made for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Damage to the scooter</li>
              <li>Missing parts or accessories</li>
              <li>Excessive cleaning required</li>
              <li>Traffic violations or fines incurred during rental period</li>
              <li>Late return fees</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">5. Insurance Coverage</h2>
            <p className="mb-4">
              All rentals include comprehensive insurance coverage. However, the renter is responsible for the security deposit 
              amount in case of damage or loss. Insurance does not cover:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Damage caused by reckless or negligent operation</li>
              <li>Damage caused while under the influence of alcohol or drugs</li>
              <li>Theft due to negligence (e.g., leaving keys in the scooter)</li>
              <li>Personal belongings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">6. Rental Period and Returns</h2>
            <p className="mb-4">
              The rental period begins at the time of pickup and ends at the agreed return time. Late returns will incur 
              additional charges of €25 per hour, up to a maximum of one full day's rental rate.
            </p>
            <p className="mb-4">
              The scooter must be returned to our location at Pasaje Colina del Mirador 19, Unit 4, 29680 Estepona, Málaga, Spain.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">7. Use of the Scooter</h2>
            <p className="mb-4">The renter agrees to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Operate the scooter in accordance with all traffic laws and regulations</li>
              <li>Not allow any unauthorized person to operate the scooter</li>
              <li>Not use the scooter for racing, competitions, or illegal activities</li>
              <li>Not operate the scooter while under the influence of alcohol or drugs</li>
              <li>Wear appropriate safety gear, including the provided helmet</li>
              <li>Perform basic daily checks (tire pressure, oil, brakes)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">8. Maintenance and Breakdowns</h2>
            <p className="mb-4">
              If the scooter breaks down due to mechanical failure (not caused by misuse), contact us immediately at 
              +1 (555) 123-4567. We provide 24/7 roadside assistance.
            </p>
            <p className="mb-4">
              Do not attempt repairs yourself. Unauthorized repairs will void insurance coverage and you may be held liable 
              for damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">9. Accidents and Damage</h2>
            <p className="mb-4">
              In case of an accident, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact local authorities and obtain a police report</li>
              <li>Notify Solleo Moto Rent immediately</li>
              <li>Not admit fault or liability</li>
              <li>Collect contact and insurance information from other parties involved</li>
              <li>Take photos of the damage and accident scene if safe to do so</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">10. Cancellation Policy</h2>
            <p className="mb-4">
              Please refer to our Refund Policy for detailed cancellation terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">11. Liability</h2>
            <p className="mb-4">
              Solleo Moto Rent is not liable for any personal injury, property damage, or loss incurred during the rental period. 
              The renter assumes all risks associated with operating the scooter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">12. Modifications to Terms</h2>
            <p className="mb-4">
              Solleo Moto Rent reserves the right to modify these terms at any time. Changes will be effective immediately 
              upon posting to our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">13. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of Spain. Any disputes will be resolved in the courts of Málaga, Spain.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">14. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms & Conditions, please contact us:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li>Email: support@solleomotorent.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: Pasaje Colina del Mirador 19, Unit 4, 29680 Estepona, Málaga, Spain</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
