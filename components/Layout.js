import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Layout({ children, title = 'Stock Trading Platform' }) {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState('');
  
  // Check for existing connection on load
  useEffect(() => {
    const savedApiKey = localStorage.getItem('stockTradingApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsConnected(true);
    }
  }, []);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path) => {
    return router.pathname === path ? 'bg-exchange-blue text-white' : 'text-gray-700 hover:bg-gray-100';
  };

  const handleConnect = () => {
    if (isConnected) {
      // Disconnect from API
      setIsConnected(false);
      localStorage.removeItem('stockTradingApiKey');
      setApiKey('');
    } else {
      // Show modal to enter API key
      setShowModal(true);
      setConnectionError('');
    }
  };

  const handleSubmitApiKey = async (e) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      setConnectionError('API key cannot be empty');
      return;
    }
    
    setIsConnecting(true);
    setConnectionError('');
    
    try {
      // Test the API key with a simple request
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${apiKey}`
      );
      const data = await response.json();
      
      // Check if the API returned an error
      if (data['Error Message'] || data['Information']) {
        throw new Error('Invalid API key or rate limit exceeded');
      }
      
      // Store API key securely
      localStorage.setItem('stockTradingApiKey', apiKey);
      
      // Update state
      setIsConnected(true);
      setShowModal(false);
      
    } catch (error) {
      console.error('Connection error:', error);
      setConnectionError(error.message || 'Failed to connect. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/order-book', label: 'Order Book' },
    { path: '/trading', label: 'Trading' },
    { path: '/about', label: 'About' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Stock Trading Platform - High-performance matching engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <span className="text-2xl font-bold text-exchange-blue cursor-pointer transition-colors duration-300 hover:text-blue-700">
                    Stock Trading Platform
                  </span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                {navItems.map(item => (
                  <Link key={item.path} href={item.path}>
                    <span className={`inline-flex items-center px-1 pt-1 border-b-2 transition-all duration-200 ${
                      router.pathname === item.path 
                        ? 'border-exchange-blue text-gray-900 font-semibold' 
                        : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                    } text-sm font-medium cursor-pointer`}>
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Connect API Button - Desktop */}
            <div className="hidden md:flex md:items-center">
              <button 
                onClick={handleConnect}
                className={`font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-sm ${
                  isConnected 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-exchange-blue hover:bg-blue-700 text-white'
                }`}
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting...
                  </span>
                ) : isConnected ? 'Connected ✓' : 'Connect API'}
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={handleConnect}
                className={`mr-2 py-2 px-3 rounded-md text-xs font-medium transition-all duration-300 ${
                  isConnected 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-exchange-blue hover:bg-blue-700 text-white'
                }`}
                disabled={isConnecting}
              >
                {isConnecting ? '...' : isConnected ? 'Connected ✓' : 'Connect'}
              </button>
              
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-exchange-blue focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg 
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
            {navItems.map(item => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`block pl-4 pr-4 py-3 border-l-4 transition-all duration-200 ${
                    router.pathname === item.path
                      ? 'border-exchange-blue bg-blue-50 text-exchange-blue font-medium'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  } text-base cursor-pointer flex items-center`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {children}
      </main>

      {/* API Key Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center animate-fadeIn">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all animate-modalSlideIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-exchange-blue">Connect to API</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500 transition-colors"
                disabled={isConnecting}
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
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    if (connectionError) setConnectionError('');
                  }}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-exchange-blue transition-all ${
                    connectionError ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your API key"
                  required
                  disabled={isConnecting}
                />
                {connectionError && (
                  <p className="mt-2 text-sm text-red-600">{connectionError}</p>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  For demo purposes, use any API key except "invalid"
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  disabled={isConnecting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 bg-exchange-blue text-white rounded-md hover:bg-blue-700 transition-colors flex items-center ${
                    isConnecting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={isConnecting}
                >
                  {isConnecting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connecting...
                    </>
                  ) : 'Connect'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Stock Trading Platform. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/gauravitar19/stock_trading" className="text-gray-500 hover:text-gray-700 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                API
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 