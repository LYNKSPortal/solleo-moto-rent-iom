export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl text-blue-100">
            Last updated: April 28, 2026
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Overview</h2>
            <p className="mb-4">
              At Solleo Moto Rent, we strive to provide excellent service. This Refund Policy outlines the terms and conditions 
              for cancellations and refunds of Honda PCX125 scooter rentals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Cancellation Policy</h2>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Cancellations More Than 48 Hours Before Rental</h3>
            <p className="mb-4">
              If you cancel your reservation more than 48 hours before the scheduled pickup time, you will receive a 
              <strong> 100% refund</strong> of the rental fee. The refund will be processed within 5-7 business days.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-3">Cancellations 24-48 Hours Before Rental</h3>
            <p className="mb-4">
              If you cancel your reservation between 24 and 48 hours before the scheduled pickup time, you will receive a 
              <strong> 50% refund</strong> of the rental fee. The remaining 50% will be retained as a cancellation fee.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-3">Cancellations Less Than 24 Hours Before Rental</h3>
            <p className="mb-4">
              If you cancel your reservation less than 24 hours before the scheduled pickup time, or if you fail to show up 
              for your reservation (no-show), <strong>no refund</strong> will be provided. The full rental fee will be retained.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">3. Security Deposit Refund</h2>
            <p className="mb-4">
              The €500 security deposit is separate from the rental fee and is fully refundable, subject to the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The scooter is returned on time</li>
              <li>The scooter is returned in the same condition as when rented (normal wear and tear excepted)</li>
              <li>No damage has occurred to the scooter</li>
              <li>No traffic violations or fines were incurred during the rental period</li>
              <li>The fuel tank is at the same level as when the scooter was picked up</li>
            </ul>
            <p className="mt-4">
              The security deposit will be released within 7-10 business days after the scooter is returned and inspected. 
              If deductions are necessary, you will be notified via email with a detailed explanation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">4. Deductions from Security Deposit</h2>
            <p className="mb-4">
              The security deposit may be used to cover:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Damage:</strong> Repair costs for any damage to the scooter</li>
              <li><strong>Missing Items:</strong> Replacement cost for missing accessories (helmet, keys, documents)</li>
              <li><strong>Cleaning:</strong> Excessive cleaning fees if the scooter is returned excessively dirty</li>
              <li><strong>Late Return:</strong> €25 per hour for late returns, up to one full day's rental rate</li>
              <li><strong>Traffic Violations:</strong> Any fines or penalties incurred during the rental period</li>
              <li><strong>Fuel:</strong> Cost to refuel if returned with less fuel than provided</li>
            </ul>
            <p className="mt-4">
              If the total cost of damages or fees exceeds the security deposit, you will be invoiced for the additional amount.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">5. Cancellations by Solleo Moto Rent</h2>
            <p className="mb-4">
              In rare circumstances, we may need to cancel your reservation due to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mechanical issues with the scooter</li>
              <li>Unforeseen circumstances or force majeure events</li>
              <li>Safety concerns</li>
            </ul>
            <p className="mt-4">
              If we cancel your reservation, you will receive a <strong>100% refund</strong> of all fees paid, including the 
              rental fee and security deposit. We will notify you as soon as possible and assist you in finding alternative arrangements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">6. Modifications to Reservations</h2>
            <p className="mb-4">
              If you need to modify your reservation (change dates, extend rental period, etc.), please contact us as soon as possible:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>More than 48 hours before pickup:</strong> Free modification, subject to availability</li>
              <li><strong>24-48 hours before pickup:</strong> Modification fee of €25 may apply</li>
              <li><strong>Less than 24 hours before pickup:</strong> Treated as a cancellation and new booking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">7. Early Returns</h2>
            <p className="mb-4">
              If you return the scooter earlier than the agreed rental period, no refund will be provided for the unused days. 
              The full rental fee for the booked period will be charged.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">8. Rental Extensions</h2>
            <p className="mb-4">
              If you wish to extend your rental period, please contact us at least 24 hours before your scheduled return time. 
              Extensions are subject to availability and will be charged at the standard daily rate of €50 per day.
            </p>
            <p className="mb-4">
              Unauthorized extensions (keeping the scooter beyond the agreed return time without prior approval) will incur 
              late fees of €25 per hour.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">9. Weather-Related Cancellations</h2>
            <p className="mb-4">
              Weather conditions do not qualify for special cancellation terms. Standard cancellation policies apply regardless 
              of weather forecasts. We recommend purchasing travel insurance if you are concerned about weather-related cancellations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">10. Refund Processing</h2>
            <p className="mb-4">
              All approved refunds will be processed using the original payment method. Please allow:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Rental fee refunds:</strong> 5-7 business days</li>
              <li><strong>Security deposit refunds:</strong> 7-10 business days after scooter return and inspection</li>
            </ul>
            <p className="mt-4">
              Depending on your bank or credit card company, it may take an additional 3-5 business days for the refund 
              to appear in your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">11. Disputes</h2>
            <p className="mb-4">
              If you disagree with any deductions from your security deposit or have concerns about a refund, please contact 
              us within 14 days of the transaction. We will review your case and provide a detailed explanation.
            </p>
            <p className="mb-4">
              We aim to resolve all disputes amicably. If a resolution cannot be reached, the matter will be subject to the 
              dispute resolution process outlined in our Terms & Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">12. How to Cancel</h2>
            <p className="mb-4">
              To cancel your reservation, please contact us:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li><strong>Email:</strong> support@solleomotorent.com (include your booking reference number)</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            </ul>
            <p className="mt-4">
              Cancellations must be confirmed by us in writing (email). The cancellation time is based on when we receive 
              and confirm your cancellation request, not when you send it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">13. Changes to This Policy</h2>
            <p className="mb-4">
              Solleo Moto Rent reserves the right to modify this Refund Policy at any time. Changes will be effective 
              immediately upon posting to our website. Your continued use of our services after changes are posted constitutes 
              acceptance of the modified policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">14. Contact Information</h2>
            <p className="mb-4">
              For questions about this Refund Policy or to request a refund, please contact us:
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
