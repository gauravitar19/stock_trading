import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Exchange Core - Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-exchange-blue">System Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Status:</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Operational
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Active Order Books:</span>
              <span className="font-semibold">100</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Total Users:</span>
              <span className="font-semibold">3,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Pending Orders:</span>
              <span className="font-semibold">4,832</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Current Latency:</span>
              <span className="font-semibold">0.8 μs</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-exchange-blue">Recent Trades</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Symbol</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Volume</th>
                  <th className="py-2 px-4 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">BTC/USD</td>
                  <td className="py-2 px-4 text-exchange-green">52,431.50</td>
                  <td className="py-2 px-4">0.25</td>
                  <td className="py-2 px-4 text-gray-500">10:05:32</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">ETH/USD</td>
                  <td className="py-2 px-4 text-exchange-red">2,890.75</td>
                  <td className="py-2 px-4">1.5</td>
                  <td className="py-2 px-4 text-gray-500">10:05:10</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">BTC/USD</td>
                  <td className="py-2 px-4 text-exchange-green">52,430.00</td>
                  <td className="py-2 px-4">0.1</td>
                  <td className="py-2 px-4 text-gray-500">10:04:55</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">XRP/USD</td>
                  <td className="py-2 px-4 text-exchange-red">0.5721</td>
                  <td className="py-2 px-4">1000</td>
                  <td className="py-2 px-4 text-gray-500">10:04:32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-exchange-blue">About Exchange Core</h2>
        <p className="text-gray-700 mb-4">
          Exchange Core is an open source market exchange core based on LMAX Disruptor, Eclipse Collections,
          Real Logic Agrona, OpenHFT Chronicle-Wire, LZ4 Java, and Adaptive Radix Trees.
        </p>
        <p className="text-gray-700 mb-4">
          It provides high scalability and pauseless 24/7 operation under high-load conditions with low-latency responses:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Support for 3M users having 10M accounts in total</li>
          <li>100K order books (symbols) having 4M pending orders in total</li>
          <li>Less than 1ms worst wire-to-wire target latency for 1M+ operations per second throughput</li>
          <li>150ns per matching for large market orders</li>
        </ul>
      </div>
    </Layout>
  );
} 