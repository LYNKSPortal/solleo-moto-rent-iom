# Solleo Moto Rent 🛵

A modern, responsive Honda PCX125 scooter rental website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage with Hero Section**: Eye-catching hero with integrated booking form
- **Booking System**: Interactive booking form with automatic price calculation
  - €50/day rental rate
  - €500 refundable deposit (covers most damages)
  - Date selection with validation
  - Honda PCX125 selection
- **Fleet Page**: Showcase of 6 available Honda PCX125 scooters with detailed specifications
- **About Page**: Company information and mission statement
- **Contact Page**: Contact form with business information
- **Responsive Design**: Mobile-first design that works on all devices
- **Custom Color Palette**: Blue, yellow, and white theme throughout

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd solleo-moto-rent
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
solleo-moto-rent/
├── app/
│   ├── about/          # About page
│   ├── booking/        # Booking page
│   ├── contact/        # Contact page
│   ├── fleet/          # Fleet showcase page
│   ├── globals.css     # Global styles with custom color palette
│   ├── layout.tsx      # Root layout with Navbar and Footer
│   └── page.tsx        # Homepage with hero and booking form
├── components/
│   ├── BookingForm.tsx # Reusable booking form component
│   ├── Footer.tsx      # Site footer
│   └── Navbar.tsx      # Navigation bar with mobile menu
└── public/             # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Rental Information

- **Daily Rate**: €50 per scooter
- **Deposit**: €500 (refundable, covers most damages)
- **Fleet Size**: 6 Honda PCX125 scooters available
- **Model**: Honda PCX125 - 125cc automatic scooter

## Pages

1. **Home** (`/`) - Hero section with booking form and features
2. **Fleet** (`/fleet`) - All available motorcycles with specifications
3. **About** (`/about`) - Company story and mission
4. **Contact** (`/contact`) - Contact form and business information
5. **Booking** (`/booking`) - Dedicated booking page with rental details

## Customization

The color palette can be customized in `app/globals.css`:
- Primary Blue: `#1e40af`
- Yellow Accent: `#fbbf24`
- Dark Blue: `#1e3a8a`

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/solleo-moto-rent)

## License

This project is open source and available under the MIT License.
