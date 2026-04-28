import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Now - Reserve Your Honda PCX125',
  description: 'Book your Honda PCX125 scooter rental in Estepona. €50/day with €500 refundable deposit. Easy online booking for Costa del Sol adventures.',
  openGraph: {
    title: 'Book Now | Solleo Moto Rent',
    description: 'Reserve your Honda PCX125 scooter rental in Estepona from €50/day.',
    images: ['/facebook-twitter-meta.jpg'],
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
