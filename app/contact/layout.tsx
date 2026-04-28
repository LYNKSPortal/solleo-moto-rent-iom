import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Solleo Moto Rent in Estepona, Málaga. Email: support@solleomotorent.com, Phone: +1 (555) 123-4567. Located at Pasaje Colina del Mirador 19, Unit 4.',
  openGraph: {
    title: 'Contact Us | Solleo Moto Rent',
    description: 'Get in touch with Solleo Moto Rent for scooter rentals in Estepona.',
    images: ['/facebook-twitter-meta.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
