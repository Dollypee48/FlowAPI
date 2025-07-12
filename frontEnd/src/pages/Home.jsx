import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Welcome to <span className="text-white">FlowAPI</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Build, test, and organize API requests with ease. Save your test flows, manage authentication, and export or share them across teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Login
            </Link>
          </div>

          {/* Feature List */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 text-left mx-auto max-w-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">
              What you can do:
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400 w-5 h-5" />
                Save API endpoints per project
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400 w-5 h-5" />
                Run tests with full JSON response view
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400 w-5 h-5" />
                Manage auth headers, tokens & query params
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400 w-5 h-5" />
                Export and share test flows as JSON files
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-400 w-5 h-5" />
                Responsive and intuitive UI
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
