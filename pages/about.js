import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="Stock Trading Platform - About">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-exchange-blue mb-6">About Stock Trading Platform</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-exchange-blue">Overview</h2>
          <p className="text-gray-700 mb-4">
            Stock Trading Platform is an open source market exchange core based on LMAX Disruptor, Eclipse Collections,
            Real Logic Agrona, OpenHFT Chronicle-Wire, LZ4 Java, and Adaptive Radix Trees.
          </p>
          
          <p className="text-gray-700 mb-4">
            It provides a high-performance matching engine for financial exchanges, with features such as:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Orders matching engine</li>
            <li>Risk control and accounting module</li>
            <li>Disk journaling and snapshots module</li>
            <li>Trading, admin and reports API</li>
          </ul>
          
          <p className="text-gray-700">
            The system is designed for high scalability and pauseless 24/7 operation under high-load conditions and providing low-latency responses.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-exchange-blue">Performance</h2>
          <p className="text-gray-700 mb-4">
            Stock Trading Platform is optimized for high-throughput and low-latency operations:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Support for 3M users having 10M accounts in total</li>
            <li>100K order books (symbols) having 4M pending orders in total</li>
            <li>Less than 1ms worst wire-to-wire target latency for 1M+ operations per second throughput</li>
            <li>150ns per matching for large market orders</li>
          </ul>
          
          <p className="text-gray-700">
            A single order book configuration is capable of processing 5M operations per second on modest hardware
            with moderate latency degradation.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-exchange-blue">Architecture</h2>
          <p className="text-gray-700 mb-4">
            The system architecture includes:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>In-memory working state for accounting data and order books</li>
            <li>Event-sourcing - disk journaling and journal replay support, state snapshots</li>
            <li>Lock-free and contention-free orders matching and risk control algorithms</li>
            <li>No floating-point arithmetic, no loss of significance is possible</li>
            <li>Matching engine and risk control operations are atomic and deterministic</li>
            <li>Pipelined multi-core processing (based on LMAX Disruptor)</li>
            <li>Two different risk processing modes: direct-exchange and margin-trade</li>
            <li>Maker/taker fees (defined in quote currency units)</li>
            <li>Order types: Immediate-or-Cancel (IOC), Good-till-Cancel (GTC), Fill-or-Kill Budget (FOK-B)</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-exchange-blue">Frontend Demo</h2>
          <p className="text-gray-700 mb-4">
            This web interface provides a visual demonstration of the Stock Trading Platform capabilities. In a real implementation,
            this frontend would connect to a Java-based Stock Trading Platform backend running elsewhere.
          </p>
          
          <p className="text-gray-700">
            The frontend is built with Next.js and deployed on Vercel, while the full Stock Trading Platform codebase is
            available at <a href="https://github.com/gauravitar19/stock_trading" className="text-exchange-blue hover:underline">
              https://github.com/gauravitar19/stock_trading
            </a>.
          </p>
        </div>
      </div>
    </Layout>
  );
} 