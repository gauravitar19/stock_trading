import { useState } from 'react';
import Layout from '../components/Layout';

export default function Trading() {
  const [symbol, setSymbol] = useState('BTC/USD');
  const [orderType, setOrderType] = useState('limit');
  const [side, setSide] = useState('buy');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, this would send the order to your backend
    setMessage(`Successfully placed ${side} order for ${amount} ${symbol} at ${orderType === 'limit' ? price : 'market'} price`);
    
    // Clear form
    setPrice('');
    setAmount('');
  };

  return (
    <Layout title="Stock Trading Platform - Trading">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-exchange-blue">Place Order</h2>
            
            {message && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="symbol" className="block text-gray-700 mb-2">Symbol</label>
                  <select
                    id="symbol"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-exchange-blue"
                  >
                    <option value="BTC/USD">BTC/USD</option>
                    <option value="ETH/USD">ETH/USD</option>
                    <option value="XRP/USD">XRP/USD</option>
                    <option value="LTC/USD">LTC/USD</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="order-type" className="block text-gray-700 mb-2">Order Type</label>
                  <select
                    id="order-type"
                    value={orderType}
                    onChange={(e) => setOrderType(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-exchange-blue"
                  >
                    <option value="limit">Limit</option>
                    <option value="market">Market</option>
                    <option value="ioc">Immediate-or-Cancel (IOC)</option>
                    <option value="gtc">Good-till-Cancel (GTC)</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Side</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className={`p-3 rounded-md border ${
                      side === 'buy'
                        ? 'bg-exchange-green text-white border-exchange-green'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                    onClick={() => setSide('buy')}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    className={`p-3 rounded-md border ${
                      side === 'sell'
                        ? 'bg-exchange-red text-white border-exchange-red'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                    onClick={() => setSide('sell')}
                  >
                    Sell
                  </button>
                </div>
              </div>
              
              {orderType !== 'market' && (
                <div className="mb-6">
                  <label htmlFor="price" className="block text-gray-700 mb-2">Price</label>
                  <input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-exchange-blue"
                    placeholder="Enter price"
                    required={orderType !== 'market'}
                  />
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="amount" className="block text-gray-700 mb-2">Amount</label>
                <input
                  id="amount"
                  type="number"
                  step="0.00001"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-exchange-blue"
                  placeholder="Enter amount"
                  required
                />
              </div>
              
              <button
                type="submit"
                className={`w-full p-4 rounded-md text-white font-medium ${
                  side === 'buy' ? 'bg-exchange-green' : 'bg-exchange-red'
                }`}
              >
                {side === 'buy' ? 'Buy' : 'Sell'} {symbol.split('/')[0]}
              </button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-exchange-blue">Your Open Orders</h2>
            
            <div className="text-center py-8 text-gray-500">
              No open orders
            </div>
            
            <h2 className="text-2xl font-bold mb-4 mt-6 text-exchange-blue">Your Balances</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>USD</span>
                <span className="font-medium">100,000.00</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>BTC</span>
                <span className="font-medium">5.00000000</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>ETH</span>
                <span className="font-medium">25.00000000</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>XRP</span>
                <span className="font-medium">10,000.00000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-exchange-blue">How Trading Works</h2>
        <p className="text-gray-700 mb-4">
          In a real implementation, the trading interface would connect to your Stock Trading Platform backend through APIs.
          The Java-based Stock Trading Platform system would handle the actual order matching, risk management, and settlement.
        </p>
        <p className="text-gray-700">
          Stock Trading Platform supports different order types including Immediate-or-Cancel (IOC), Good-till-Cancel (GTC),
          and Fill-or-Kill Budget (FOK-B) with extremely low latency processing.
        </p>
      </div>
    </Layout>
  );
} 