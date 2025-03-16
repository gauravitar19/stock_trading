import { useState } from 'react';
import Layout from '../components/Layout';

export default function OrderBook() {
  const [selectedSymbol, setSelectedSymbol] = useState('BTC/USD');
  
  // This would typically come from an API connected to your Java backend
  const orderBookData = {
    'BTC/USD': {
      asks: [
        { price: 52450.00, size: 0.5 },
        { price: 52445.50, size: 0.7 },
        { price: 52440.25, size: 1.2 },
        { price: 52435.75, size: 0.3 },
        { price: 52430.50, size: 0.9 },
      ],
      bids: [
        { price: 52425.00, size: 1.1 },
        { price: 52420.50, size: 0.6 },
        { price: 52415.75, size: 2.3 },
        { price: 52410.25, size: 1.5 },
        { price: 52405.00, size: 0.8 },
      ]
    },
    'ETH/USD': {
      asks: [
        { price: 2895.50, size: 3.2 },
        { price: 2894.25, size: 2.5 },
        { price: 2893.00, size: 4.1 },
        { price: 2892.50, size: 1.7 },
        { price: 2891.75, size: 2.9 },
      ],
      bids: [
        { price: 2890.50, size: 3.5 },
        { price: 2889.25, size: 2.8 },
        { price: 2888.00, size: 5.2 },
        { price: 2887.50, size: 1.9 },
        { price: 2886.75, size: 3.1 },
      ]
    }
  };

  const availableSymbols = Object.keys(orderBookData);
  const currentOrderBook = orderBookData[selectedSymbol];

  return (
    <Layout title={`Exchange Core - ${selectedSymbol} Order Book`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-exchange-blue">{selectedSymbol} Order Book</h1>
        <div className="flex items-center space-x-2">
          <label htmlFor="symbol-select" className="text-gray-700">Select Symbol:</label>
          <select
            id="symbol-select"
            value={selectedSymbol}
            onChange={(e) => setSelectedSymbol(e.target.value)}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-exchange-blue"
          >
            {availableSymbols.map(symbol => (
              <option key={symbol} value={symbol}>{symbol}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-2 border-b">
          <div className="p-4 bg-red-50 border-r">
            <h2 className="text-xl font-semibold text-exchange-red mb-4">Asks (Sell Orders)</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Size</th>
                  <th className="py-2 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {currentOrderBook.asks.map((order, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 text-exchange-red">{order.price.toFixed(2)}</td>
                    <td className="py-2 px-4">{order.size.toFixed(2)}</td>
                    <td className="py-2 px-4">{(order.price * order.size).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-green-50">
            <h2 className="text-xl font-semibold text-exchange-green mb-4">Bids (Buy Orders)</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Size</th>
                  <th className="py-2 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {currentOrderBook.bids.map((order, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 text-exchange-green">{order.price.toFixed(2)}</td>
                    <td className="py-2 px-4">{order.size.toFixed(2)}</td>
                    <td className="py-2 px-4">{(order.price * order.size).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Spread</h3>
          <p className="text-gray-700">
            {(currentOrderBook.asks[currentOrderBook.asks.length - 1].price - currentOrderBook.bids[0].price).toFixed(2)} ({
              ((currentOrderBook.asks[currentOrderBook.asks.length - 1].price - currentOrderBook.bids[0].price) / 
              currentOrderBook.asks[currentOrderBook.asks.length - 1].price * 100).toFixed(2)
            }%)
          </p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-exchange-blue">Connect to Live Data</h2>
        <p className="text-gray-700">
          This is a simulation of the order book. In a real implementation, this would be connected to the Java Exchange Core backend
          using WebSockets or REST APIs to display real-time market data.
        </p>
        <p className="text-gray-700 mt-2">
          The Exchange Core&apos;s high-performance matching engine can handle millions of operations per second with
          sub-microsecond latency, making it ideal for high-frequency trading applications.
        </p>
      </div>
    </Layout>
  );
} 