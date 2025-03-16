import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Layout({ children, title = 'Stock Trading Platform' }) {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [apiKey, setApiKey] = useState('');
  
  const isActive = (path) => {
    return router.pathname === path ? 'bg-exchange-blue text-white' : 'text-gray-700 hover:bg-gray-100';
  };

  const handleConnect = () => {
    if (isConnected) {
      // Disconnect from API
      setIsConnected(false);
      // You would also want to remove API key from local storage or state
    } else {
      // Show modal to enter API key
      setShowModal(true);
    }
  };

  const handleSubmitApiKey = (e) => {
    e.preventDefault();
    // In a real application, you would validate the API key and establish a connection
    console.log('Connecting with API key:', apiKey);
    setIsConnected(true);
    setShowModal(false);
    // You might want to store the API key in local storage or a secure cookie
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Stock Trading Platform - High-performance matching engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <span className="text-2xl font-bold text-exchange-blue cursor-pointer">Stock Trading Platform</span>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/">
                  <span className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                    router.pathname === '/' ? 'border-exchange-blue text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } text-sm font-medium cursor-pointer`}>
                    Dashboard
                  </span>
                </Link>
                <Link href="/order-book">
                  <span className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                    router.pathname === '/order-book' ? 'border-exchange-blue text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } text-sm font-medium cursor-pointer`}>
                    Order Book
                  </span>
                </Link>
                <Link href="/trading">
                  <span className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                    router.pathname === '/trading' ? 'border-exchange-blue text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } text-sm font-medium cursor-pointer`}>
                    Trading
                  </span>
                </Link>
                <Link href="/about">
                  <span className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                    router.pathname === '/about' ? 'border-exchange-blue text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } text-sm font-medium cursor-pointer`}>
                    About
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button 
                onClick={handleConnect}
                className={`font-bold py-2 px-4 rounded ${
                  isConnected 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-exchange-blue hover:bg-blue-700 text-white'
                }`}
              >
                {isConnected ? 'Connected ✓' : 'Connect API'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/">
              <span className={`block pl-3 pr-4 py-2 ${isActive('/')} rounded-md text-base font-medium cursor-pointer`}>
                Dashboard
              </span>
            </Link>
            <Link href="/order-book">
              <span className={`block pl-3 pr-4 py-2 ${isActive('/order-book')} rounded-md text-base font-medium cursor-pointer`}>
                Order Book
              </span>
            </Link>
            <Link href="/trading">
              <span className={`block pl-3 pr-4 py-2 ${isActive('/trading')} rounded-md text-base font-medium cursor-pointer`}>
                Trading
              </span>
            </Link>
            <Link href="/about">
              <span className={`block pl-3 pr-4 py-2 ${isActive('/about')} rounded-md text-base font-medium cursor-pointer`}>
                About
              </span>
            </Link>
            <button 
              onClick={handleConnect}
              className={`mt-2 block w-full text-left pl-3 pr-4 py-2 rounded-md text-base font-medium cursor-pointer ${
                isConnected 
                  ? 'bg-green-600 text-white' 
                  : 'bg-exchange-blue text-white'
              }`}
            >
              {isConnected ? 'Connected ✓' : 'Connect API'}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* API Key Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-exchange-blue">Connect to API</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmitApiKey}>
              <div className="mb-4">
                <label htmlFor="apiKey" className="block text-gray-700 mb-2">API Key</label>
                <input
                  id="apiKey"
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-exchange-blue"
                  placeholder="Enter your API key"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-exchange-blue text-white rounded hover:bg-blue-700"
                >
                  Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Stock Trading Platform. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/gauravitar19/stock_trading" className="text-gray-500 hover:text-gray-700">
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Documentation
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                API
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 