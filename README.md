# Calculator World

A minimalist, powerful calculator application built with Next.js, TypeScript, and Tailwind CSS. Designed for North American and European markets with multi-language support and ad monetization.

## Features

### Core Features
- **Basic Calculator**: Addition, subtraction, multiplication, division
- **Scientific Calculator**: Trigonometric functions, logarithms, powers, and more
- **Unit Converter**: Length, weight, temperature, area, and volume conversions
- **Calculation History**: Local storage based history with one-click clear
- **Multi-language Support**: English, Spanish, French, German

### Design
- **Minimalist UI**: Clean, simple interface inspired by Notion and Linear
- **Soft Color Scheme**: Gentle blue (#5B9BD5) primary color with comfortable light backgrounds
- **Rounded Buttons**: Modern 12px border radius for a friendly feel
- **Responsive**: Optimized for desktop, tablet, and mobile devices

### Monetization
- **Banner Ads**: Top and bottom banner placements (728x90 / 320x50)
- **Native Ads**: Feature entry native ads with "Sponsored" labeling
- **AdMob SDK Ready**: Pre-built interfaces for Google AdMob integration

### Compliance
- **GDPR/CCPA Compliant**: Comprehensive privacy policy and terms of service
- **Cookie Consent**: Cookie consent banner with accept/reject options
- **SEO Optimized**: Meta tags, sitemap, and robots.txt

## Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/calculator-world.git
cd calculator-world
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
calculator-world/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── calculator/         # Calculator pages
│   │   ├── privacy/           # Privacy policy page
│   │   ├── terms/             # Terms of service page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/             # React components
│   │   ├── ads/               # Ad components
│   │   │   ├── AdBanner.tsx
│   │   │   └── NativeAd.tsx
│   │   ├── calculator/        # Calculator components
│   │   │   ├── Calculator.tsx
│   │   │   ├── CalculatorDisplay.tsx
│   │   │   ├── CalculatorKeypad.tsx
│   │   │   ├── ScientificPanel.tsx
│   │   │   └── HistoryPanel.tsx
│   │   ├── converter/         # Unit converter components
│   │   │   └── UnitConverter.tsx
│   │   └── ui/                # UI components
│   │       ├── Navbar.tsx
│   │       └── CookieConsent.tsx
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Color Palette

```css
--primary: #5B9BD5        /* Soft blue - operator buttons */
--primary-hover: #4A8BC7 /* Darker blue - hover state */
--bg-page: #FAFBFC        /* Very light gray - page background */
--bg-card: #FFFFFF        /* Pure white - cards/buttons */
--text-primary: #2D3748   /* Dark gray - primary text */
--text-secondary: #718096 /* Medium gray - secondary text */
--border: #E2E8F0         /* Light gray - borders */
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Other Platforms

Build the project and deploy the `.next` folder to any hosting platform that supports Next.js.

## AdMob Integration

To enable AdMob ads, follow these steps:

1. Create an AdMob account at [Google AdMob](https://admob.google.com/)
2. Create ad units for your app
3. Replace the placeholder ad components with actual AdMob SDK integration
4. Update the AdBanner.tsx and NativeAd.tsx components

## Future Enhancements

- Cloud-based history synchronization
- Custom calculation templates
- Professional calculators (finance, engineering, sports)
- Premium subscription tier (ad-free experience)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is proprietary software. All rights reserved.

## Support

For support, email support@calculatorworld.com
