import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Solleo Moto Rent - Honda PCX125 Scooter Rentals in Estepona, Málaga",
    template: "%s | Solleo Moto Rent"
  },
  description: "Rent premium Honda PCX125 scooters in Estepona, Málaga from €50/day. 6 scooters available with €500 refundable deposit. Explore Costa del Sol with Solleo Moto Rent.",
  keywords: ["motorcycle rental", "scooter rental", "Honda PCX125", "Estepona", "Málaga", "Costa del Sol", "bike rental", "moto rent", "Spain scooter rental"],
  authors: [{ name: "Solleo Moto Rent" }],
  creator: "Solleo Moto Rent",
  publisher: "Solleo Moto Rent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://solleomotorent.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Solleo Moto Rent - Honda PCX125 Scooter Rentals in Estepona",
    description: "Rent premium Honda PCX125 scooters in Estepona, Málaga from €50/day. Experience the freedom of the open road.",
    url: 'https://solleomotorent.com',
    siteName: 'Solleo Moto Rent',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/facebook-twitter-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Solleo Moto Rent - Honda PCX125 Scooter Rentals in Estepona, Málaga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solleo Moto Rent - Honda PCX125 Scooter Rentals',
    description: 'Rent premium Honda PCX125 scooters in Estepona, Málaga from €50/day.',
    images: ['/facebook-twitter-meta.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#092038" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Solleo Moto" />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollAnimations />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
