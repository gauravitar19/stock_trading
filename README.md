# Stock Trading Platform UI

This is a frontend visualization and demo for the [Stock Trading Platform](https://github.com/gauravitar19/stock_trading) Java-based trading engine.

## Overview

Stock Trading Platform UI provides a modern web interface to demonstrate the capabilities of the Stock Trading Platform trading engine. While the actual trading engine is implemented in Java and runs as a separate backend service, this frontend provides:

- Dashboard with system status and recent trades
- Order book visualization
- Trading interface for placing orders
- Demo of the trading system concepts

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deploying to Vercel

This project is designed to be easily deployed on Vercel:

1. Push the repository to GitHub
2. Connect your Vercel account to your GitHub account
3. Import the repository in Vercel
4. Configure environment variables if needed (e.g., API_URL for connecting to your Java backend)
5. Deploy

## Backend Connection

In a real-world scenario, this UI would connect to the Java-based Stock Trading Platform backend through APIs. The Java backend would handle:

- Order matching and execution
- Risk management
- User account management
- Market data generation

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Chart.js (for future price charts)
- SWR (for data fetching)

## License

Apache License 2.0 