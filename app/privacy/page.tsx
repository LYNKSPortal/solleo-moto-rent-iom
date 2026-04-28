import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection',
  description: 'Solleo Moto Rent privacy policy. Learn how we collect, use, and protect your personal information for scooter rentals in Estepona, Málaga.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Last updated: April 28, 2026
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Solleo Moto Rent ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our scooter rental services and website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Personal Information</h3>
            <p className="mb-4">We collect personal information that you provide to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Physical address</li>
              <li>Date of birth</li>
              <li>Driver's license information</li>
              <li>Payment card information</li>
              <li>Government-issued ID details</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-700 mb-3">Rental Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Rental dates and times</li>
              <li>Scooter usage data</li>
              <li>GPS location data (if applicable)</li>
              <li>Accident or incident reports</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-700 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and manage your scooter rental bookings</li>
              <li>Verify your identity and eligibility to rent</li>
              <li>Process payments and refunds</li>
              <li>Communicate with you about your rental</li>
              <li>Provide customer support</li>
              <li>Send you booking confirmations and receipts</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">4. How We Share Your Information</h2>
            <p className="mb-4">We may share your information with:</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Service Providers</h3>
            <p className="mb-4">
              We share information with third-party service providers who perform services on our behalf, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Payment processors</li>
              <li>Insurance providers</li>
              <li>IT service providers</li>
              <li>Customer support platforms</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-700 mb-3">Legal Requirements</h3>
            <p className="mb-4">
              We may disclose your information if required by law or in response to valid requests by public authorities 
              (e.g., court orders, law enforcement).
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-3">Business Transfers</h3>
            <p className="mb-4">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encryption of sensitive data</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law. Rental records are typically retained for 7 years 
              for tax and legal purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">7. Your Rights</h2>
            <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Erasure:</strong> Request deletion of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Object:</strong> Object to processing of your information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at support@solleomotorent.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small 
              files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">9. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these 
              external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">10. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for individuals under 21 years of age. We do not knowingly collect personal 
              information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">11. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">13. Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us:
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
