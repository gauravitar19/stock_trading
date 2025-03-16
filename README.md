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

### Frontend Framework
- **Next.js (v14.0.0)**: React framework providing server-side rendering, routing, and development environment
- **React (v18.2.0)**: JavaScript library for building user interfaces
- **React DOM (v18.2.0)**: React package for DOM-specific methods

### UI and Styling
- **Tailwind CSS (v3.3.3)**: Utility-first CSS framework for rapidly building custom user interfaces
- **PostCSS (v8.4.30)**: Tool for transforming CSS with JavaScript plugins
- **Autoprefixer (v10.4.15)**: PostCSS plugin to parse CSS and add vendor prefixes automatically

### Data Fetching and State Management
- **SWR (v2.2.4)**: React Hooks library for data fetching with built-in caching and revalidation
- **Axios (v1.6.0)**: Promise-based HTTP client for making API requests

### Visualization
- **Chart.js (v4.4.0)**: JavaScript charting library for creating interactive charts
- **React-chartjs-2 (v5.2.0)**: React wrapper for Chart.js

### Development Tools
- **ESLint (v8.49.0)**: Static code analysis tool for identifying problematic patterns
- **eslint-config-next (v14.0.0)**: ESLint configuration used by Next.js

### Backend Technologies (referenced)
The Java backend (not included in this repository) utilizes:
- **LMAX Disruptor**: High-performance inter-thread messaging library
- **Eclipse Collections**: Collections framework with rich, functional, and fluent APIs
- **Real Logic Agrona**: High-performance data structures and utility methods
- **OpenHFT Chronicle-Wire**: High-performance, zero-allocation messaging format
- **LZ4 Java**: Extremely fast compression algorithm
- **Adaptive Radix Trees**: Data structure for efficient lookups

## Architecture
The Stock Trading Platform UI is built as a modular React application with the following components:
- **Layout Component**: Provides consistent navigation and structure across all pages
- **Dashboard**: Overview of system status and recent activities
- **Order Book**: Real-time view of buy and sell orders for each trading pair
- **Trading Interface**: Form-based interface for placing trade orders
- **About Page**: Information about the platform's capabilities and features

- Next.js
- React
- Tailwind CSS
- Chart.js (for future price charts)
- SWR (for data fetching)

## License

Apache License 2.0 