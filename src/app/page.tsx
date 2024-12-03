import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Cron Manager</h1>
        <p className="text-gray-600 mb-4">
          Create and manage your scheduled tasks efficiently.
        </p>
        <Link href="/create-cron" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Create a New Cron
        </Link>
        <Link href="/x" className="block mt-4 text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          View All Crons
        </Link>
      </div>
    </div>
  );
}
