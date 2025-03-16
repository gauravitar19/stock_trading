import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children, title = 'Exchange Core' }) {
  const router = useRouter();
  
  const isActive = (path) => {
    return router.pathname === path ? 'bg-exchange-blue text-white' : 'text-gray-700 hover:bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Exchange Core - High-performance matching engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <span className="text-2xl font-bold text-exchange-blue cursor-pointer">Exchange Core</span>
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
              <button className="bg-exchange-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Connect API
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
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Exchange Core. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/mzheravin/exchange-core" className="text-gray-500 hover:text-gray-700">
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